import { createRouter, createWebHashHistory } from 'vue-router'
import MainContent from '@/components/MainContent.vue'

const routes = [
  { path: '/', component: MainContent }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router