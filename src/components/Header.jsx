import React, { useEffect, useState, useContext } from 'react'
import PrimaryNavigation from './PrimaryNavigation';
import SecondaryNavigation from './SecondaryNavigation';
import ReactPlayer from 'react-player'
import InfoOverlay from './InfoOverlay';
import MoviesContext from "../context/MoviesContext";
import { videosVimeo } from '../services/getLinksVideo';
export default function Header() {

  const [scrollNav, setScrollNav] = useState(false);
  const [movieHeader, setMovieHeader] = useState("");
  const [endVideo, setEndVideo] = useState(false);
  const { mute } = useContext(MoviesContext);
  const changeNav = () => {
    const scroll = window.scrollY;
    if (scroll >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    if (movieHeader === "") {
      let i = Math.floor(Math.random() * (videosVimeo.length));
      setMovieHeader(videosVimeo[i])

    }
    window.addEventListener('scroll', changeNav)
  }, [movieHeader, endVideo]);
  return (<>
    <div className={scrollNav ? "container-navigation active" : "container-navigation"}>
      <div className="navigation" >
        <PrimaryNavigation />
        <SecondaryNavigation />
      </div>
    </div>
    <header className="header">
      {!endVideo ?
        <ReactPlayer url={movieHeader.url} playing={true}
          width='100%'
          height='100%'
          volume={1}
          muted={mute}
          className="video"
          onEnded={() => setEndVideo(true)}
        />
        :
        <img className="header--image" src={movieHeader.url_image} alt={movieHeader.name} />
      }

      <div className="overlay">


        <div className="container container-info-overlay">



          <InfoOverlay movieHeader={movieHeader} />

        </div>
      </div>
    </header>
  </>
  )
}
