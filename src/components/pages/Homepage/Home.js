import styled from "styled-components";
import SignIn from "../AuthComponents/SignIn";

export default function Home(){
    
    return (
        <>
            <ContainerHome>
                <Poster>
                    <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="wallpaper" />
                </Poster>
                <SignIn />                 
            </ContainerHome>
        </>
    );
}

const ContainerHome = styled.main`
    width:100%;
    height: 100vh;

    display:flex;
    justify-content: center;

    overflow-y:hidden;
`;

const Poster = styled.div`
    width:90%;
    /* height:100%; */

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`;

