<template>
    <div>
        <ul class="movie-list">
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
</template>

<script>
export default{
    props:{
        movies: Array
    }
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