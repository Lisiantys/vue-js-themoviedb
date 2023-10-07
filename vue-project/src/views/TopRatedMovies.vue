<template>
    <div>
      <div class="h1-banner">
        <h1>Top Rated Movies</h1>
      </div>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.release_date }}</p>
          <p>{{ movie.overview }}</p>
        </li>
      </ul>
    </div>
</template>
  
<script>
import { useMoviesStore } from '../stores/movie'
import tmdbService from '../tmdbService.js';

export default {
  data() {
    return {
      movies: null
    };
  },
  async mounted() {
    const moviesStore = useMoviesStore();

    // Si les données sont déjà dans le store, utilisez-les.
    if(moviesStore.popularMovies){
      console.log("donné chargée depuis le store");
      this.movies = moviesStore.popularMovies;
    } else { //Sinon on apelle l'api pour avoir les données.
      try {
        const response = await tmdbService.getPopularMovies();
        this.movies = response.data.results;
        console.log("requete api");

        moviesStore.setPopularMovies(this.movies)
        console.log("ajout données dans le store");

      } catch (error) {
        console.error("Erreur lors de la récupération des films populaires :", error);
      }
    }
  }
}
</script>

<style scope>

</style>