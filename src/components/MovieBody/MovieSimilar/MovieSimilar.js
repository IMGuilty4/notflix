import React from 'react'
import { getAPIImage } from '@api';
import { getMovieTitle, getMovieLink } from '@general/helpers';
import { Link } from 'react-router-dom';

function MovieSimilar({movie, type}) {
    return (
        <Link to={getMovieLink(movie, type)}>
            <div style={{margin: "0 10px"}}>
                <img src={getAPIImage(movie.poster_path, "w300", "poster")} alt={getMovieTitle(movie)}/>
            </div>
        </Link>
    )
}

export default MovieSimilar
