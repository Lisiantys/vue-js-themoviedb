import { defineStore } from 'pinia';
import tmdbService from '../tmdbService';

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    //Film populaires
    popularMovies: null,
    frenchMovies: null,
    americanMovies: null,
    movieDetails: null,
    currentMovies: null
  }),
  actions: {
    setPopularMovies(movies) { //s'occupe d'ajouter LES films au store
      this.popularMovies = movies;
    },
    setFrenchMovies(movies) { //s'occupe d'ajouter LES films au store
      this.frenchMovies = movies;
    },
    setAmericanMovies(movies){
      this.americanMovies = movies;
    },
    setMovieDetails(movie) { //s'occupe d'ajouter le film au store
      this.movieDetails = movie;
    },
    setCurrentDisplayedMovies(movies){
      this.currentMovies = movies;
    },
    async fetchMovieDetails(movieId) { //fait un demande à l'api et retourne la reponse a la méthode
      const movieResponse = await tmdbService.getMovieDetails(movieId);
      const videosResponse = await tmdbService.getMovieVideos(movieId);

      const movieData = movieResponse.data;
      movieData.videos = videosResponse.data.results;

      this.setMovieDetails(movieData);
    }
  }
});
