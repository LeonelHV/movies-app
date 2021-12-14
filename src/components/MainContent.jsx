import React from 'react'
import SliderSwiper from './SliderSwiper';
import useMovies from '../hooks/useMovies';

export default function MainContent() {
  const {
    netflixOriginals,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  } = useMovies();

  return (
    <div className=" container movieShowcase">
      <SliderSwiper movies={netflixOriginals} title="Netflix Originals" />
      <SliderSwiper movies={trending} title="Trending" />
      <SliderSwiper movies={topRated} title="Top Rated" />
      <SliderSwiper movies={actionMovies} title="Action Movies" />
      <SliderSwiper movies={comedyMovies} title="Comedy Movies" />
      <SliderSwiper movies={horrorMovies} title="Horror Movies" />
      <SliderSwiper movies={romanceMovies} title="Romance Movies" />
      <SliderSwiper movies={documentaries} title="Documentaries" />
    </div>
  )
}
