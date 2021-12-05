import React, { useState, useEffect } from 'react';
import API, { getAPIImage } from '@api';
import { Link } from 'react-router-dom';
import './Banner.sass';
import { getMovieTitle, getMovieLink } from '@general/helpers';

const BACKDROP_CHANGE_INTERVAL = 10000; // in milliseconds

function Banner() {
    const [movie,setMovie] = useState({});

    async function fetchData() {
        const request = await API.movie.getTrending();
        setMovie(request.results[Math.floor(Math.random() * request.results.length)]);
        return request;  
   }

    useEffect(() => {
        setInterval(() => {
            fetchData();
        }, BACKDROP_CHANGE_INTERVAL)
       fetchData();
    }, [])

    const trunc = (string, offset) => string?.length > offset ? string.substr(0, offset-1) + "..." : string;
  
    return (
        <header className="banner"
         style={{
            backgroundSize: "cover",
            backgroundImage: `url(${getAPIImage(movie.backdrop_path, "original", "backdrop")})`,
         }}
        >
            <div className="banner__content">
                    <h1 className="banner__title">
                        { getMovieTitle(movie) }
                    </h1>
                        <Link className="button" to={getMovieLink(movie, movie.media_type)}>Go To</Link>
                    <h2 className="banner__desc">
                        {trunc(movie?.overview, 150)}
                    </h2>
            </div>
            <div className="banner--bottomFade"></div>
        </header>
    )
}

export default Banner
