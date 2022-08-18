import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function getPopularMovies(){
    const promise = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
    return promise;
}

function getNowPlayingMovies(){
    const promise = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`);
    return promise;
}

function getTopRatedMovies(){
    const promise = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`);
    return promise;
}

function getInfoMovie(id){
    const promise = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
    return promise;
}

const tmdbServices = {
    getPopularMovies,
    getNowPlayingMovies,
    getTopRatedMovies,
    getInfoMovie
}

export default tmdbServices;