import React from 'react';
import { getAPIImage } from '@api';
import { Link } from 'react-router-dom';
import './MovieBanner.sass';
import { getMovieTitle } from '@general/helpers';

function MovieBanner({ movie }) {
    return (
        <header className="movie__banner"
             style={{
             backgroundSize: "cover",
             backgroundImage: `url(${getAPIImage(movie.backdrop_path, "original", "backdrop")})`
         }}
        >
            <div className="movie__bannercontent">
                    <h1 className="movie__bannertitle">
                        {getMovieTitle(movie)}
                    </h1>
                    <h2 className="movie__bannerdesc">
                        {movie.tagline}
                    </h2>
                    <Link className="button" to={"/"}>Go To Home Page</Link>
            </div>

            <div className="movie--bottomFade"></div>
        </header>
    )
}

export default MovieBanner
