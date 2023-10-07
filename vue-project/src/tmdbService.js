import axios from 'axios';

const tmdbAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzBmNzlmYjRlNWM5MWJhMzA3NmI1YzhhMWI2NTRkNyIsInN1YiI6IjY1MjA3OGE1OTY3Y2M3MzQyOGNlZTZjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Prrmk2d2zdbCjNQ4LvFTw_jrfp1kYsiW9k_Mf-hzdGw'
  }
});

const tmdbService = {
  getPopularMovies() {
    return tmdbAPI.get(`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`);
  },
  // Ajoutez d'autres méthodes au besoin
};

export default tmdbService;
