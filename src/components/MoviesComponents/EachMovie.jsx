import axios from "axios";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import Swal from "sweetalert2";
import { UserContext } from "../../contexts/UserContext";

export default function EachMovie({data, listId, getMoviesByListId}){
    const {token} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${token}`}};

    function deleteMovie(id){
        const promise = axios.delete(`${process.env.REACT_APP_API_BASE_URL}/${listId}/${id}`, config);
        promise.then(res => {
            getMoviesByListId();
        });
        promise.catch(err => {
            console.log(err);
            Swal.fire({text: `${err.response.data}`, icon: 'warning'});
        })
    }

    return (
        <Container id={data.id}>
            <Div>
                <Image src={`https://image.tmdb.org/t/p/w500${data.image}`} />
                <Name>{data.title}</Name>
            </Div>
            <FaTrashAlt onClick={() => deleteMovie(data.id)} color="#fff" size={20}/>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:70px;

    display:flex;
    justify-content:space-between;
    align-items:center;
    
    padding:15px;
    border:1px solid #ffffff5c;
    border-top:none;
    border-radius:5px;
`;

const Div = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
    gap:20px;
`;

const Image = styled.img`
    width:50px;
    height:60px;
    object-fit:contain;
    border-radius:5px;
`;

const Name = styled.h1`
    width:100%;
    padding:0 15px;

    font-weight:400;
    font-style:normal;
    font-size:16px;
    line-height:19px;
    text-align:justify;
    color:#fff;
`;

