import React, {useState} from 'react'
import Button from '@components/Button/Button';
import { Link } from 'react-router-dom';
import { getAPIImage } from '@api';
import { getMovieLink } from '@general/helpers';

function RowItem({ movie, isLargeRow, handleClick, type }) {

    const [movieDropdown, setMovieDropdown] = useState(false);

    function toggleDropdown() {
        setMovieDropdown(!movieDropdown)
    }
    const imagePath = isLargeRow ? movie.poster_path : movie?.backdrop_path || movie?.poster_path;

    return (
        <div 
            key={movie.id}
            className={`row__posterContainer ${isLargeRow && "row__posterLarge"}`}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
        >
            <div className={`movie__rating ${movie.vote_average < 7.5 && "rating__grey"} ${movie.vote_average < 5 && "rating__red"}`}>
                {movie.vote_average}
            </div> 
            <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                src={getAPIImage(imagePath, "w300")}
                alt={movie.title}
            />
            <div 
                className={`movie__dropdown 
                ${movieDropdown ?  "dropdown--active" : "movie__dropdown"} 
                ${movieDropdown && isLargeRow ?  "dropdown--activeLarge" : "movie__dropdown"}`}
            >
                <Link className="button" to={getMovieLink(movie, movie.media_type || type)}>Go To</Link>
                <Button
                    movie={movie} 
                    buttonTitle="Watch Trailer"
                    handleClick={handleClick}
                />
            </div>
        </div>    
    )
}

export default RowItem
