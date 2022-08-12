import Footer from "../Footer/Footer";
import Banner from "../MoviesComponents/Banner";
import ContainerMovies from "../MoviesComponents/ContainerMovies";
import Header from "./../Header/Header";
import {API_KEY} from "./../../config/config";
import { useEffect, useState } from "react";

export default function Homepage(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setMovies(data.results)
            })
    }, [])


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
