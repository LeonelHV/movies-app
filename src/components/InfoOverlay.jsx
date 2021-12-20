import React, { useContext } from 'react'
import { ReactComponent as MuteIcon } from '../static/images/mute.svg'
import { ReactComponent as UnMuteIcon } from '../static/images/unmute.svg'
import { ReactComponent as PlayIcon } from '../static/images/playbutton.svg'
import { ReactComponent as InfoIcon } from '../static/images/icon-info.svg'
import MoviesContext from '../context/MoviesContext'
const InfoOverlay = ({ movieHero }) => {
  const { name, synopsis, id } = movieHero
  const { mute, setMute } = useContext(MoviesContext)
  const handleSound = () => {
    setMute(prev => !prev)
  }
  return (
    <div className='info-overlay'>

      <h1>{name}</h1>
      <p>{synopsis} </p>
      <div className='container-buttons'>
        <button className='btn btn-play'><PlayIcon />Play</button>
        <button className='btn btn-info' data-id={id}><InfoIcon />More Information</button>
      </div>
      <div className='container-mute' onClick={handleSound}>

        {mute ? <MuteIcon className='mute-icon' /> : <UnMuteIcon className='mute-icon' />}

      </div>
    </div>
  )
}

export default InfoOverlay
