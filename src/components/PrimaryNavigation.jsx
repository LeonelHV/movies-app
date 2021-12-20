import React, { useContext } from 'react'
import { links } from '../services/getHeaderInfo'
import logo from '../static/images/netflix_logo.png'
import { Link } from "react-router-dom";
import LinkNav from './LinkNav'
import MoviesContext from '../context/MoviesContext'
const PrimaryNavigation = () => {
  const { setKeyword, setMovies } = useContext(MoviesContext)
  const handleLogo = () => {
    setKeyword('')
    setMovies([])
  }
  return (
    <div className='primary-navigation'>
      <div className='container-logo'>
        <Link to="/" onClick={handleLogo}>
          <img className='logo' src={logo} alt='netflix-logo' />
        </Link>
      </div>
      <div>
        <ul className='links-page'>
          {links.map(link => (<LinkNav link={link} key={link.id} />))}
        </ul>
      </div>
    </div>

  )
}

export default PrimaryNavigation
