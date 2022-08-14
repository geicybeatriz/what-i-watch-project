import styled from "styled-components";

export default function Label({message}){
    return (
        <Title>{message}</Title>
    );
}

const Title = styled.h1`
    width:100%;
    
    font-size:34px;
    font-weight:700;
    line-height:36px;
    font-style:normal;
    text-align:left;

    padding:30px;
    margin-top:30px;
    
    color: #fff;
`;
