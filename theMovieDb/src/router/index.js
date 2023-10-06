import { createRouter, createWebHistory } from 'vue-router'
import FrenchMovie from '../views/FrenchMovies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/french-movies',
      name: 'frenchMovie',
      component: FrenchMovie
    },
  ]
})

export default router
