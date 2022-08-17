import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AddMovie from "../components/MoviesComponents/AddMovie";

export default function MoviePage(){
    const {id} = useParams();
    const [movieData, setMovieData] = useState({});
    const [genres, setGenres] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const promise = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
        promise.then(res => {
            console.log(res.data)
            setMovieData(res.data);
            setGenres([...res.data.genres])
        });
    }, [API_KEY, id]);

    return (
        <>
            <Header />
            <Container>
                <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title}/>
                <BoxRight>
                    <Top>
                        <Title>{movieData.title}</Title>
                        <Text italic={true}>{movieData.tagline}</Text>
                    </Top>
                    <Description>
                        <Text italic={false}>Gêneros: {genres.length > 0 ? genres.map(item =>{
                            if(item !== genres[genres.length-1]){
                                return item.name + ", ";
                            } else {
                                return item.name + "."
                            }
                            }) : <></>}
                        </Text>
                        <Text italic={false}>Sinopse: {movieData.overview}.</Text>
                    </Description>  
                    <AddMovie title={movieData.title} id={id} image={movieData.poster_path}/>                 
                </BoxRight>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.main`
    width:100%;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;

    margin-top: 80px;
    padding:50px 150px;

    @media only screen and (max-width: 600px){
        padding:30px;
        flex-direction:column;
        gap:15px;
    }

    @media only screen and (max-width: 800px){
        padding:30px;
    }
`;

const Image = styled.img`
    width:250px;
    height:350px;
    object-fit:contain;
    border-radius:5px;

    @media only screen and (max-width: 600px){
        width:80%;
    }
`;

const BoxRight = styled.section`
    width:100%;
    height:350px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:15px;

    padding:0 20px;
`;

const Top = styled.article`
    width:100%;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:15px;

`;

const Description = styled.section`
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    
    gap:15px;
`;

const Title = styled.h1`
    width:100%;

    font-weight:700;
    font-style:normal;
    font-size:35px;
    color:#fff;

    @media only screen and (max-width: 600px){
        font-size:28px;
    }
`;

const Text = styled.h2`
    width:100%;

    font-weight:400;
    font-style:${props => props.italic ? "italic" : "normal"};
    font-size:16px;
    line-height:19px;
    text-align:justify;
    color:#fff;

    @media only screen and (max-width: 600px){
        font-size:14px;
        line-height:16px;
    }
`;

