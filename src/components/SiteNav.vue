<script setup>
import { RouterLink, useRoute } from 'vue-router'
import SealLogo from './SealLogo.vue'

const route = useRoute()
const links = [
  { to: '/', label: '开卷' },
  { to: '/consult', label: '问诊' },
  { to: '/atlas', label: '人体图鉴' },
  { to: '/classics', label: '典籍库' }
]
</script>

<template>
  <header class="site-nav">
    <RouterLink to="/" class="brand">
      <SealLogo />
      <span class="brand-text">
        <span class="brand-name">岐黄问诊</span>
        <span class="brand-sub">岐黄之术 · 道法自然</span>
      </span>
    </RouterLink>
    <nav class="nav-links">
      <RouterLink
        v-for="l in links"
        :key="l.to"
        :to="l.to"
        class="nav-link"
        :class="{ active: route.path === l.to }"
      >
        <span class="nav-char">{{ l.label }}</span>
        <span class="nav-dot" />
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px clamp(16px, 4vw, 56px);
  background: rgba(245, 239, 224, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--ink-10);
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--ink-deep);
}
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.brand-name {
  font-family: var(--font-kai);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 4px;
  color: var(--vermilion);
}
.brand-sub {
  font-size: 11px;
  color: var(--ink-40);
  letter-spacing: 3px;
}
.nav-links {
  display: flex;
  gap: 6px;
}
.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 18px;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.25s;
}
.nav-char {
  font-family: var(--font-kai);
  font-size: 17px;
  letter-spacing: 4px;
}
.nav-link:hover {
  color: var(--vermilion);
}
.nav-link.active {
  color: var(--vermilion);
}
.nav-link.active .nav-dot {
  width: 22px;
  transform: scaleX(1);
}
.nav-dot {
  width: 0;
  height: 2px;
  background: var(--vermilion);
  transform: scaleX(0);
  transition: all 0.3s ease;
  border-radius: 2px;
}
@media (max-width: 720px) {
  .brand-sub {
    display: none;
  }
  .nav-link {
    padding: 8px 10px;
  }
  .nav-char {
    font-size: 15px;
    letter-spacing: 2px;
  }
}
</style>
