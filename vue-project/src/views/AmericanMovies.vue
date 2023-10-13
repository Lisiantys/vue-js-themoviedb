<template>
  <div>
    <div class="h1-banner">
      <h1>American Movies</h1>
    </div>
    <MovieList :movies="usMovies"/>
  </div>
</template>

<script>

import { useMoviesStore } from '../stores/movie.js';
import tmdbService from '../tmdbService.js';
import { RouterLink } from 'vue-router';
import MovieList from '../components/MovieList.vue';

export default{
  components: {
    MovieList
  },
  data(){
    return{
      usMovies: null
    }
  },
  async mounted(){
    const moviesStore = useMoviesStore();
    if(moviesStore.americanMovies){
      this.usMovies = moviesStore.americanMovies;
      console.log("récupération données store");
    } else{
      try{
        const response = await tmdbService.getAmericanMovies();
        this.usMovies = response.data.results;
        console.log("appel api");

        moviesStore.setAmericanMovies(this.usMovies);
        console.log("ajout données dans le store");
      } catch (error) {
        console.log("Impossible de récuperer les films américains", error);
      }
    }
  }
}

</script>
