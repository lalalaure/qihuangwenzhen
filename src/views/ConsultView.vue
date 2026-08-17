<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useConsultStore } from '../stores/consult.js'
import { STATE } from '../engine/rule.js'
import { signGroups } from '../data/signs.js'
import { regionMap } from '../data/regions.js'
import InkIcon from '../components/InkIcon.vue'

function regionName(id) {
  return regionMap[id] ? regionMap[id].name : id
}

const store = useConsultStore()
const { step, selectedRegions, selectedSymptoms, signAnswers, result, symptomGroups } = storeToRefs(store)

const stepDefs = [
  { key: STATE.REGION, label: '择部位' },
  { key: STATE.SYMPTOM, label: '辨症状' },
  { key: STATE.SIGN, label: '补体征' },
  { key: STATE.DONE, label: '得良方' }
]
const stepNo = computed(() => stepDefs.findIndex((s) => s.key === step.value) + 1)

// 体征题选区
const signSelections = ref(
  signGroups.reduce((acc, g) => {
    acc[g.id] = g.multi ? [] : ''
    return acc
  }, {})
)

function toggleSign(g, label) {
  const s = signSelections.value[g.id]
  if (g.multi) {
    const i = s.indexOf(label)
    if (i >= 0) s.splice(i, 1)
    else s.push(label)
  } else {
    signSelections.value[g.id] = label
  }
}

function goSign() {
  store.setSignAnswers(signSelections.value)
  store.next()
}
</script>

