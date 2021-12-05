import React from 'react';
import { getAPIImage } from '@api';
import MovieOverview from './MovieOverview/MovieOverview';
import './MovieBody.sass';

function MovieBody({movie}) {
    return (
        <div className="movie__body">
            <div className="movie__container">
                <div className="movie__poster">
                    <img 
                    className="poster__image"
                    src={getAPIImage(movie.poster_path, "original", "poster")}
                    alt={movie.title}
                    >
                    </img>
                </div>
                <MovieOverview movie={movie}/>
            </div>
        </div>
    )
}

export default MovieBody
