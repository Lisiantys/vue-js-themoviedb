<template>
  <div>
    <div class="main-container" v-if="movie">
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" :alt="movie.title">
      <div class="movie-details-container">
        <button @click="previousPage"> Revenir à la page précédente</button>
        <iframe v-if="movie.videos && movie.videos.length" 
          width="560" 
          height="315" 
          :src="'https://www.youtube.com/embed/' + movie.videos[0].key" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
        <div class="h1-banner">
          <h1 v-if="movie">{{ movie.title }}</h1>
        </div>
        <p><strong>Phrase d'accroche :</strong>{{ movie.tagline }}</p>
        <p><strong>Titre original : </strong>{{ movie.original_title }}</p>
        <p><strong>Date de sortie :</strong> {{ movie.release_date }}</p>
        <p><strong>Note moyenne :</strong>{{ movie.vote_average }}</p>
        <p><strong>Langue originales :</strong>{{ movie.original_language }}</p>
        <p><strong>Résumé :</strong>{{ movie.overview }}</p>
      </div>
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
  methods:{
    previousPage(){
      this.$router.go(-1);
    }
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
.main-container{
  display:flex;
  background: #7f7f7f;
  justify-content: space-around;
}
.movie-details-container{
  width: 50%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: auto 0;
}
strong{
  margin-right: 5px;
}
</style>