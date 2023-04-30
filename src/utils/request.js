const API_KEY = "e647ed11f1c3ffb1522657bb593ee4bb";

export const requests = {
  


  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languager=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchFantacyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchSFMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
};
