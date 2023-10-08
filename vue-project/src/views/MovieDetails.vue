<template>
  <div>
    <div class="h1-banner">
      <h1 v-if="movie">{{ movie.title }}</h1>
    </div>
    <div v-if="movie">
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title">
      <p><strong>Date de sortie :</strong> {{ movie.release_date }}</p>
      <p><strong>Résumé :</strong> {{ movie.overview }}</p>
      <!-- Ajoutez d'autres détails du film ici -->
    </div>
    <div v-else>
      Chargement...
    </div>
  </div>
</template>

<script>

import { useMoviesStore } from '../stores/movie.js'

export default{
  data(){
    return{
      movie: null
    };
  },
  async mounted(){
    const movieId = this.$route.params.id; //on récupère l'id du film au travers de la route
    const store = useMoviesStore(); // on instancie le store

    await store.fetchMovieDetails(movieId); // on utilise la méthode fetch du store pour demander  ce film
    this.movie = store.movieDetails; //On retourne le film à la vue depuis le store 
  }
}

</script>


<style scope>

</style>