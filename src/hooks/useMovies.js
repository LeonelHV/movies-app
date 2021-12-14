import { useEffect, useState } from "react";
import { getMovies } from "../services/getFetchAPI";

export default function useMovies() {
  const [netflixOriginals, setNetflixOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setcomedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);
  useEffect(() => {
    getMovies({ type: "urlOriginalNetflix" }).then(movie => setNetflixOriginals(movie));
    getMovies({ type: "urlTrending" }).then(movie => setTrending(movie));
    getMovies({ type: "urlTopRated" }).then(movie => setTopRated(movie));
    getMovies({ type: "urlActionMovies" }).then(movie => setActionMovies(movie));
    getMovies({ type: "urlComedyMovies" }).then(movie => setcomedyMovies(movie));
    getMovies({ type: "urlHorrorMovies" }).then(movie => setHorrorMovies(movie));
    getMovies({ type: "urlRomanceMovies" }).then(movie => setRomanceMovies(movie));
    getMovies({ type: "urlDocumentaries" }).then(movie => setDocumentaries(movie));
  }, []);
  return {
    netflixOriginals,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
}
