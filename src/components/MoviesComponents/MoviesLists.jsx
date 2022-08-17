import styled from "styled-components";
import ListMovie from "./ListMovies";

export default function MoviesLists({lists}){

    return(
        <Container>
            {lists.length === 0 ? 
                <Text>Você ainda não possui nenhuma lista!</Text> 
                : 
                lists.map((item, i) => <ListMovie key={i} data={item}/>)
            }
        </Container>
    )
}

const Container = styled.main`
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:10px;
`;

const Text = styled.h2`
    width:100%;

    display:flex;

    padding:0 15px;

    font-weight:400;
    font-style:normal;
    font-size:16px;
    line-height:19px;
    text-align:justify;
    color:#fff;
`;
