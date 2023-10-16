import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '@/components/MainContent.vue'

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: MainContent 
  },
  {
    path: '/:code',
    name: 'cocktail',
    component: MainContent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router