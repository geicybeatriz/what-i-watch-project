import styled from "styled-components";
import SignUp from "./../components/AuthComponents/SignUp";

export default function SignUpPage(){
    return (
        <>
            <ContainerHome>
                <Poster />
                <SignUp />                                
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
    width:100%;
    background-image: 
        linear-gradient(to bottom, #5502027f, rgba(0,0,0,0.5)),
        url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    @media only screen and (max-width: 600px) {
        display:none;
    }
`;
