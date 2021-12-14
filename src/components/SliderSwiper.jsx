import React from 'react'
// Import Swiper styles



import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { useViewport } from '../hooks/useViewport'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
export default function SliderSwiper({ movies, title }) {

  const [windowDimensions] = useViewport();
  const { width } = windowDimensions

  return (
    <div className="swiper-container">
      <h1 className='movieShowcase__heading'>{title}</h1>

      <Swiper
        className='movieShowcase__container'
        navigation={true}
        grabCursor={false}
        draggable={false}
        loop={true}
        loopAdditionalSlides={
          width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
        }
        breakpoints={{
          1378: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        preventClicksPropagation={true}
        preventClicks={true}
        scrollbar={{ draggable: false, hide: true }}
        slideToClickedSlide={false}
        pagination={{ clickable: true }}
      >
        {movies &&
          movies.map((movie) => {

            const { backdrop_path, original_title } = movie;
            const url = `https://image.tmdb.org/t/p/w500` + backdrop_path;
            return backdrop_path &&
              (

                <SwiperSlide

                  key={original_title ? original_title : backdrop_path}
                  className={
                    'movieShowcase__container--movie' +
                    (false ? '__netflix' : '')
                  }
                >
                  <img
                    src={url}
                    alt={original_title}
                    className='movieShowcase__container--movie-image'
                  />
                </SwiperSlide>
              )


          })}
      </Swiper>
    </div>
  )
}
