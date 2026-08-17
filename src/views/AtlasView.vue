<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import InkIcon from '../components/InkIcon.vue'
import HumanSilhouette2D from '../components/HumanSilhouette2D.vue'
import { acupoints, MERIDIAN_COLOR } from '../data/acupoints.js'
import { regions } from '../data/regions.js'

const selected = ref(null)
const activeRegion = ref('')
const route = useRoute()
const router = useRouter()

const spotCount = computed(() => Object.keys(acupoints).length)

function focusRegion(id) {
  activeRegion.value = id === activeRegion.value ? '' : id
  selected.value = null
  clearPointQuery()
}

function onSelectSpot(id) {
  selectPoint(id)
}

function showAnchor(id) {
  selectPoint(id)
}

function selectPoint(id) {
  if (!acupoints[id]) return
  selected.value = { id, ...acupoints[id] }
  router.replace({ query: { ...route.query, point: id } })
}

function clearPointQuery() {
  const query = { ...route.query }
  delete query.point
  router.replace({ query })
}

watch(
  () => route.query.point,
  (point) => {
    const id = typeof point === 'string' ? point : ''
    selected.value = id && acupoints[id] ? { id, ...acupoints[id] } : null
  },
  { immediate: true }
)

function clearActive() {
  activeRegion.value = ''
}
</script>

<template>
  <div class="gf-page atlas">
    <h1 class="gf-title page-title">人体图鉴</h1>
    <p class="gf-sub page-sub">素手丹青 · 经络点穴</p>
    <p class="gf-note intro">
      正背两面共 {{ spotCount }} 个常用穴位。先选部位，再点穴位查看定位与按揉要领。
    </p>

    <div class="atlas-layout">
      <!-- 左侧：部位列表 -->
      <aside class="side">
        <div class="panel-heading">
          <div>
            <p class="gf-recommend-tag">按部位浏览</p>
            <p class="panel-caption">快速定位身体区域</p>
          </div>
          <button v-if="activeRegion" class="clear-region" @click="clearActive">清除</button>
        </div>
        <div class="regions">
          <button
            v-for="r in regions"
            :key="r.id"
            class="region-btn"
            :class="{ on: activeRegion === r.id }"
            @click="focusRegion(r.id)"
          >
            <span class="region-btn-icon"><InkIcon :name="r.icon" :size="15" /></span>
            <span>{{ r.name }}</span>
          </button>
        </div>
        <p class="gf-recommend-tag legend-title">经络颜色</p>
        <div class="legend">
          <span v-for="(c, m) in MERIDIAN_COLOR" :key="m" class="legend-item">
            <i :style="{ background: c }"></i>{{ m }}
          </span>
        </div>
      </aside>

      <!-- 中间：人体（正背并排） -->
      <main class="stage-wrap">
        <div class="stage-head">
          <div>
            <p class="stage-kicker">ATLAS / 经络图</p>
            <p class="gf-caption">点击穴点查看详情</p>
          </div>
          <span class="stage-state">{{ activeRegion ? regions.find((r) => r.id === activeRegion)?.name : '全部穴位' }}</span>
        </div>
        <div class="stage">
          <div class="figure-cell">
          <p class="figure-tag"><span>01</span>正面</p>
            <HumanSilhouette2D
              view="front"
              :active-region="activeRegion"
              :selected-id="selected?.id || ''"
              @select="onSelectSpot"
            />
          </div>
          <div class="figure-cell">
          <p class="figure-tag"><span>02</span>背面</p>
            <HumanSilhouette2D
              view="back"
              :active-region="activeRegion"
              :selected-id="selected?.id || ''"
              @select="onSelectSpot"
            />
          </div>
        </div>
      </main>

      <!-- 右侧：详情 -->
      <aside class="detail">
        <div v-if="selected" class="detail-card">
          <p class="detail-kicker">穴位档案 / SELECTED POINT</p>
          <h3>{{ selected.name }} <small>{{ selected.pinyin }}</small></h3>
          <p class="meridian">归属：{{ selected.meridian }}</p>
          <p class="loc">定位：{{ selected.location }}</p>
          <div class="common">
            <span v-for="(c, i) in selected.common" :key="i" class="gf-chip">{{ c }}</span>
          </div>
          <p v-if="selected.method" class="method">按揉法：{{ selected.method }}</p>
          <p v-if="selected.caution" class="cautious"><span class="caut-mark">須就医</span>{{ selected.caution }}</p>
        </div>
        <div v-else class="detail-placeholder">
          <span class="placeholder-mark">穴</span>
          <p class="detail-kicker">POINT DETAIL</p>
          <p>点击人体上的穴位点，</p>
          <p>查看定位、归经与按揉要领。</p>
        </div>
        <div v-if="activeRegion" class="active-recs">
          <p class="gf-recommend-tag">本部位导向穴</p>
          <div class="common">
            <button
              v-for="id in regions.find((r) => r.id === activeRegion)?.anchors || []"
              :key="id"
              class="gf-chip on"
              @click="showAnchor(id)"
            >{{ acupoints[id]?.name }}</button>
            <button class="gf-chip clear" @click="clearActive">× 收起</button>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.page-title,
