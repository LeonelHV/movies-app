import React from 'react'

const LinkNav = ({ link }) => {
  const { name } = link
  return (<li><span>{name}</span></li>)
}

export default LinkNav
