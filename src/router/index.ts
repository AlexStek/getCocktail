import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '@/components/MainContent.vue'
import NotFoundPage from '@/components/NotFound.vue'

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
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router