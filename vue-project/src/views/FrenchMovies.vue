<template>
  <div>
    <div class="h1-banner">
      <h1>French Movies</h1>
    </div>
    <MovieList :movies="frMovies"/>
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
  data(){
    return{
      frMovies: null
    }
  },
  async mounted(){
    const frenchMoviesStore = useMoviesStore();

    if(frenchMoviesStore.frenchMovies){
      this.frMovies = frenchMoviesStore.frenchMovies;
      console.log("donné chargée depuis le store");

    } else {
      try{
        const response = await tmdbService.getFrenchMovies();
        this.frMovies = response.data.results;
        console.log(this.frMovies);
        frenchMoviesStore.setFrenchMovies(this.frMovies);
        console.log("ajout données dans le store");
      } catch (error){
        console.log("Erreur dans la récupération des films français.", error);
      }
    }
  }
}

</script>
