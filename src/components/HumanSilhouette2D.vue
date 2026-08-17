<script setup>
import { computed } from 'vue'
import { acupoints, MERIDIAN_COLOR } from '../data/acupoints.js'
import { atlas2d } from '../data/atlas2d.js'
import { regions } from '../data/regions.js'
import standingBodyUrl from '../assets/standing-human-body-silhouette.svg'

const props = defineProps({
  view: { type: String, default: 'front' },
  activeRegion: { type: String, default: '' },
  selectedId: { type: String, default: '' }
})
const emit = defineEmits(['select'])

const W = 300
const H = 520
const CX = W / 2

// atlas2d 是解剖定位坐标，现成剪影的四肢宽度不同，因此只在显示层做分段投影。
function projectX(x2, y) {
  if (x2 <= 0) return CX + x2
  let factor = 1
  if (y <= 90) factor = 0.5       // 头面：耳、太阳穴贴近头缘
  else if (y <= 230) factor = 0.82 // 肩胸与背部
  else if (y <= 320) factor = 0.82 - (y - 230) * 0.0052 // 肘到手掌逐渐收窄
  else if (y <= 465) factor = 0.55 // 小腿与踝部
  else factor = 0.6               // 足背
  return CX + x2 * factor
}

const spots = computed(() =>
  Object.entries(atlas2d)
    .filter(([id, p]) => p.side === props.view)
    .map(([id, p]) => {
      return { id, ...(acupoints[id] || {}), x: projectX(p.x2, p.y2), y: p.y2 }
    })
    .sort((a, b) => a.y - b.y)
)

// 同经络邻近点连线（任督二脉另行绘制），形成经络走向
const segments = computed(() => {
  const groups = {}
  for (const s of spots.value) {
    const m = s.meridian
    if (m === '任脉' || m === '督脉' || m === '经外奇穴' || m.startsWith('督脉·')) continue
    ;(groups[m] = groups[m] || []).push(s)
  }
  const out = []
  const TH = 78
  for (const [meridian, pts] of Object.entries(groups)) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x
        const dy = pts[i].y - pts[j].y
        const d2 = dx * dx + dy * dy
        if (d2 > TH * TH) continue
        const minDist = (k) => {
          let best = Infinity
          for (let q = 0; q < pts.length; q++) {
            if (k === q) continue
            const ex = pts[k].x - pts[q].x
            const ey = pts[k].y - pts[q].y
            best = Math.min(best, ex * ex + ey * ey)
          }
          return best
        }
        if (d2 <= minDist(i) && d2 <= minDist(j)) {
          out.push({ meridian, x1: pts[i].x, y1: pts[i].y, x2: pts[j].x, y2: pts[j].y })
        }
      }
    }
  }
  return out
})

const activeAnchors = computed(() => {
  if (!props.activeRegion) return new Set()
  const r = regions.find((x) => x.id === props.activeRegion)
  return new Set(r ? r.anchors : [])
})

function dimmed(s) {
  return props.activeRegion && !activeAnchors.value.has(s.id)
}

function fillOf(s) {
  if (props.selectedId !== s.id && !activeAnchors.value.has(s.id)) return '#806649'
  return MERIDIAN_COLOR[s.meridian] || '#8a7c5c'
}

function dotR(s) {
  if (props.selectedId === s.id) return 8
  if (activeAnchors.value.has(s.id)) return 6
  return 4.8
}
</script>

<template>
  <div class="silhouette" :class="[props.view, { 'has-focus': props.activeRegion }]">
    <svg :viewBox="`0 0 ${W} ${H}`" class="sil" role="img" aria-label="人体穴位示意">
      <defs>
        <filter id="bodyTint" color-interpolation-filters="sRGB">
          <feFlood flood-color="#5a452f" flood-opacity="0.16" result="bodyColor" />
          <feComposite in="bodyColor" in2="SourceAlpha" operator="in" />
        </filter>
      </defs>

      <!-- 卷轴外框 -->
      <rect x="4" y="4" :width="W - 8" :height="H - 8" rx="6" class="frame-frame" />
      <rect x="9" y="9" :width="W - 18" :height="H - 18" rx="4" class="frame-inner" />
      <rect x="13" y="13" :width="W - 26" :height="H - 26" rx="3" class="paper" />

      <!-- 人体轮廓：整体淡色纯填充，一致性颜色，无描边无阴影 -->
      <g class="outline">
        <image
          :href="standingBodyUrl"
          x="0"
          y="14"
          :width="W"
          height="469"
          preserveAspectRatio="none"
          filter="url(#bodyTint)"
        />
      </g>

      <!-- 经络连线 -->
      <g class="lines" :class="{ focused: props.activeRegion }">
        <line
          v-for="(s, i) in segments"
          :key="'s' + i"
          :x1="s.x1" :y1="s.y1" :x2="s.x2" :y2="s.y2"
          :stroke="MERIDIAN_COLOR[s.meridian] || '#9a8c6d'"
          stroke-width="1.2" opacity="0.5"
        />
      </g>

      <!-- 穴位 -->
      <g class="wf-inherit slot">
        <g v-for="s in spots" :key="s.id" class="spot-wrap" :class="{ dim: dimmed(s) }">
          <circle
            :cx="s.x" :cy="s.y"
            :r="dotR(s)"
            :fill="fillOf(s)"
            stroke="#faf3e2" stroke-width="1.5"
            :class="{ on: props.selectedId === s.id, anchor: activeAnchors.has(s.id) }"
            tabindex="0"
            @click="emit('select', s.id)"
            @keydown.enter="emit('select', s.id)"
          >
            <title>{{ s.name }} · {{ s.meridian }}</title>
          </circle>
        </g>
      </g>
    </svg>
    <p class="gf-caption hint">{{ view === 'front' ? '正面（示右）' : '背面（示右）' }} · 人体轮廓 · 穴位为近似定位 · 任督及双侧穴仅示一侧</p>
  </div>
</template>

<style scoped>
.silhouette {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.sil {
  width: auto;
  height: 580px;
  max-height: 640px;
  background: rgba(245, 239, 224, 0.4);
}
.frame-frame {
  fill: none;
  stroke: var(--ink-30);
  stroke-width: 1.5;
}
.frame-inner {
  fill: none;
  stroke: rgba(176, 60, 39, 0.5);
  stroke-width: 1;
}
.paper {
  fill: rgba(247, 241, 226, 0.55);
}

.wf-inherit .spot-wrap {
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.spot-wrap.dim {
  opacity: 0.28;
}
.spot-wrap circle {
  transition: r 0.15s ease;
}
.lines {
  opacity: 0.08;
  transition: opacity 0.2s ease;
}
.lines.focused {
  opacity: 0.55;
}
.spot-wrap circle {
  opacity: 0.72;
}
.spot-wrap circle.anchor,
.spot-wrap circle.on {
  opacity: 1;
}
.spot-wrap circle.on {
  stroke: #fff8e8;
  stroke-width: 2.4;
}
.hint {
  margin: 10px 0 0;
}
</style>
