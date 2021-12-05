import React, {useState} from 'react'
import Button from '../Button/Button';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import '../Button/Button.sass'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const img_base_url = "https://image.tmdb.org/t/p/w500";


function RowItem({movie, isLargeRow, handleClick, type}, props) {

    const [movieDropdown,setMovieDropdown] = useState(false);

    function toggleDropdown() {
        setMovieDropdown(!movieDropdown)
    }

    return (
        <div 
            key={movie.id}
            className={`row__posterContainer ${isLargeRow && "row__posterLarge"}`}
            // onClick={() => handleClick(movie)}
            // onClick={() => console.log(movie.title)}
            onClick={toggleDropdown}
        >
            <div className={`movie__rating ${movie.vote_average < 7.5 && "rating__grey"} ${movie.vote_average < 5 && "rating__red"}`}>{movie.vote_average}</div>
            {/* <LazyLoadImage
                width="166.66"
                alt={movie.title}
                src={`${img_base_url}${isLargeRow ? movie.poster_path : movie?.backdrop_path || movie?.poster_path}`} // use normal <img> attributes as props
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                /> */}
            
            <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                src={`${img_base_url}${isLargeRow ? movie.poster_path : movie?.backdrop_path || movie?.poster_path}`}
                alt={movie.title}
            />
            <div 
            className={`movie__dropdown ${movieDropdown ?  "dropdown--active" : "movie__dropdown"} ${movieDropdown && isLargeRow ?  "dropdown--activeLarge" : "movie__dropdown"}`}>
                <Link style={{textDecoration: "none"}} className="button" to={`${movie.media_type || type}/${movie.id}`}>Go To</Link>
                <Button
                movie={movie} 
                buttonTitle="Watch Trailer"
                handleClick={handleClick}
                ></Button>
            </div>
        </div>    
    )
}

export default RowItem
