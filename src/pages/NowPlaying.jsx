import ContainerMovies from "../components/MoviesComponents/ContainerMovies";
import Label from "../components/MoviesComponents/Label";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import styled from "styled-components";
import tmdbServices from "../services/tmdbServices";

export default function NowPlayingPage(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promiseTheaters = tmdbServices.getNowPlayingMovies();
        promiseTheaters.then(res => {
                setMovies(res.data.results)
        })
    }, []);

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