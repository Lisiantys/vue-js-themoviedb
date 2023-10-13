<template>
    <div>
      <div class="h1-banner">
        <h1>Top Rated Movies</h1>
      </div>
      <MovieList :movies="topRatedMovies"/>
    </div>
</template>
  
<script>
import { useMoviesStore } from '../stores/movie'
import tmdbService from '../tmdbService.js';
import { RouterLink, RouterView } from 'vue-router'
import MovieList from '../components/MovieList.vue';

export default {
  components:{
    MovieList
  },
  data() {
    return {
      topRatedMovies: null
    };
  },
  async mounted() {
    const moviesStore = useMoviesStore();

    // Si les données sont déjà dans le store, utilisez-les.
    if(moviesStore.popularMovies){
      console.log("donné chargée depuis le store");
      this.topRatedMovies = moviesStore.popularMovies;
    } else { //Sinon on apelle l'api pour avoir les données.
      try {
        const response = await tmdbService.getPopularMovies();
        this.topRatedMovies = response.data.results;
        console.log("requete api");

        moviesStore.setPopularMovies(this.topRatedMovies)
        console.log("ajout données dans le store");

      } catch (error) {
        console.error("Erreur lors de la récupération des films populaires :", error);
      }
    }
  }
}
</script>
