import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styled from "styled-components";
import Label from "../components/MoviesComponents/Label";
import { useContext, useEffect, useState } from "react";
import MoviesLists from "../components/MoviesComponents/MoviesLists";
import { UserContext } from "../contexts/UserContext";
import moviesServices from "../services/movieServices";


export default function Profile(){
    const [myLists, setMyLists] = useState([]);

    const {token} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${token}` }};

    useEffect(() => {
        const promise = moviesServices.getLists(config);
            promise.then(res => {
                console.log(res.data); 
                setMyLists(res.data)
            });
            promise.catch(err => console.log(err));
    }, []);

    return (
        <>
            <Header/>
            <Container>
                <Label message={`Minhas listas`}/>
                <MoviesLists lists={myLists}/>
            </Container>
            <Footer/>
        </>
        
    )
}

const Container = styled.section`
    width:100%; 
    min-height:calc(100vh - 100px);

    display: flex;
    flex-direction:column;
    align-items:flex-start;
    margin-top:80px;    
`;