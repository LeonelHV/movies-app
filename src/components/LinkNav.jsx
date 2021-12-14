import React from 'react';

const LinkNav = ({ link }) => {
  const { name } = link;
  return (<li><a href="#">{name}</a></li>);
}

export default LinkNav;