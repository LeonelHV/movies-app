import React from 'react'

export default function MovieItem({ movie }) {
    const urlImage = movie.backdrop_path
    const srcImage = `https://image.tmdb.org/t/p/w500${urlImage}`
    return (
        <div className='movie'>
            <img src={srcImage} alt={movie.title} data-id={movie.id} data-type={movie.media_type} className='movie-item' />
        </div>
    )
}
