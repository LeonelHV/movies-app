const { REACT_APP_API_KEY } = process.env
const BASE_URL = 'https://api.themoviedb.org/3'

const BASE_URL_GENRES = `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&with_genres`

export const BASE_URL_SEARCH = `${BASE_URL}/search/multi?api_key=${REACT_APP_API_KEY}&language=en-US&include_adult=false`

export const urlMovie = {
    urlOriginalNetflix: `${BASE_URL}/discover/tv?api_key=${REACT_APP_API_KEY}&with_networks=213`,
    urlTrending: `${BASE_URL}/trending/all/day?api_key=${REACT_APP_API_KEY}`,
    urlTopRated: `${BASE_URL}/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`,
    urlActionMovies: `${BASE_URL_GENRES}=28`,
    urlComedyMovies: `${BASE_URL_GENRES}=35`,
    urlHorrorMovies: `${BASE_URL_GENRES}=27`,
    urlRomanceMovies: `${BASE_URL_GENRES}=10749`,
    urlDocumentaries: `${BASE_URL_GENRES}=99`
}


const mediaType = {
    tv: ["urlOriginalNetflix"],
    movie: ["urlActionMovies", "urlComedyMovies", "urlHorrorMovies", "urlRomanceMovies", "urlDocumentaries", "urlTopRated"],
    ambos: ["urlTrending", "urlTopRated"]
}