import React from 'react';
import { Link } from 'react-router-dom';
import {  getAPIImage } from "@api";
import { getMovieTitle, getMovieLink } from '@general/helpers';
import './MovieListItem.sass';

function MovieListItem({movie, type}) {
    return (
        <Link to={getMovieLink(movie, type)}>
            <div className="movielist__item" style={{
                backgroundSize: "cover",
                backgroundImage: `url(${getAPIImage(movie.backdrop_path, "w780", "backdrop")})`
            }}>
                <div className="movielist__left">
                    <img src={getAPIImage(movie.poster_path, "w300", "poster")} width="300px" alt={getMovieTitle(movie)}/>
                </div>
                <div className="movielist__right">
                    <h2 className="movielist__moviename">{getMovieTitle(movie)}</h2>
                    <div>
                        <strong>Release Date: </strong> {(movie.release_date || movie.first_air_date || "No Info")}
                    </div>
                    <div>
                        <strong>Rating: </strong> {movie.vote_average}
                    </div>
                    <div className="movielist__overview">
                    <strong>Overview:</strong>  {movie.overview ? movie.overview : "No Overview found for this title."}
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default MovieListItem
