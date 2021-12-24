import { useEffect, useState } from 'react'
import { getMovies } from '../services/getFetchAPI'

export default function useMovies({ visibleMovies }) {
  const [netflixOriginals, setNetflixOriginals] = useState([])
  const [trending, setTrending] = useState([])
  const [topRated, setTopRated] = useState([])
  const [actionMovies, setActionMovies] = useState([])
  const [comedyMovies, setcomedyMovies] = useState([])
  const [horrorMovies, setHorrorMovies] = useState([])
  const [romanceMovies, setRomanceMovies] = useState([])
  const [documentaries, setDocumentaries] = useState([])
  useEffect(() => {

    getMovies({ type: 'urlOriginalNetflix', mediaType: "tv" }).then(setNetflixOriginals)
    getMovies({ type: 'urlTrending' }).then(setTrending)
    getMovies({ type: 'urlTopRated', mediaType: "movie" }).then(setTopRated)
    getMovies({ type: 'urlActionMovies', mediaType: "movie" }).then(setActionMovies)

  }, [])
  useEffect(() => {
    if (visibleMovies) {
      getMovies({ type: 'urlComedyMovies', mediaType: "movie" }).then(setcomedyMovies)
      getMovies({ type: 'urlHorrorMovies', mediaType: "movie" }).then(setHorrorMovies)
      getMovies({ type: 'urlRomanceMovies', mediaType: "movie" }).then(setRomanceMovies)
      getMovies({ type: 'urlDocumentaries', mediaType: "movie" }).then(setDocumentaries)
    }

  }, [visibleMovies])

  return {
    netflixOriginals,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  }
}
