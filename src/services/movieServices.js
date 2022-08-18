import axios from "axios";

const URL = process.env.REACT_APP_API_DEPLOY;

function createList(data, config){
    const promise = axios.post(`${URL}/mylist`,data, config);
    return promise;
}

function getLists(config){
    const promise = axios.get(`${URL}/mylist`, config);
    return promise;
}

function addMovie(id, data, config){
    const promise = axios.post(`${URL}/movies/${id}`, data, config);
    return promise;
}

function getMoviesByListId(listId, config){
    const promise = axios.get(`${URL}/movies/${listId}`, config);
    return promise;
}

function deleteMovieById(listId, movieId, config){
    const promise = axios.delete(`${URL}/${listId}/${movieId}`, config);
    return promise;
}


const moviesServices = {
    createList,
    getLists,
    addMovie,
    getMoviesByListId,
    deleteMovieById
}

export default moviesServices;

