import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ContainerMovies({movies}){
    const navigate = useNavigate();

    if(movies.length > 0){
        return (
            <Container >
                {movies.map(movie => {
                    return (
                        <CardMovie id={movie.id} key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="foto do filme"/>
                            <Title>{movie.title || movie.name}</Title>
                        </CardMovie>
                )})}
            </Container>
        );
    } else {
        return (
            <h1>Ainda não há filmes aqui!</h1>
        );
    }
}

const Container = styled.main`
    width:100%;

    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items:center;

    padding:30px;
    column-gap:20px;
    row-gap:20px;

    
`;

const CardMovie = styled.article`
    width:150px;
    height:300px;

    display:flex;
    flex-direction: column;
    align-items:center;

    gap:5px;
    
    :hover{
        transform:scale(1.1);
    }
    cursor: pointer;
`;

const Image = styled.img`
    width:100%;
    height:225px;
    object-fit:cover;
    border-radius:5px;
    transform:all 0.3s;
`;

const Title = styled.h1`
    width:100%;

    padding:0 5px;

    font-size:15px;
    font-weight:700;
    font-style:bold;
    line-height: 17px;
    text-align:center;
    color:#fff;
`;