<script setup>
import { classics } from '../data/classics.js'
import { regions } from '../data/regions.js'
import { knowledge } from '../data/knowledge.js'
import { acupoints } from '../data/acupoints.js'

const topQuote = classics.sqzsd_zhong
const yearNote = `今 · ${new Date().getFullYear()}`
const featuredStats = [
  { num: regions.length, label: '部位' },
  { num: Object.keys(classics).length, label: '典籍章节' },
  { num: Object.values(knowledge).reduce((n, r) => n + r.length, 0), label: '问诊症状' },
  { num: Object.keys(acupoints).length, label: '穴位' }
]
</script>

<template>
  <div class="gf-page home">
    <!-- ===== 主视觉 ===== -->
    <section class="hero">
      <div class="hero-deco" aria-hidden="true">
        <span class="sun"></span>
        <span class="cloud c1"></span>
        <span class="cloud c2"></span>
      </div>
      <p class="hero-kicker">道法自然 · 辨证论治</p>
      <h1 class="hero-title">岐黄问诊</h1>
      <p class="hero-sub">以《黄帝内经》为据，循藏典籍，辨证而养。</p>
      <p class="gf-quote hero-quote">{{ topQuote.text }}</p>
      <div class="hero-actions">
        <RouterLink to="/consult" class="gf-btn">開始问诊</RouterLink>
        <RouterLink to="/classics" class="gf-btn ghost">阅研典籍</RouterLink>
      </div>
      <p class="hero-caption">非医疗诊断 · 养生参考，急症请及时线下就医</p>
    </section>

    <!-- ===== 三大入口 ===== -->
    <section>
      <div class="gf-section-title">
        <span class="zh">阅卷</span><span class="en">Explore</span>
      </div>
      <div class="triptych">
        <RouterLink to="/consult" class="gf-card entry">
          <div class="entry-seal">问</div>
          <h3>岐黄问诊</h3>
          <p>选部位 → 辨症状 → 依体征加权，引出证型与典籍出处。</p>
        </RouterLink>
        <RouterLink to="/atlas" class="gf-card entry">
          <div class="entry-seal">图</div>
          <h3>人体图鉴</h3>
          <p>直观定位百会、足三里等 {{ Object.keys(acupoints).length }} 穴，明晰经脉归属与按揉要领。</p>
        </RouterLink>
        <RouterLink to="/classics" class="gf-card entry">
          <div class="entry-seal">典</div>
          <h3>典籍库</h3>
          <p>逐条著录《素问》《灵枢》原文，可供查证、比对底本。</p>
        </RouterLink>
      </div>
    </section>

    <!-- ===== 问诊流程 ===== -->
    <section>
      <div class="gf-section-title">
        <span class="zh">流程</span><span class="en">How It Works</span>
      </div>
      <div class="flow">
        <div class="flow-step">
          <span class="flow-num">壹</span>
          <p class="flow-name">择部位</p>
          <p class="gf-caption">头、胃脘、腰背……点选身体的任一不适区域</p>
        </div>
        <div class="flow-step">
          <span class="flow-num">贰</span>
          <p class="flow-name">辨症状</p>
          <p class="gf-caption">组合最贴切的不适表现，动机分层次</p>
        </div>
        <div class="flow-step">
          <span class="flow-num">叁</span>
          <p class="flow-name">补体征</p>
          <p class="gf-caption">舌象、冷热、睡眠、二便、情志等加权修正</p>
        </div>
        <div class="flow-step">
          <span class="flow-num">肆</span>
          <p class="flow-name">得良方</p>
          <p class="gf-caption">显明／可能／需留意分级，附原文出处与养生建议</p>
        </div>
      </div>
    </section>

    <!-- ===== 底部数据 ===== -->
    <section class="stats">
      <div v-for="s in featuredStats" :key="s.label" class="stat">
        <span class="stat-num">{{ s.num }}</span>
        <span class="stat-label">{{ s.label }}</span>
      </div>
      <p class="gf-note">
        本站所有诊断建议皆源于已核证典籍原文，仅供自我认识与日常养生参照；不替代执业医师面诊。
        若症状进行性加重、突发剧烈或涉及急症，请务必及时就医。
      </p>
    </section>

    <p class="year gf-caption">{{ yearNote }} · 岐黄之术 · 谨以传承</p>
  </div>
