import React from 'react'

export default function MovieItem({ movie }) {
    const urlImage = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
    return (
        <div className='movie'>
            <img src={urlImage} />
        </div>
    )
}
