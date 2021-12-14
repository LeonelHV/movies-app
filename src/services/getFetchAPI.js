import axios from "axios";

const { REACT_APP_API_KEY } = process.env;

let URL;

const BASE_URL = "https://api.themoviedb.org/3";

const BASE_URL_GENRES = `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres`;

const BASE_URL_SEARCH = `${BASE_URL}/search/multi?api_key=${REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`;

const urlMovie = {
  urlOriginalNetflix: `${BASE_URL}/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213`,
  urlTrending: `${BASE_URL}/trending/all/day?api_key=${REACT_APP_API_KEY}`,
  urlTopRated: `${BASE_URL}/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
  urlActionMovies: `${BASE_URL_GENRES}=28`,
  urlComedyMovies: `${BASE_URL_GENRES}=35`,
  urlHorrorMovies: `${BASE_URL_GENRES}=27`,
  urlRomanceMovies: `${BASE_URL_GENRES}=10749`,
  urlDocumentaries: `${BASE_URL_GENRES}=99`,
};

export async function getMovies({ type = "", searchTerm = "" }) {
  try {
    searchTerm ? (URL = `${BASE_URL_SEARCH}&query=${searchTerm}`) : (URL = urlMovie[type]);
    const request = await axios.get(URL);
    const movies = request.data.results.map(movie => {
      const { backdrop_path, genre_ids, original_title, overview, title, original_name, poster_path, id } = movie;
      return { backdrop_path, genre_ids, original_title, overview, title, original_name, poster_path, id };
    });
    console.log(movies);
    return movies;
  } catch (error) {
    return console.log("Error", error);
  }
}
