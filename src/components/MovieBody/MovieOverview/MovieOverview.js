import React from 'react';
import numeral from 'numeral'
import StarIcon from '@mui/icons-material/Star';
import { getMovieTitle } from '@general/helpers';

function MovieOverview({movie}) {
    const genresList = (genre, i) => <span key={genre.id}>{genre.name}{i !== (movie.genres.length-1) ? "," : ""}&nbsp;</span>
    return (
        <div className="movie__overview">
            <div className="movie__overviewText">
                <div className="movie__text">
                    <strong>Title:</strong> {getMovieTitle(movie)}
                </div>
                <div className="movie__text" style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    <strong>Genres:&nbsp;</strong>
                     {movie.genres ? movie.genres.map(genresList) : "No Info"}
                </div>
                <div className="movie__text">
                    <strong>Tagline:</strong> {movie.tagline || "I wish i had one"}
                </div>
                <div className="movie__text">
                    <strong>Release Date:</strong> {movie.release_date || movie.first_air_date}
                </div>
                <div className="movie__text">
                    <strong>Runtime:</strong> {movie.runtime || movie.episode_run_time || "No info"} min. 
                </div>
                <div className="movie__text">
                    <strong>Budget:</strong> {numeral(movie.budget).format(`$ 0.00 a`)}
                </div>
                <div className="movie__text">
                    <strong>Revenue:</strong> {numeral(movie.revenue).format(`$ 0.00 a`)}
                </div>
                <div className="movie__text">
                    <strong>Overview:</strong> {movie.overview || "No Overview Found."}
                </div>
            </div>    
            <div className="movie__rating">
                <div className="movie__rate">
                    <StarIcon />
                    <p>{movie.vote_average}</p>
                </div>
                <div className="movie_votes">
                    Votes: {movie.vote_count}
                </div>
            </div>
        </div>
    )
}

export default MovieOverview
