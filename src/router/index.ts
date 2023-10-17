import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '@/components/MainContent.vue'

const routes = [
  { 
    path: '/', 
    name: 'home',
    redirect: {
      name: 'cocktail',
      params: {
        code: 'margarita'
      }
    },
    children: [
      {
        path: '/:code',
        name: 'cocktail',
        component: MainContent
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router