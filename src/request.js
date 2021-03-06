const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  // fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  // fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
};

export default requests;