.page-sub {
  text-align: center;
}
.page-title {
  font-size: 30px;
  margin-bottom: 6px;
}
.intro {
  max-width: 720px;
  margin: 14px auto 26px;
}

.atlas-layout {
  display: grid;
  grid-template-columns: 178px minmax(480px, 1fr) 248px;
  gap: 22px;
  min-height: 560px;
  align-items: start;
}
@media (max-width: 900px) {
  .atlas-layout {
    grid-template-columns: 1fr;
  }
}

.side,
.detail {
  padding: 16px;
  border: 1px solid var(--ink-20);
  background: rgba(247, 241, 226, 0.48);
  border-radius: 6px;
}
.panel-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}
.panel-caption {
  margin: 4px 0 0;
  color: var(--ink-40);
  font-size: 11px;
}
.clear-region {
  border: 0;
  padding: 2px 0;
  background: none;
  color: var(--vermilion);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.side .regions {
  display: grid;
  gap: 4px;
  margin-top: 14px;
}
.region-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px 9px;
  border: 1px solid transparent;
  border-left: 2px solid transparent;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.22);
  font-family: var(--font-serif);
  font-size: 13px;
  text-align: left;
  color: var(--ink-deep);
  cursor: pointer;
  transition: all 0.2s ease;
}
.region-btn-icon {
  display: inline-flex;
  color: var(--teal-mid);
}
.region-btn:hover {
  border-color: var(--ink-20);
  background: rgba(255, 255, 255, 0.6);
}
.region-btn.on {
  background: rgba(176, 58, 46, 0.1);
  color: var(--vermilion);
  border-color: rgba(176, 58, 46, 0.16);
  border-left-color: var(--vermilion);
}
.region-btn.on .region-btn-icon {
  color: var(--vermilion);
}

.legend-title {
  margin-top: 24px;
}
.legend {
  display: grid;
  gap: 7px;
  margin-top: 10px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--ink-soft);
}
.legend-item i {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: inline-block;
}

.stage-wrap {
  display: flex;
  flex-direction: column;
}
.stage-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 4px 10px;
}
.stage-kicker,
.detail-kicker {
  margin: 0 0 3px;
  color: var(--gold);
  font-family: var(--font-sans);
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.stage-head .gf-caption {
  margin: 0;
}
.stage-state {
  padding: 5px 9px;
  border: 1px solid var(--gold);
  border-radius: 999px;
  color: var(--vermilion);
  font-size: 12px;
}
.stage {
  flex: 1;
  min-height: 520px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: start;
  padding: 14px 10px 10px;
  background:
    radial-gradient(circle at 24% 18%, rgba(201, 160, 99, 0.14), transparent 42%),
    radial-gradient(circle at 78% 82%, rgba(74, 93, 87, 0.12), transparent 40%),
    rgba(245, 239, 224, 0.4);
  border: 1px solid var(--ink-20);
  border-radius: 8px;
  overflow: hidden;
}
.figure-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0;
}
.figure-tag {
  margin: 0 0 6px;
  padding: 3px 12px;
  border: 1px solid rgba(176, 58, 46, 0.5);
  border-radius: 999px;
  color: var(--vermilion);
  font-family: var(--font-kai);
  font-size: 13px;
  letter-spacing: 4px;
  text-indent: 4px;
}
.figure-tag span {
  margin-right: 7px;
  color: var(--gold);
  font-family: var(--font-sans);
  font-size: 9px;
  letter-spacing: 1px;
}

