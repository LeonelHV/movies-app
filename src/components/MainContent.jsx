import React, { useEffect, useState } from 'react'
import SliderSwiper from './SliderSwiper'
import useMovies from '../hooks/useMovies'
import useNearScreen from '../hooks/useNearScreen'


export default function MainContent() {
  const [visibleMovies, setVisibleMovies] = useState(false);
  const {
    netflixOriginals,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
  } = useMovies({ visibleMovies })
  const { isNearScreen, fromRef } = useNearScreen({
    distance: '100px'
  });
  useEffect(() => {

    setVisibleMovies(isNearScreen)
    return () => {
      setVisibleMovies(!isNearScreen)
    }
  }, [isNearScreen])
  return (
    <>
    <div className=' container movieShowcase'>
      <SliderSwiper movies={netflixOriginals} title='Netflix Originals' />
      <SliderSwiper movies={trending} title='Trending' />
      <SliderSwiper movies={topRated} title='Top Rated' />
      <SliderSwiper movies={actionMovies} title='Action Movies' />
      <div ref={fromRef}></div>
      {isNearScreen && <>
        <SliderSwiper movies={comedyMovies} title='Comedy Movies' />
        <SliderSwiper movies={horrorMovies} title='Horror Movies' />
        <SliderSwiper movies={romanceMovies} title='Romance Movies' />
        <SliderSwiper movies={documentaries} title='Documentaries' />
      </>}

    </div>
   
    </>
  )
}
