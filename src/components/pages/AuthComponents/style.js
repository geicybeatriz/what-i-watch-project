import styled from "styled-components";
import {Link} from "react-router-dom";

export const Form = styled.form`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    gap:0.7rem;
`;

export const Input = styled.input`
    width: 400px;
    height: 60px;

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
`;

export const Button = styled.button`
    width: 300px;
    height: 50px;

    border-radius:50px;
    border:none;
    background-color:#6C0000;

    font-family: 'Roboto', sans-serif;
    font-size:18px;
    font-weight:400;
    font-style:normal;
    text-align: center;
    color: #ffffff;
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