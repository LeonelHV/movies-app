import React from 'react';
import { links } from '../services/getHeaderInfo';
import logo from "../static/images/netflix_logo.png";

import LinkNav from './LinkNav';

const PrimaryNavigation = () => {
  return (
    <div className="primary-navigation">
      <div className="container-logo">
        <img className="logo" src={logo} alt="netflix-logo" />
      </div>
      <div>
        <ul className="links-page">
          {links.map(link => (<LinkNav link={link} key={link.id} />))}
        </ul>
      </div>
    </div>

  );
}

export default PrimaryNavigation;