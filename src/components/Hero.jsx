import React, { useEffect, useState, useContext } from 'react'

import ReactPlayer from 'react-player'
import InfoOverlay from './InfoOverlay'
import MoviesContext from '../context/MoviesContext'
import { videosVimeo } from '../services/getLinksVideo'
export default function Hero() {
  const [movieHero, setMovieHero] = useState('')
  const [endVideo, setEndVideo] = useState(false)
  const { mute } = useContext(MoviesContext)


  useEffect(() => {
    if (movieHero === '') {
      const i = Math.floor(Math.random() * (videosVimeo.length))
      setMovieHero(videosVimeo[i])
    }

  }, [movieHero, endVideo])
  return (


    <div className='hero'>
      {!endVideo
        ? <ReactPlayer
          url={movieHero.url} playing
          width='100%'
          height='100%'
          volume={1}
          muted={mute}
          className='video'
          onEnded={() => setEndVideo(true)}
        />
        : <img className='hero--image' src={movieHero.url_image} alt={movieHero.name} />}

      <div className='overlay'>

        <div className='container container-info-overlay'>

          <InfoOverlay movieHero={movieHero} />

        </div>
      </div>
    </div>

  )
}
