import React, { useContext, useEffect, useState } from 'react'

import MovieDetails from './MovieDetails'
import MovieItem from './MovieItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getMovieSearch } from '../services/getFetchAPI';
import uniqid from 'uniqid';
import Spinner from './Spinner/index';
import MoviesContext from '../context/MoviesContext'
import Modal from './Modal'
export default function MainSearch() {

    const [dataMovie, setDataMovie] = useState({})
    const [message, setMessage] = useState(false)
    const [toggleModal, setToggleModal] = useState(false);
    const { movies, setPage, maxOffSet, keyword, page, setMaxOffSet, setMovies } = useContext(MoviesContext)
    const isMovie = movies.length > 0
    const hasMore = page < maxOffSet ? true : false;

    const handleClick = (e) => {
        if (e.target.classList.contains('movie-item')) {
            const idMovie = e.target.getAttribute("data-id")
            const typeMovie = e.target.getAttribute("data-type")
            setDataMovie({ id: idMovie, type: typeMovie })
            document.body.classList.add('no-scroll')
            setToggleModal(true)
        }
    }



    useEffect(() => {
        if (keyword === '') return
        getMovieSearch({ keyword, page, setMaxOffSet }).then(movie => {
            if (movie.length === 0) {
                return setPage(prev => prev + 1);
            }

            setMovies(prev => [...prev, ...movie]);
            if (movies.length === 0) {
                return setMessage(true)
            }
            setMessage(false)
        });



    }, [page, keyword, setMaxOffSet, setMovies, setPage])
    return (<>
        <InfiniteScroll
            dataLength={movies.length}
            next={() => setPage(prev => prev + 1)}
            hasMore={hasMore}
            loader={<Spinner />}
        >
            <div className='container container-movies-search' onClick={handleClick}>
                {
                    isMovie && movies.map(movie => {

                        const uniId = uniqid()
                        return <MovieItem movie={movie} key={uniId} />

                    }
                    )


                }
            </div>

        </InfiniteScroll>
        {message && <p className='message'>No search results</p>}
        {toggleModal && <Modal setToggleModal={setToggleModal}><MovieDetails dataMovie={dataMovie} /></Modal>}
    </>
    )
}
