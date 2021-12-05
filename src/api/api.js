import axios from "axios";
import { toast } from "react-toastify";
import poster from '@assets/images/poster_placeholder.jpg';
import backdrop from '@assets/images/backdrop_placeholder.png';
import avatar from '@assets/images/avatar_placeholder.png';

export const API_KEY = "d471fcf8cfaf1bb707c3805ca10397a5";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p";

export const movieAPI = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {api_key: API_KEY}
});

export const getAPIImage = (path, size = "w300", type) => {
    const noImageMap = {
        poster: poster,
        backdrop: backdrop,
        avatar: avatar
    }
    if(!path){
        return noImageMap[type]
    }
    return `${IMG_BASE_URL}/${size}/${path}`
};

export const API = {
    movie: {
        getMoviesByGenre: async (genre, page = 1) => {
            let response = await movieAPI.get(`/discover/movie?with_genres=${genre}&page=${page}`)
            return response.data
        },
        getTrending: async () => {
            let response = await movieAPI.get(`/trending/all/week`)
            return response.data
        },
        getTopRated: async() => {
            let response = await movieAPI.get(`/movie/top_rated`)
            return response.data
        },
        getMovie: async(id,type) => {
            let response = await movieAPI.get(`/${type}/${id}`)
            return response.data
        },       
    },
    tv: {
        getNetflixOriginals: async(page) => {
            let response = await movieAPI.get(`/discover/tv?with_networks=213&page=${page}`)
            return response.data
        },
    },
    adds: {
        getTrailer: async(id,type) => {
            try {
                let response = await movieAPI.get(`/${type}/${id}/videos`)
                return response.data.results
            }
            catch(error) {
                toast.error("Error on request trailer")
                return []
            }
        },
        getSimilar: async(id,type) => {
            let response = await movieAPI.get(`/${type}/${id}/recommendations`)
            return response.data
        },
        getReviews: async(id,type) => {
            let response = await movieAPI.get(`/${type}/${id}/reviews`)
            return response.data
        }
    }
}


export default API