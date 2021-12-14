import React, { useRef, useState, useContext, useEffect } from 'react';
import SearchIcon from "../static/images/search-icon.svg";
import { ReactComponent as BellIcon } from "../static/images/bell-logo.svg";
import { ReactComponent as ArrowIcon } from "../static/images/drop-down-arrow.svg";
import useOutsideAlerter from '../hooks/useOutsideAlerter';
import MoviesContext from "../context/MoviesContext";
import { getMovies } from "../services/getFetchAPI"
import DropdownContent from './DropdownContent';

const SecondaryNavigation = () => {

  const [activeIcon, setActiveIcon] = useState(false);
  const [term, setTerm] = useState("");
  const wrapperRef = useRef();

  useOutsideAlerter({ wrapperRef, setActiveIcon });


  const onClickIcon = () => {
    if (activeIcon === false) {
      setActiveIcon(true)
    }
  }

  const { setMovies } = useContext(MoviesContext);

  const handleChange = (e) => {
    const keyword = e.target.value.replace(/ /g, "-").trim();
    setTerm(keyword)

  }
  const handleSubmit = (e) => {

    e.preventDefault();

    if (term !== "") {
      getMovies({ searchTerm: term }).then(movie => setMovies(movie));
    }

  }
  useEffect(() => {


  }, []);

  const cssSearchicon = activeIcon ? "input toggle" : "input";



  return (
    <div className="secondary-navigation">
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input className={cssSearchicon} type="text" placeholder="Titles, people, genres" ref={wrapperRef} onChange={handleChange} />
          <img src={SearchIcon} alt="search-icon" onClick={onClickIcon} className="icon-search" />

        </div>

      </form>


      <BellIcon alt="bell-icon" className="icon" />

      <div className="container-settings" >
        <span alt="user1" className="user user-1" />
        <ArrowIcon alt="arrow" className="icon" />
        <DropdownContent />
      </div>
    </div>
  );
}

export default SecondaryNavigation;