.detail-card {
  padding: 18px;
  border-top: 3px solid var(--vermilion);
  border-right: 1px solid var(--gold);
  border-bottom: 1px solid var(--gold);
  border-left: 1px solid var(--gold);
  border-radius: 5px;
  background: rgba(201, 160, 99, 0.1);
}
.detail-card h3 {
  font-family: var(--font-kai);
  margin: 0 0 6px;
  color: var(--vermilion);
  letter-spacing: 2px;
}
.detail-card h3 small {
  color: var(--ink-soft);
  font-family: var(--font-serif);
}
.meridian {
  color: var(--teal-mid);
  margin: 0 0 8px;
  font-size: 14px;
}
.loc {
  color: var(--ink-deep);
  font-size: 14px;
  line-height: 1.8;
  margin: 0 0 10px;
}
.common {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}
.method {
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 1.8;
  border-top: 1px dashed var(--gold);
  padding-top: 8px;
  margin: 0;
}
.cautious {
  color: var(--vermilion);
  font-size: 12px;
  margin: 8px 0 0;
  line-height: 1.6;
}
.caut-mark {
  display: inline-block;
  margin-right: 8px;
  padding: 1px 7px;
  border: 1px solid var(--vermilion);
  border-radius: 3px;
  font-family: var(--font-kai);
  letter-spacing: 2px;
  font-size: 11px;
  vertical-align: 1px;
}
.detail-placeholder {
  color: var(--ink-40);
  padding: 22px 8px 26px;
  font-family: var(--font-kai);
  letter-spacing: 2px;
  line-height: 2;
}
.placeholder-mark {
  display: grid;
  width: 38px;
  height: 38px;
  margin-bottom: 14px;
  place-items: center;
  border: 1px solid var(--gold);
  color: var(--vermilion);
  font-family: var(--font-kai);
  font-size: 20px;
}
.detail-placeholder .detail-kicker {
  margin-bottom: 12px;
}

.active-recs {
  margin-top: 16px;
}
.gf-chip {
  cursor: pointer;
  border: 1px solid var(--teal-mid);
  background: transparent;
  color: var(--teal-dark);
}
.gf-chip.on {
  background: var(--teal-dark);
  color: var(--paper);
  border-color: var(--teal-dark);
}
.gf-chip.clear {
  color: var(--ink-40);
  border-color: var(--ink-30);
}

@media (max-width: 1100px) and (min-width: 901px) {
  .atlas-layout {
    grid-template-columns: 160px minmax(420px, 1fr) 220px;
    gap: 12px;
  }
  .side,
  .detail {
    padding: 12px;
  }
}
@media (max-width: 900px) {
  .atlas-layout {
    gap: 14px;
  }
  .side {
    order: 1;
  }
  .stage-wrap {
    order: 2;
  }
  .detail {
    order: 3;
  }
  .side .regions {
    display: flex;
    overflow-x: auto;
    padding-bottom: 4px;
  }
  .region-btn {
    width: auto;
    flex: 0 0 auto;
    white-space: nowrap;
  }
  .legend {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .stage {
    padding-inline: 2px;
  }
}
@media (max-width: 620px) {
  .stage {
    grid-template-columns: 1fr;
  }
  .sil {
    height: min(580px, 132vw);
  }
  .stage-state {
    font-size: 11px;
  }
}
</style>
