import { defineStore } from 'pinia';

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    popularMovies: null
  }),
  actions: {
    setPopularMovies(movies) {
      this.popularMovies = movies;
    }
  }
});
