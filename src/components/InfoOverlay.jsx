import React, { useContext, useState } from 'react'
import { ReactComponent as MuteIcon } from '../static/images/mute.svg'
import { ReactComponent as UnMuteIcon } from '../static/images/unmute.svg'
import { ReactComponent as PlayIcon } from '../static/images/playbutton.svg'
import { ReactComponent as InfoIcon } from '../static/images/icon-info.svg'
import MovieDetails from './MovieDetails'
import Modal from './Modal'
import MoviesContext from '../context/MoviesContext'
const InfoOverlay = ({ movieHero, endVideo }) => {
  const [toggleModal, setToggleModal] = useState(false)
  const [dataMovie, setDataMovie] = useState({})
  const { name, synopsis, id, media_type } = movieHero
  const { mute, setMute, setPlay } = useContext(MoviesContext)
  const handleSound = () => {
    setMute(prev => !prev)
  }
  const handleClick = (e) => {
    if (e.target.classList.contains('btn-info')) {
      const idMovie = e.target.getAttribute("data-id")
      const typeMovie = e.target.getAttribute("data-type")
      setDataMovie({ id: idMovie, type: typeMovie })
      document.body.classList.add('no-scroll')
      setPlay(false)
      setToggleModal(true)
    }
  }
  return (
    <>
      <div className='info-overlay' onClick={handleClick}>

        <h1>{name}</h1>
        <p>{synopsis} </p>
        <div className='container-buttons'>
          <button className='btn btn-play'><PlayIcon />Play</button>
          <button className='btn btn-info' data-id={id} data-type={media_type}><InfoIcon />More Information</button>
        </div>
        <div className='container-mute' onClick={handleSound}>
          {!endVideo
            ? mute ? <MuteIcon className='mute-icon' /> : <UnMuteIcon className='mute-icon' />
            : null}
        </div>
      </div>
      {toggleModal && <Modal setToggleModal={setToggleModal} setPlay={setPlay}><MovieDetails dataMovie={dataMovie} /></Modal>}
    </>
  )
}

export default InfoOverlay
