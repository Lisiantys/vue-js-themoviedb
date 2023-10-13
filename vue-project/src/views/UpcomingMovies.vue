<template>
  <div>
    <div class="h1-banner">
      <h1>Upcoming Movies</h1>
    </div>
    <MovieList :movies="soonMovies"/>
  </div>
</template>

<script>

import { useMoviesStore } from '../stores/movie.js';
import tmdbService from '../tmdbService.js';
import { RouterLink } from 'vue-router';
import MovieList from '../components/MovieList.vue';


export default{
  components:{
    MovieList
  },
  data(){
    return{
      soonMovies: null
    }
  },
  async mounted(){
    const comingMoviesStore = useMoviesStore();
    if(comingMoviesStore.upcomingMovies){
      this.soonMovies = comingMoviesStore.upcomingMovies;
      console.log("récupération données store");
    } else{
      try{
        const response = await tmdbService.getUpcomingMovies();
        this.soonMovies = response.data.results;
        console.log(response.data.results);
        console.log(this.soonMovies);
        comingMoviesStore.setUpcomingMovies(this.soonMovies);
        console.log("ajout données dans le store");
      } catch (error){
        console.log("Erreur dans la récupération des films français.", error);
      }
    }
  }
}

</script>

