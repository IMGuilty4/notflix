import React from 'react';
import API from '@api';
import { GENRES } from '@general/constants';
import Banner from '@components/Banner/Banner';
import Row from '@components/Row/Row';
import Footer from '@components/Footer/Footer';

const Main = () => {
    return (
            <div className="main">
                <Banner/>
                <Row title="Notflix Originals" type="tv" getTitles={API.tv.getNetflixOriginals()} isLargeRow/>
                <Row title="Top Rated" type="movie" getTitles={API.movie.getTopRated()}/> 
                {GENRES.MOVIE.slice(1,9).map((genre, i) => (
                    <Row 
                        title={genre.label} 
                        key={genre.id} 
                        type="movie" 
                        getTitles={API.movie.getMoviesByGenre(genre.id)} 
                        isLargeRow={i % 2 === 0}
                    /> 
                ))}
                <Footer /> 
            </div>   
    )
}


export default Main
