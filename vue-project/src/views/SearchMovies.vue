<template>
  <div>
    <div class="h1-banner">
      <h1>Search Movies</h1>
    </div>
    <div>

    <div class="search-container">
      <input v-model="query" placeholder="Recherchez un film...">
      <button @click="searchMovies">Rechercher</button>
    </div>

    <ul v-if="movies && movies.length" class="movie-list">
        <li class="movie-container" v-for="movie in movies" :key="movie.id">
          <RouterLink :to="`/movie/${movie.id}`">
            <h3 class="movie-title">{{ movie.title }}</h3>
            <img :src="'https://image.tmdb.org/t/p/w200' + movie.poster_path" :alt="movie.title">
            <p class="movie-release"><strong>Sortie :</strong> {{ movie.release_date }}</p>
            <p class="movie-overview"><strong>Résumé :</strong> {{ movie.overview.substring(0, 70) + (movie.overview.length > 70 ? '...' : '') }}</p>
          </RouterLink>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
import tmdbService from '../tmdbService.js';

export default{
  data(){
    return{
      query: '',
      movies: []
    }
  },
  methods: {
    async searchMovies(){
      if(this.query){
        console.log('requete effectuée')
        const response = await tmdbService.getSearchMovies(this.query);
        this.movies = response.data.results;
      }
    }
  },
}
</script>

<style scoped>
.movie-list {
  display: grid;
  width: 90%;
  margin: 2% auto;
  grid-template-columns: repeat(5, 1fr); /* Par défaut, 5 colonnes */
  grid-gap: 30px;
  grid-auto-rows: minmax(100px, auto);
  list-style: none;
}

.movie-container {
  background:rgb(239, 239, 239);
  padding: 15px;
  border: 1px solid grey;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.movie-release{
  padding: 4% 0;
}
.movie-overview{
  text-align: initial;
}

.search-container {
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Champ de saisie */
.search-container input {
  flex: 1; 
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px; 
  outline: none; 
  transition: border-color 0.2s;
}

.search-container input:focus {
  border-color: #333333; 
}

.search-container button {
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  background-color: #808080;
  color: #fff; 
  cursor: pointer; 
  border-radius: 0 4px 4px 0; 
  transition: background-color 0.2s; 
}

.search-container button:hover {
  background-color: #333333;
}

@media (max-width: 1240px) {
  .movie-list {
    grid-template-columns: repeat(3, 1fr); /* 3 colonnes pour les tablettes */
    grid-gap: 30px;
  }
}

@media (max-width: 768px) {
  .movie-list {
    width: 80%;
    grid-template-columns: repeat(2, 1fr); /* 2 colonnes pour les mobiles */
  }
}

@media (max-width: 525px) {
  .movie-list {
    width: 80%;
    grid-template-columns: repeat(1, 1fr); /* 2 colonnes pour les mobiles */
  }
}

</style>