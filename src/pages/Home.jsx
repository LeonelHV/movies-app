import React, { useContext } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import MainContent from '../components/MainContent'
import MainSearch from '../components/MainSearch'
import MoviesContext from '../context/MoviesContext'
const Home = () => {


  const { keyword } = useContext(MoviesContext)

  return (
    <>
      < Navigation />
      {
        keyword === '' ? <>
          <Hero />
          <MainContent />
        </>
          : <MainSearch />
      }

    </>
  )
}

export default Home
