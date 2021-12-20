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

    getMovies({ type: 'urlOriginalNetflix' }).then(setNetflixOriginals)
    getMovies({ type: 'urlTrending' }).then(setTrending)
    getMovies({ type: 'urlTopRated' }).then(setTopRated)
    getMovies({ type: 'urlActionMovies' }).then(setActionMovies)

  }, [])
  useEffect(() => {
    if (visibleMovies) {
      getMovies({ type: 'urlComedyMovies' }).then(setcomedyMovies)
      getMovies({ type: 'urlHorrorMovies' }).then(setHorrorMovies)
      getMovies({ type: 'urlRomanceMovies' }).then(setRomanceMovies)
      getMovies({ type: 'urlDocumentaries' }).then(setDocumentaries)
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
