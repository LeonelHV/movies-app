import React, { useContext, useEffect } from 'react'

import MoviesContext from '../context/MoviesContext'
import MovieItem from './MovieItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getMovieSearch } from '../services/getFetchAPI';
import uniqid from 'uniqid';

export default function MainSearch() {

    const { movies, setPage, maxOffSet, keyword, page, setMaxOffSet, setMovies } = useContext(MoviesContext)
    const isMovie = movies.length > 0
    const hasMore = page <= maxOffSet ? true : false;

    useEffect(() => {
        if (keyword === '') return
        getMovieSearch({ keyword, page, setMaxOffSet }).then(movie => {
            setMovies(prev => prev.concat(movie));

        });
        console.log(maxOffSet)

    }, [page, keyword]);
    return (
        <InfiniteScroll
            dataLength={movies.length}
            next={() => setPage(prev => prev + 1)}
            hasMore={hasMore}
            loader={"Cargando ..."}
        >
            <div className='container container-movies-search'>
                {
                    isMovie && movies.map(movie => {
                        if (movie.backdrop_path) {
                            const uniId = uniqid()
                            return <MovieItem movie={movie} key={uniId} />
                        }
                    }
                    )
                }
            </div>
        </InfiniteScroll>
    )
}
