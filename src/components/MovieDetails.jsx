import React, { useEffect, useState } from 'react'
import { getDetailsMovies } from '../services/getFetchModal'
import CloseIcon from '../static/images/close.svg'
import uniqid from 'uniqid';
export default function MovieDetails({ dataMovie }) {
    const [movieDetail, setMovieDetail] = useState({})
    useEffect(() => {
        const { type, id } = dataMovie;

        getDetailsMovies({ type, id }).then(setMovieDetail)

    }, [dataMovie])

    const { title,
        name,
        vote_average,
        release_date,
        first_air_date,
        runtime,
        episode_run_time,
        number_of_episodes,
        number_of_seasons,
        backdrop_path,
        production_companies,
        genres,
        overview } = movieDetail;
    return (

        <>
            <div className='modal__image'>
                {backdrop_path && <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title || name} />}
                <img src={CloseIcon} className='icon-close' alt='icon-close' />
            </div>

            <div className='modal__description'>
                <div>
                    <h1 className='modal__title'>{title || name}</h1>

                    <p className='modal__info'>
                        <span className='modal__rating'>Rating: {vote_average * 10}% </span>
                        Release date: {release_date || first_air_date} Runtime:
                        {runtime || episode_run_time}m
                    </p>
                    <p className='modal__episode'>
                        {number_of_episodes ? ' Episodes: ' + number_of_episodes : ''}
                        {number_of_seasons ? ' Seasons: ' + number_of_seasons : ''}
                    </p>


                    <div className='modal__genreCompanies'>
                        <div>
                            <p>Genres</p>
                            <ul>
                                {genres && genres.map(genre => {

                                    const keyGenre = uniqid()
                                    return <li key={keyGenre}>{genre.name}</li>

                                })}
                            </ul>
                        </div>
                        <div>
                            <p>Productions Companies</p>
                            <ul>
                                {production_companies && production_companies.map(pc => {

                                    const keyGenre = uniqid()
                                    return <li key={keyGenre}>{pc.name}</li>

                                })}
                            </ul>
                        </div>
                    </div>
                </div>


                <p className='modal__overview'>{overview}</p>

            </div>
        </>
    )
}
