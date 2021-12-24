import axios from 'axios'


import { BASE_URL_SEARCH, urlMovie } from './urls'

export async function getMovies({ type = '', mediaType = '' }) {
  try {

    const URL = urlMovie[type]
    const request = await axios.get(URL)

    const movies = request.data.results.map(movie => {
      const { backdrop_path, genre_ids, overview, title, poster_path, id, media_type = mediaType } = movie

      return { backdrop_path, genre_ids, overview, title, poster_path, id, media_type }

    })
    return movies
  } catch (error) {
    return console.log('Error', error)
  }
}

export async function getMovieSearch({ keyword, page, setMaxOffSet }) {

  try {
    const URL = `${BASE_URL_SEARCH}&query=${keyword}&page=${page}`
    const request = await axios.get(URL)

    const maxPage = request.data.total_pages
    setMaxOffSet(maxPage)
    const movies = request.data.results.map(movie => {
      const { backdrop_path, original_title, title, original_name, id, poster_path, media_type } = movie
      return { backdrop_path, original_title, title, original_name, id, poster_path, media_type }
    })


    const filterMovies = movies.filter(movief => movief.backdrop_path !== null && movief.media_type !== "person")


    return filterMovies
  } catch (error) {
    return console.log('Error', error)

  }

}