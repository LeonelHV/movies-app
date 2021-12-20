import axios from 'axios'


import { BASE_URL_SEARCH, urlMovie } from './urls'

export async function getMovies({ type = '' }) {
  try {

    const URL = urlMovie[type]
    const request = await axios.get(URL)

    const movies = request.data.results.map(movie => {
      const { backdrop_path, genre_ids, original_title, overview, title, original_name, poster_path, id } = movie
      return { backdrop_path, genre_ids, original_title, overview, title, original_name, poster_path, id }

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
      const { backdrop_path, original_title, title, original_name, id } = movie
      return { backdrop_path, original_title, title, original_name, id }
    })

    return movies
  } catch (error) {
    return console.log('Error', error)

  }

}