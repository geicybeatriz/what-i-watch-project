import ContainerMovies from "../components/MoviesComponents/ContainerMovies";
import Label from "../components/MoviesComponents/Label";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function NowPlayingPage(){
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const promiseTheaters = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`);
        promiseTheaters.then(res => {
                setMovies(res.data.results)
            })
    }, [API_KEY])
    return (
        <>
            <Header />
            <Container>
                <Label message="Nos cinemas"/>
                <ContainerMovies movies={movies}/>
            </Container>
            <Footer />
        </>
    )
}

const Container = styled.section`
    width:100vw;
    
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;

    margin-top:80px;

`;