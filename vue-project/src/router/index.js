import { createRouter, createWebHistory } from 'vue-router'
import AmericanMovies from '../views/AmericanMovies.vue'
import FrenchMovies from '../views/FrenchMovies.vue'
import LastMovies from '../views/LastMovies.vue'
import MovieDetails from '../views/MovieDetails.vue'
import SearchMovies from '../views/SearchMovies.vue'
import TopRatedMovies from '../views/TopRatedMovies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TopRatedMovies
    },
    {
      path: '/american-movies',
      name: 'american',
      component: AmericanMovies
    },
    {
      path: '/french-movies',
      name: 'french',
      component: FrenchMovies
    },
    {
      path: '/last-movies',
      name: 'last',
      component: LastMovies
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieDetails
    },
    {
      path: '/search-movies',
      name: 'search',
      component: SearchMovies
    }
  ]
})

export default router
