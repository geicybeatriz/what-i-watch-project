import styled from "styled-components";
import EachMovie from "./EachMovie";

export default function Movies({movies, openList, listId, getMoviesByListId}){
    return (
        <Container openList={openList}>
            {movies.length === 0 
            ? 
                <Text>Você ainda não adicionou filmes à lista</Text> 
            : 
                movies.map((item, i) => <EachMovie key={i} data={item} listId={listId} getMoviesByListId={getMoviesByListId}/>)
            }
        </Container>
    )
}

const Container = styled.div`
    width:100%;

    display: ${props => props.openList ? "flex" : "none"};
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`;

const Text = styled.h2`
    width:100%;
    padding:15px;

    font-weight:400;
    font-style:normal;
    font-size:16px;
    line-height:19px;
    text-align:justify;
    color:#fff;
`;