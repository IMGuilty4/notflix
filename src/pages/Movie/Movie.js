import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch } from 'react-router-dom';
import API from '@api';
import Alert from '@mui/material/Alert';
import MovieBanner from '@components/MovieBanner/MovieBanner';
import MovieBody from '@components/MovieBody/MovieBody';
import YouTube from 'react-youtube';
import MovieSimilar from '@components/MovieBody/MovieSimilar/MovieSimilar';
import MovieReview from '@components/MovieBody/MovieReview/MovieReview';
import Footer from '@components/Footer/Footer';
import './Movie.sass';

const opts = {
    height: "600",
    width: "80%",
    playerVars: {
        autoplay: 0
    }
}

function Movie() {
    const match = useRouteMatch()
    const [movie,setMovie] = useState({});
    const [movieSimilar, setMovieSimilar] = useState([]);
    const [movieReviews, setMovieReviews] = useState([]);
    const [movieTrailerUrl,setMovieTrailerUrl] = useState("");

    const fetchData = useCallback(async () => {
        const id = match.params.id.split("-")[0];
        const request = await API.movie.getMovie(id,match.params.media_type);
        const requestSimilar = await API.adds.getSimilar(id, match.params.media_type);
        const requestReviews = await API.adds.getReviews(id, match.params.media_type);
        const requestTrailer = await API.adds.getTrailer(id, match.params.media_type);
        setMovie(request);
        setMovieSimilar(requestSimilar.results);
        setMovieReviews(requestReviews.results);
        const trailer = requestTrailer.find((item) => item.type === "Trailer");
        setMovieTrailerUrl(trailer.key);
    }, [match.params.id, match.params.media_type]) 

    useEffect(() => {
        fetchData()  
    }, [match.params.id, fetchData])

    return (
        <div className="movie">
            <MovieBanner movie={movie}></MovieBanner>
            <MovieBody movie={movie} movieSimilar={movieSimilar}></MovieBody>
            {movieTrailerUrl && <YouTube style={{margin: "10px auto"}} videoId={movieTrailerUrl} opts={opts}/>}
            <h3>Reviews:</h3>
            {movieReviews.length ? 
            <div className="movie__reviews">
                {movieReviews.map((review) => (
                    <MovieReview key={review.id} review={review}/>  
                ))}
            </div>
            : <Alert severity="error" style={{display: "flex", justifyContent: "center"}}>No Reviews Found :(</Alert>}
            <h3>Similar Titles:</h3>
            {movieSimilar.length ? 
            <div className="movie__similar">
                {movieSimilar.slice(0,4).map((movie) => (
                    <MovieSimilar key={movie.id} movie={movie} type={match.params.media_type}/>  
                ))}
            </div>
            : <Alert severity="error" style={{display: "flex", justifyContent: "center"}}>No Similar Titles Found :(</Alert>}
            <Footer/>
        </div>
    )
}

export default Movie