<template>
  <div class="gf-page consult">
    <h1 class="gf-title page-title">岐黄问诊</h1>
    <p class="gf-sub page-sub">辨证论治 · 一切以典籍为据</p>

    <!-- 步骤条 -->
    <div class="gf-stepbar">
      <template v-for="(s, i) in stepDefs" :key="s.key">
        <div class="step" :class="{ on: step === s.key, done: stepNo > i + 1 }">
          <span class="dot">{{ ['壹', '贰', '叁', '肆'][i] }}</span>
          <span>{{ s.label }}</span>
        </div>
        <span v-if="i < stepDefs.length - 1" class="line"></span>
      </template>
    </div>

    <!-- ===== 第一步：择部位（可多选） ===== -->
    <section v-if="step === STATE.REGION">
      <div class="grid-region">
        <button
          v-for="r in store.regionList"
          :key="r.id"
          class="gf-card region-card"
          :class="{ on: selectedRegions.includes(r.id) }"
          @click="store.toggleRegion(r.id)"
        >
          <span v-if="selectedRegions.includes(r.id)" class="region-check">✓</span>
          <span class="region-icon"><InkIcon :name="r.icon" :size="26" /></span>
          <span class="region-name">{{ r.name }}</span>
          <span class="region-desc gf-caption">{{ r.desc }}</span>
        </button>
      </div>
      <div class="actions">
        <button class="gf-btn" :disabled="!selectedRegions.length" @click="store.next()">
          下一步 · 辨症状（已选 {{ selectedRegions.length }} 处）
        </button>
      </div>
      <p class="gf-caption step-hint">可同时选择多处不适部位（至少 1 处）。</p>
    </section>

    <!-- ===== 第二步：辨症状（按部位分组多选） ===== -->
    <section v-else-if="step === STATE.SYMPTOM">
      <div class="section-wrap">
        <div v-for="g in symptomGroups" :key="g.region.id" class="symptom-group">
          <div class="region-head">
            <span class="region-icon"><InkIcon :name="g.region.icon" :size="30" /></span>
            <h2 class="zh">{{ g.region.name }}</h2>
          </div>
          <p class="gf-caption group-hint">{{ g.region.desc }}</p>
          <div class="grid-symptom">
            <button
              v-for="s in g.symptoms"
              :key="s.id"
              class="gf-card symptom-card"
              :class="{ on: store.isSymptomSelected(s.id) }"
              @click="store.toggleSymptom(s.id)"
            >
              <span class="check">{{ store.isSymptomSelected(s.id) ? '✓' : '' }}</span>
              <strong>{{ s.name }}</strong>
              <small>{{ s.desc }}</small>
            </button>
          </div>
        </div>
        <div class="actions">
          <button class="gf-btn ghost" @click="store.back()">← 重选部位</button>
          <button class="gf-btn" :disabled="!selectedSymptoms.length" @click="store.next()">
            下一步 · 补体征（已选 {{ selectedSymptoms.length }} 项）
          </button>
        </div>
      </div>
    </section>

    <!-- ===== 第三步：补体征 ===== -->
    <section v-else-if="step === STATE.SIGN">
      <div v-for="g in signGroups" :key="g.id" class="sign-group">
        <h3 class="sign-title">{{ g.title }}</h3>
        <p class="gf-caption sign-hint">{{ g.hint }}</p>
        <div class="grid-sign">
          <button
            v-for="o in g.options"
            :key="o.label"
            class="gf-card sign-card"
            :class="{ on: g.multi ? signSelections[g.id].includes(o.label) : signSelections[g.id] === o.label }"
            @click="toggleSign(g, o.label)"
          >
            <span>{{ o.label }}</span>
          </button>
        </div>
      </div>
      <div class="actions">
        <button class="gf-btn ghost" @click="store.back()">← 上一步</button>
        <button class="gf-btn" @click="goSign">辨证 · 出结果</button>
      </div>
    </section>

    <!-- ===== 第四步：得良方 ===== -->
    <section v-else class="result">
      <div v-if="result" class="result-body">
        <div class="result-head">
          <h2 class="zh">辨证结论</h2>
        </div>

        <template v-if="result.ranked.length">
          <div class="pattern-block">
            <div v-for="p in result.ranked.slice(0, 3)" :key="p.id" class="gf-card pattern-card">
              <div class="pattern-top">
                <span class="gf-level" :class="p.level.rank === 3 ? 'high' : p.level.rank === 2 ? 'mid' : 'low'">
                  {{ p.level.key }}
                </span>
                <h3>{{ p.name }}</h3>
                <span class="pattern-score gf-caption">吻合度 {{ p.score > 1 ? '强' : p.score > 0.5 ? '中' : '弱' }}</span>
              </div>
              <p class="pattern-summary">{{ p.summary }}</p>
              <p class="pattern-zh" v-if="p.tongue || p.pulse">
                <span v-if="p.tongue">舌象：{{ p.tongue }}</span>
                <span v-if="p.pulse">｜脉象参考：{{ p.pulse }}</span>
              </p>

              <div v-if="p.matched.length" class="matched">
                <p class="gf-recommend-tag">匹配症状{{ p.matched.length > 1 ? '（多部位）' : '' }}</p>
                <div class="matched-chips">
                  <span v-for="(m, i) in p.matched" :key="i" class="gf-chip">{{ m.symptom }}<em class="gf-caption">·{{ regionName(m.region) }}</em></span>
                </div>
              </div>

              <div v-if="p.citations.length" class="citations">
                <p class="gf-recommend-tag">典籍出处</p>
                <figure v-for="(c, i) in p.citations" :key="i" class="citation">
                  <blockquote>{{ c.text }}</blockquote>
                  <figcaption>——《{{ c.book }} · {{ c.chapter }}》</figcaption>
                  <p v-if="c.note" class="citation-note">注：{{ c.note }}</p>
                </figure>
              </div>

              <div class="recommend">
                <p class="gf-recommend-tag">药食同源 · 膳食</p>
                <ul>
                  <li v-for="(d, i) in p.recommendations.diet" :key="i">{{ d }}</li>
                </ul>
                <p class="gf-recommend-tag">起居 · 作息</p>
                <ul>
                  <li v-for="(l, i) in p.recommendations.life" :key="i">{{ l }}</li>
                </ul>
                <p class="gf-recommend-tag">导引 · 运动</p>
                <ul>
                  <li v-for="(e, i) in p.recommendations.exercise" :key="i">{{ e }}</li>
                </ul>
                <p class="gf-recommend-tag">经络按摩 · 选穴</p>
                <div class="acupoints">
                  <RouterLink
                    v-for="a in p.recommendations.acupoints"
                    :key="a.id"
                    :to="{ name: 'atlas', query: { point: a.id } }"
                    class="gf-chip"
                    :title="a.location"
                  >{{ a.name }}</RouterLink>
                </div>
                <p v-if="p.recommendations.massage" class="massage">要领：{{ p.recommendations.massage }}</p>
              </div>

              <p class="cautious"><span class="caut-mark">須就医</span>{{ p.cautious }}</p>
            </div>
          </div>
        </template>

        <p v-else class="gf-note">暂未匹配到足够明确的证型。请返回补选更贴近的症状与体征，或结合典籍库继续查阅。</p>

        <div class="actions">
          <button class="gf-btn" @click="store.reset()">重新问诊</button>
          <RouterLink to="/atlas" class="gf-btn ghost">前往人体图鉴</RouterLink>
        </div>
      </div>
    </section>
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

.step-hint {
  text-align: center;
  margin-top: 26px;
}

