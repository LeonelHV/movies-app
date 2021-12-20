import React, { useState, useEffect } from 'react'
import PrimaryNavigation from './PrimaryNavigation'
import SecondaryNavigation from './SecondaryNavigation'
export default function Navigation() {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    const scroll = window.scrollY
    if (scroll >= 70) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
    return () => {

      window.removeEventListener('scroll', changeNav)
    }
  }, [])
  return (
    <div className={scrollNav ? 'container-navigation active' : 'container-navigation'}>
      <div className='navigation'>
        <PrimaryNavigation />
        <SecondaryNavigation />
      </div>
    </div>
  )
}
