import React from 'react';
import { withRouter } from 'react-router';
import numeral from 'numeral'
import StarIcon from '@mui/icons-material/Star';

function MovieBodyOverview({movie}) {
    return (
        <div className="movie__overview">
            <div className="movie__overviewText">
                <div className="movie__text" style={{color: "white"}}>
                    <strong>Title:</strong> {movie.title}
                </div>
                <div className="movie__text" style={{color: "white"}}>
                    <strong>Genres:</strong> {movie.genres ? movie.genres.map((genre) => <div key={genre.id}>{genre.name}</div>) : ""}
                </div>
                <div className="movie__text" style={{color: "white"}}>
                    <strong>Tagline:</strong> {movie.tagline}
                </div>
                <div className="movie__text" style={{color: "white"}}>
                    <strong>Release Date:</strong> {movie.release_date}
                </div>
                <div className="movie__text" style={{color: "white"}}>
                    <strong>Runtime:</strong> {`${movie.runtime}`+ " min."}
                </div>
                <div className="movie__text" style={{color: "white"}}>
                    <strong>Budget:</strong> {numeral(movie.budget).format(`$ 0.00 a`)}
                </div>
                <div className="movie__text" style={{color: "white"}}>
                    <strong>Revenue:</strong> {numeral(movie.revenue).format(`$ 0.00 a`)}
                </div>
                <div className="movie__text" style={{color: "white"}}>
                    <strong>Overview:</strong> {movie.overview}
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

export default MovieBodyOverview
