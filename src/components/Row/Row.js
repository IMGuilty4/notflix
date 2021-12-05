import React, {useState, useEffect} from 'react';
import API from '@api';
import { CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import RowItem from './RowItem/RowItem';
import SliderNextArrow from './Slider/SliderNextArrow';
import SliderPrevArrow from './Slider/SliderPrevArrow';
import './Row.sass';
import '../Button/Button.sass'
import "slick-carousel/slick/slick.css"; 

const opts = {
    height: "400",
    width: "90%",
    playerVars: {
        autoplay: 1
    }
}

let slider_settings = {
    dots: false,
    infinite: true,
    swipeToSlide: false,
    draggable: true,
    variableWidth: true,
    speed: 500,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: Math.floor(Math.random() * (10000 - 4000) + 4000),
    slidesToScroll: 4,
    nextArrow: <SliderNextArrow/>,
    prevArrow: <SliderPrevArrow/>,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToScroll: 3,
                draggable: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToScroll: 2,
                swipeToSlide: false,
                draggable: true,
                autoplay: false,
            }
        }
    ]
}

function Row({title, getTitles, type, isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [timer, setTimer] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        let tm =  Math.floor(Math.random() * (500 - 100) + 100)
        setTimeout(() => {
            setTimer(true)
        }, tm)
    }, [])

    useEffect(() => {
        async function fetchData() {
            const request = await getTitles;
            setMovies(request.results);
            setLoading(false);
            return request
        }
        fetchData()  
    }, [getTitles])

    const handleClick = async (movie) => {
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            const requestTrailer = await API.adds.getTrailer(movie.id, type);
            const trailer = requestTrailer.find((item) => item.type === "Trailer")
            if(trailer){
                setTrailerUrl(trailer.key)
            } else {
                toast.error("No Trailer Found :(")
            }
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
                <div className="row__posters">
                    {loading && <CircularProgress color="error" />}
                    <Slider autoplay={timer} {...slider_settings}>
                    {movies.map((movie) => (
                        <RowItem key={movie.id} type={type} movie={movie} isLargeRow={isLargeRow} handleClick={handleClick}/>  
                    ))}
                    </Slider>
                </div>
                { trailerUrl && <div className="trailer__cover">
                    <button className="trailer__button" onClick={handleClick}>
                        <CloseIcon />
                    </button>           
                    <YouTube videoId={trailerUrl} opts={opts}/>
                </div>}
        </div>
    )
}

export default Row
