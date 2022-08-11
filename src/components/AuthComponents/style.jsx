import styled from "styled-components";
import {Link} from "react-router-dom";

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap:0.7rem;

    @media only screen and (max-width: 600px) {
        width:85%;
    }
`;

export const Input = styled.input`
    width: 85%;
    height: 55px;

    border-radius:50px;
    border:none;

    color:#000;
    background-color: #FFF4EE;

    padding-left: 25px;

    font-family: 'Roboto', sans-serif;
    font-size:18px;
    font-weight:400;
    font-style:normal;
    
    ::placeholder{
        color:#88726C;

        font-family: 'Roboto', sans-serif;
        font-size:18px;
        font-weight:400;
        font-style:normal
    }

    @media only screen and (max-width: 600px) {
        width:100%;
    }
`;

export const Button = styled.button`
    width: 70%;
    height: 40px;

    border-radius:50px;
    border:none;
    background-color:#6C0000;

    font-family: 'Roboto', sans-serif;
    font-size:18px;
    font-weight:400;
    font-style:normal;
    text-align: center;
    color: #ffffff;

    display:flex;
    align-items:center;
    justify-content:center;

    @media only screen and (max-width: 600px) {
        width:80%;
    }
`;

export const Container = styled.div`
    width:50%;
    height:100%;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap:10px;
    
    background-color: #000000;

    @media only screen and (max-width: 600px) {
        width:100vw;
    }
`;

export const Anchor = styled(Link)`
    width: 250px;
    height: 18px;
    
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;

`;