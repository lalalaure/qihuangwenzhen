import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/consult', name: 'consult', component: () => import('../views/ConsultView.vue') },
  { path: '/atlas', name: 'atlas', component: () => import('../views/AtlasView.vue') },
  { path: '/classics', name: 'classics', component: () => import('../views/ClassicsView.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