/* 部位 */
.grid-region {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 8px;
}
.region-card {
  border: none;
  border-bottom: 2px solid var(--gold);
  text-align: center;
  padding: 22px 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.region-card:hover {
  transform: translateY(-3px);
}
.region-card.on {
  border-color: var(--vermilion);
  box-shadow: inset 0 0 0 1px var(--vermilion);
}
.region-check {
  position: absolute;
  top: 8px;
  right: 8px;
  color: var(--paper);
  background: var(--vermilion);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  font-size: 12px;
  box-shadow: 0 0 0 2px rgba(245, 239, 224, 0.9);
}
.region-card {
  position: relative;
}
.region-icon {
  display: inline-flex;
  color: var(--teal-mid);
  margin-bottom: 2px;
}
.region-name {
  font-family: var(--font-kai);
  font-size: 18px;
  letter-spacing: 4px;
  color: var(--teal-dark);
}

/* 症状 */
.section-wrap {
  max-width: 760px;
  margin: 0 auto;
}
.symptom-group {
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px dashed var(--gold-light);
}
.group-hint {
  margin: 0 0 12px;
}
.region-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}
.region-head .zh {
  font-family: var(--font-kai);
  letter-spacing: 6px;
  color: var(--teal-dark);
  margin: 0;
  flex: 1;
}
.gf-btn.small {
  padding: 6px 14px;
  font-size: 13px;
  letter-spacing: 2px;
}
.grid-symptom {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 14px;
}
.symptom-card {
  position: relative;
  border: 1px solid var(--ink-20);
  padding: 16px 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  text-align: left;
}
.symptom-card .check {
  position: absolute;
  top: 8px;
  right: 10px;
  color: var(--paper);
  background: var(--vermilion);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s;
}
.symptom-card.on {
  border-color: var(--vermilion);
  box-shadow: inset 0 0 0 1px var(--vermilion);
}
.symptom-card.on .check {
  opacity: 1;
}
.symptom-card strong {
  color: var(--ink-deep);
  font-size: 15px;
}
.symptom-card small {
  color: var(--ink-soft);
  font-size: 12px;
  line-height: 1.6;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 30px;
  flex-wrap: wrap;
}
.gf-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* 体征 */
.sign-group {
  margin-bottom: 26px;
}
.sign-title {
  font-family: var(--font-kai);
  letter-spacing: 4px;
  color: var(--teal-dark);
  margin: 0 0 2px;
}
.sign-hint {
  margin: 0 0 12px;
}
.grid-sign {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 12px;
}
.sign-card {
  cursor: pointer;
  padding: 14px 12px;
  display: flex;
  align-items: center;
  border: 1px solid var(--ink-20);
  text-align: left;
  font-size: 14px;
  line-height: 1.7;
}
.sign-card::before {
  content: '';
  width: 7px;
  height: 7px;
  border: 1px solid var(--ink-40);
  border-radius: 50%;
  margin-right: 10px;
  flex: none;
  transition: all 0.2s ease;
}
.sign-card.on::before {
  background: var(--vermilion);
  border-color: var(--vermilion);
  box-shadow: inset 0 0 0 2px var(--paper);
}
.sign-card.on {
  border-color: var(--vermilion);
  box-shadow: inset 0 0 0 1px var(--vermilion);
  color: var(--vermilion);
}

/* 结果 */
.result-body {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.result-head {
  text-align: center;
}
.result-head .zh {
  font-family: var(--font-kai);
  letter-spacing: 10px;
  color: var(--vermilion);
  font-size: 28px;
  margin: 6px 0 0;
}
.pattern-block {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.pattern-card {
  padding: 24px;
}
.pattern-top {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
.pattern-top h3 {
  font-family: var(--font-kai);
  letter-spacing: 4px;
  font-size: 20px;
  color: var(--teal-dark);
  margin: 0;
  flex: 1;
}
.pattern-score {
  font-size: 12px;
}
.pattern-summary {
  color: var(--ink-soft);
  line-height: 1.9;
  margin: 10px 0 6px;
}
.pattern-zh {
  color: var(--teal-mid);
  font-size: 14px;
  margin: 4px 0 16px;
  letter-spacing: 1px;
}
.matched {
  margin-bottom: 14px;
}
.matched-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}
.matched-chips .gf-chip em {
  font-style: normal;
  margin-left: 4px;
  color: var(--ink-40);
}

.citations {
  border-top: 1px dashed var(--gold);
  padding-top: 12px;
  margin-top: 14px;
}
.citation {
  margin: 0 0 12px;
}
.citation blockquote {
  margin: 0 0 4px;
  font-family: var(--font-kai);
  line-height: 1.9;
  color: var(--ink-deep);
  padding-left: 16px;
  border-left: 3px solid var(--gold-light);
}
.citation figcaption {
  color: var(--ink-soft);
  font-size: 13px;
  letter-spacing: 1px;
}
.citation-note {
  color: var(--ink-40);
  font-size: 12px;
  margin: 4px 0 0;
}

.recommend ul {
  margin: 8px 0 14px;
  padding-left: 18px;
}
.recommend li {
  color: var(--ink-soft);
  line-height: 1.9;
  font-size: 14px;
}
.acupoints {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0;
}
.massage {
  color: var(--teal-mid);
  font-size: 13px;
  margin: 8px 0 0;
}
.cautious {
  margin-top: 14px;
  padding: 12px 14px;
  background: rgba(176, 58, 46, 0.08);
  border-left: 3px solid var(--vermilion);
  color: var(--vermilion);
  font-size: 13px;
  line-height: 1.8;
}
.gf-note-link {
  color: var(--vermilion);
  text-decoration: underline;
}
.caut-mark {
  display: inline-block;
  margin-right: 10px;
  padding: 2px 8px;
  border: 1px solid var(--vermilion);
  border-radius: 3px;
  font-family: var(--font-kai);
  letter-spacing: 2px;
  font-size: 12px;
  vertical-align: 1px;
}
</style>