</template>

<style scoped>
.home {
  padding-top: 8px;
}

/* ---- 主视觉 ---- */
.hero {
  position: relative;
  text-align: center;
  padding: 56px 20px 40px;
  overflow: hidden;
}
.hero-deco {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero-deco .sun {
  position: absolute;
  top: 18px;
  right: 12%;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, var(--gold-light), var(--gold) 70%, transparent 72%);
  opacity: 0.5;
  filter: blur(1px);
}
.hero-deco .cloud {
  position: absolute;
  border: 2px solid var(--ink-20);
  border-radius: 50%;
  opacity: 0.6;
}
.hero-deco .c1 {
  left: 8%;
  top: 24%;
  width: 130px;
  height: 34px;
}
.hero-deco .c2 {
  left: 22%;
  top: 18%;
  width: 70px;
  height: 22px;
}
.hero-kicker {
  letter-spacing: 10px;
  color: var(--teal-mid);
  font-size: 14px;
  margin-bottom: 18px;
}
.hero-title {
  font-family: var(--font-kai);
  font-size: clamp(44px, 8vw, 76px);
  letter-spacing: 22px;
  color: var(--vermilion);
  margin: 0 0 10px;
  text-shadow: 0 2px 0 rgba(176, 58, 46, 0.18);
}
.hero-sub {
  color: var(--ink-soft);
  letter-spacing: 6px;
  margin: 0 0 28px;
}
.hero-quote {
  max-width: 620px;
  margin: 0 auto 30px;
  font-size: 15px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-caption {
  margin-top: 26px;
  color: var(--ink-40);
  font-size: 13px;
  letter-spacing: 2px;
}

/* ---- 三入口 ---- */
.triptych {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.entry {
  display: block;
  text-decoration: none;
  padding: 28px 22px;
  color: var(--ink-deep);
  position: relative;
}
.entry h3 {
  font-family: var(--font-kai);
  letter-spacing: 6px;
  color: var(--teal-dark);
  margin: 14px 0 10px;
  font-size: 20px;
}
.entry p {
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.9;
  margin: 0;
}
.entry-seal {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  font-family: var(--font-kai);
  font-size: 22px;
  color: var(--paper);
  background: var(--cinnabar);
  border-radius: 6px;
  transform: rotate(-3deg);
  box-shadow: inset 0 0 0 2px var(--paper), 0 3px 8px rgba(26, 22, 20, 0.22);
}

/* ---- 流程 ---- */
.flow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
  counter-reset: flow;
}
.flow-step {
  text-align: center;
  padding: 22px 14px;
  border-top: 1px dashed var(--gold);
}
.flow-num {
  font-family: var(--font-kai);
  font-size: 30px;
  color: var(--gold);
  letter-spacing: 2px;
}
.flow-name {
  font-family: var(--font-kai);
  letter-spacing: 6px;
  color: var(--teal-dark);
  font-size: 18px;
  margin: 8px 0 6px;
}

/* ---- 数据 ---- */
.stats {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 22px;
}
.stat {
  text-align: center;
  padding: 20px;
  border: 1px solid var(--ink-20);
  border-radius: var(--radius);
}
.stat-num {
  display: block;
  font-family: var(--font-kai);
  font-size: 40px;
  color: var(--vermilion);
}
.stat-label {
  color: var(--ink-soft);
  letter-spacing: 4px;
  font-size: 14px;
}
.stats .gf-note {
  grid-column: 1 / -1;
}
.year {
  text-align: center;
  margin-top: 40px;
  letter-spacing: 4px;
}
</style>
