import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useQuery } from "@general/hooks"
import API from '@api';
import Banner from '@components/Banner/Banner';
import MovieListItem from '@components/MovieListItem/MovieListItem';
import Pagination from '@mui/material/Pagination';
import Footer from '@components/Footer/Footer';
import {NETFLIX_TV_ID} from "@general/constants";
import './MovieList.sass'


function MovieList() {
    const match = useRouteMatch();
    const queryParams = useQuery();
    const history = useHistory();
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1)
    const [genreMovies, setGenreMovies] = useState([]);
    const [mediaType, setMediaType] = useState("movie");


    const getMoviesGenre = async(page = 1) => {
        const id = match.params.genre.split("-")[0]
        let request = await API.movie.getMoviesByGenre(id, page)
        let media_type = "movie" 
        setTotal(request.total_pages)
        setPage(request.page)
        setGenreMovies(request.results);
        setMediaType(media_type);
    }
    
    const getOriginals = async(page = 1) => {
        let request = await API.tv.getNetflixOriginals(page)
        let media_type = "tv"
        setPage(request.page)
        setTotal(request.total_pages)
        setGenreMovies(request.results);
        setMediaType(media_type)
    }

    useEffect(() => {
        if(parseInt(match.params.genre) === NETFLIX_TV_ID) {
            getOriginals(queryParams.get("page")) 
        } else {
            getMoviesGenre(queryParams.get("page"));
        }
    }, [queryParams, match.params.genre])


    return (
        <div className="movielist">
            <Banner/>
            {genreMovies.map((movie) => (
                <MovieListItem key={movie.id} movie={movie} type={mediaType}/>  
            ))}
            <Pagination count={total} page={page} onChange={(e, page) => history.push(`/genre/${match.params.genre}?page=${page}`)}/>
            <Footer />
        </div>
    )
}

export default MovieList
