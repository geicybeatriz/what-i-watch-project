import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Label from "../components/MoviesComponents/Label";
import ContainerMovies from "../components/MoviesComponents/ContainerMovies";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SeriesPage(){
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const promiseTheaters = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`);
        promiseTheaters.then(res => {
                setMovies(res.data.results)
            })
    }, [API_KEY])

    return (
        <>
            <Header />
            <Container>
                <Label message="Os mais bem avaliados"/>
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