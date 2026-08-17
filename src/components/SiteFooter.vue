<script setup>
import SealLogo from './SealLogo.vue'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <SealLogo />
        <p class="footer-cite">
          上工治未病，不治已病，此之谓也。——《黄帝内经 · 素问 · 四气调神大论》
        </p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>图鉴</h4>
          <span>十四经脉 · 经络穴位</span>
          <span>腧穴主治 · 按摩技法</span>
        </div>
        <div class="footer-col">
          <h4>典籍</h4>
          <span>黄帝内经 · 素问</span>
          <span>灵枢 · 难经 · 本草</span>
        </div>
        <div class="footer-col">
          <h4>养生</h4>
          <span>食疗 · 作息 · 导引</span>
          <span>情志 · 音乐调养</span>
        </div>
      </div>
    </div>
    <div class="footer-legal">
      <p>
        <strong>郑重声明：</strong>本站所有内容仅为传统中医药文化科普与自我调理参考，不构成医疗诊断或治疗建议。
        所引典籍原文仅供学术研读。若您已出现持续、剧烈或进行性加重的症状，请务必及时就医，遵循执业医师指导。
      </p>
      <p class="copyright">岐黄问诊 · 承古法，近自然</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 80px;
  background: var(--ink-deep);
  color: var(--paper);
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding: 48px clamp(20px, 6vw, 80px);
}
.footer-brand {
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer-cite {
  font-family: var(--font-serif);
  font-size: 13px;
  line-height: 1.9;
  color: var(--gold-light);
  opacity: 0.9;
}
.footer-links {
  display: flex;
  gap: 48px;
}
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
}
.footer-col h4 {
  margin: 0 0 6px;
  font-family: var(--font-kai);
  letter-spacing: 3px;
  color: var(--gold);
}
.footer-col span {
  color: rgba(245, 239, 224, 0.72);
}
.footer-legal {
  border-top: 1px solid rgba(245, 239, 224, 0.15);
  padding: 22px clamp(20px, 6vw, 80px);
  font-size: 12px;
  line-height: 1.9;
  color: rgba(245, 239, 224, 0.6);
}
.footer-legal strong {
  color: var(--gold-light);
}
.copyright {
  margin: 12px 0 0;
  text-align: right;
  letter-spacing: 4px;
  color: rgba(245, 239, 224, 0.4);
}
@media (max-width: 760px) {
  .footer-inner {
    flex-direction: column;
  }
  .footer-links {
    flex-wrap: wrap;
    gap: 24px;
  }
}
</style>