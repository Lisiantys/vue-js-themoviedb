import { defineStore } from 'pinia';
import tmdbService from '../tmdbService';

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    popularMovies: null,
    movieDetails: null
  }),
  actions: {
    setPopularMovies(movies) { //s'occupe d'ajouter LES films au store
      this.popularMovies = movies;
    },
    setMovieDetails(movie) {//s'occupe d'ajouter le film au store
      this.movieDetails = movie;
    },
    async fetchMovieDetails(movieId) { //fait un demande à l'api et retourne la reponse a la méthode
      const response = await tmdbService.getMovieDetails(movieId);
      this.setMovieDetails(response.data);
    }
  }
});
