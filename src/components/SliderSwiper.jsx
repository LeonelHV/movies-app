import React, { useEffect, useState, useContext } from 'react'
import MoviesContext from '../context/MoviesContext'

// Import Swiper styles

import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import MovieDetails from './MovieDetails'
import Modal from './Modal'
import uniqid from 'uniqid';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export default function SliderSwiper({ movies, title }) {
  
  


  const [toggleModal, setToggleModal] = useState(false);
  const { setPlay } = useContext(MoviesContext)
  const [dataMovie, setDataMovie] = useState({})

  const handleClick = (e) => {
    if (e.target.classList.contains('movieShowcase__container--movie-image')) {
      const idMovie = e.target.getAttribute("data-id")
      const typeMovie = e.target.getAttribute("data-type")
      setDataMovie({ id: idMovie, type: typeMovie })
      document.body.classList.add('no-scroll')
      setPlay(false)
      setToggleModal(true)
    }
  }
  useEffect(() => {
    document.body.classList.toggle('no-scroll', toggleModal);
  }, [toggleModal])
  return (
    <>
      <div className='swiper-container' onClick={handleClick}>
        <h1 className='movieShowcase__heading'>{title}</h1>

        <Swiper
          className='movieShowcase__container'
          navigation
          grabCursor={false}
          draggable={false}
          loop
          breakpoints= {{
            100: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            }}}
          preventClicksPropagation
          preventClicks
          scrollbar={{ draggable: false, hide: true }}
          slideToClickedSlide={false}
          pagination={{ clickable: true }}
        >
          {movies &&
            movies.map((movie) => {

              const { backdrop_path, title, id, media_type } = movie
              const url = 'https://image.tmdb.org/t/p/w500' + backdrop_path
              const uniId = uniqid()
              return backdrop_path &&
                (

                  <SwiperSlide

                    key={uniId}
                    className={
                      'movieShowcase__container--movie' +
                      (false ? '__netflix' : '')
                    }
                  >
                    <img
                      src={url}
                      alt={title}
                      className='movieShowcase__container--movie-image'
                      data-id={id}
                      data-type={media_type}
                    />
                  </SwiperSlide>
                )
            })}
        </Swiper>
      </div>
      {toggleModal && <Modal setToggleModal={setToggleModal} setPlay={setPlay}><MovieDetails dataMovie={dataMovie} /></Modal>}
    </>
  )
}
