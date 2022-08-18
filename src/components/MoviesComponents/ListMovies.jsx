import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { UserContext } from "../../contexts/UserContext";
import moviesServices from "../../services/movieServices";
import SortMovieIcon from "../RandomComponents/SortMovie";
import IconToggle from "./IconToggle";
import Movies from "./Movie";

export default function ListMovie({data}){
    const [openList, setOpenList] = useState(false);
    const [movies, setMovies] = useState([]);

    const {token} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${token}`}};

    useEffect(() => {
        getMoviesByListId()
    }, []);

    function getMoviesByListId(){
        const promise = moviesServices.getMoviesByListId(data.id, config)
        promise.then(res => {
            setMovies(res.data);
        });
        promise.catch(err => {
            console.log(err);
            Swal.fire({text: `${err.response.data}`, icon: 'warning'});
        });
    }

    return (
        <Container>
            <Title data={data}>
                <Text>{data.name}</Text>
                <Div>
                    <SortMovieIcon listId={data.id}/>
                    <IconToggle setOpenList={setOpenList} openList={openList} setMovies={setMovies}/>
                </Div>
            </Title>
            <Movies listId={data.id} movies={movies} openList={openList} getMoviesByListId={getMoviesByListId}/>
        </Container>
    )
}

const Container = styled.main`
    width:80%;
        
    display: flex;
    flex-direction:column;
    align-items:center;
`;

const Div = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 20px;
`;

const Title = styled.div`
    width:100%;
    height:35px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    border:1px solid #fff;
    border-radius:5px;
    padding:0 15px;
`;

const Text = styled.h2`
    width:100%;
    
    font-weight:400;
    font-style:normal;
    font-size:16px;
    line-height:19px;
    text-align:justify;
    color:#fff;
`;

