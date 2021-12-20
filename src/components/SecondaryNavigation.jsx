import React, { useRef, useState, useEffect, useContext } from 'react'
import SearchIcon from '../static/images/search-icon.svg'
import { ReactComponent as BellIcon } from '../static/images/bell-logo.svg'
import { ReactComponent as ArrowIcon } from '../static/images/drop-down-arrow.svg'
import useOutsideAlerter from '../hooks/useOutsideAlerter'
import DropdownContent from './DropdownContent'
import MoviesContext from '../context/MoviesContext'

const SecondaryNavigation = () => {
  const [activeIcon, setActiveIcon] = useState(false)

  const wrapperRef = useRef()
  const cssSearchicon = activeIcon ? 'input toggle' : 'input'
  useOutsideAlerter({ wrapperRef, setActiveIcon })

  const { setKeyword } = useContext(MoviesContext)
  const onClickIcon = () => {
    if (activeIcon === false) {
      setActiveIcon(true)
    }
  }

  const handleChange = (e) => {
    const term = e.target.value.replace(/ /g, '-').trim()
    setKeyword(term)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='secondary-navigation'>
      <form onSubmit={handleSubmit}>
        <div className='search'>
          <input className={cssSearchicon} type='text' placeholder='Titles, people, genres' ref={wrapperRef} onChange={handleChange} />
          <img src={SearchIcon} alt='search-icon' onClick={onClickIcon} className='icon-search' />
        </div>

      </form>

      <BellIcon alt='bell-icon' className='icon' />

      <div className='container-settings'>
        <span alt='user1' className='user user-1' />
        <ArrowIcon alt='arrow' className='icon' />
        <DropdownContent />
      </div>
    </div>
  )
}

export default SecondaryNavigation
