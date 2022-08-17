import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import Swal from "sweetalert2";

export default function MyLists({lists, title, id, image, setOpen}){
    const movieData = {title:title, image:image, tmdbId:id};
    const {token} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${token}` }};

    function addMovie(id){
        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/movies/${id}`, movieData, config);
        promise.then(res => {
            setOpen(false);
        });

        promise.catch(err => {
            console.log(err);
            Swal.fire({text: `${err.response.data}`, icon: 'warning'});
        });
    }

    return (
        <Container>
            {lists?.length > 0 ? lists.map((item, i) => <List key={i} id={item.id} onClick={() => addMovie(item.id)}>{item.name}</List>) 
            : 
            <p>Você ainda não tem uma lista!</p>}
        </Container>
    );
}

const Container = styled.div`
    width: 200px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:5px;

    padding-top: 5px;

    p{
        width:100%;

        font-size:14px;
        font-weight:400;
        font-style:normal;
        color:#fff;
        text-align:center;
    }
`;

const List = styled.div`
    width:100%;
    height:30px;

    font-size:14px;
    font-weight:400;
    font-style:normal;
    color:#fff;
    text-align:center;
`;