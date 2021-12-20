import React, { useState } from 'react'

const Context = React.createContext({})

export function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([])
  const [keyword, setKeyword] = useState('')
  const [mute, setMute] = useState(true)
  const [maxOffSet, setMaxOffSet] = useState(0);
  const [page, setPage] = useState(1);


  return <Context.Provider
    value={{
      movies,
      keyword,
      mute,
      maxOffSet,
      page,
      setPage,
      setMute,
      setKeyword,
      setMovies,
      setMaxOffSet,
    }}
  >{children}</Context.Provider>
}

export default Context
