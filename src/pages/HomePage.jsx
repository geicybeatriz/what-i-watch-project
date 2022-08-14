import Footer from "../components/Footer/Footer";
import Banner from "../components/MoviesComponents/Banner";
import ContainerMovies from "../components/MoviesComponents/ContainerMovies";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage(){
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const promise = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
        promise.then(res => {
                setMovies(res.data.results)
            })
    }, [API_KEY])

    return (
        <>
            <Header />
            <Banner/>
            <ContainerMovies movies={movies}/>
            <Footer />
        </>
    )
}

//tentar colocar uma condição no useEffect pra trazer filmes e/ou séries
//para não ter que fazer 3 páginas diferentes. e usar só uma home
