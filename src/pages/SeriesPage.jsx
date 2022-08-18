import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Label from "../components/MoviesComponents/Label";
import ContainerMovies from "../components/MoviesComponents/ContainerMovies";
import { useState, useEffect } from "react";
import tmdbServices from "../services/tmdbServices";

export default function SeriesPage(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = tmdbServices.getTopRatedMovies();
        promise.then(res => {
                setMovies(res.data.results)
            })
    }, [])

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

    margin:80px 0;

`;