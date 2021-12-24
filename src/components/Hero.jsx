import React, { useEffect, useState, useContext } from 'react'

import ReactPlayer from 'react-player'
import InfoOverlay from './InfoOverlay'
import MoviesContext from '../context/MoviesContext'

import { videosVimeo } from '../services/getLinksVideo'
import useNearScreen from '../hooks/useNearScreen'
export default function Hero() {
  const [movieHero, setMovieHero] = useState('')
  const [endVideo, setEndVideo] = useState(false)
  const { mute, play, setPlay } = useContext(MoviesContext)

  const { isNearScreen, fromRef } = useNearScreen({
    distance: '0px',
    once: false
  });
  useEffect(() => {
    if (movieHero === '') {
      const i = Math.floor(Math.random() * (videosVimeo.length))
      setMovieHero(videosVimeo[i])
    }

    isNearScreen ? setPlay(true) : setPlay(false)
  }, [movieHero, endVideo, isNearScreen, setPlay])

  return (


    <div className='hero' ref={fromRef}>
      {!endVideo
        ? <ReactPlayer
          url={movieHero.url}
          playing={play}
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

          <InfoOverlay movieHero={movieHero} endVideo={endVideo} />

        </div>
      </div>
    </div>

  )
}
