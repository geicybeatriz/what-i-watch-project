import styled from "styled-components";

export default function Banner(){
    return (
        <>
            <Container>
                <Title>Bem-vindo(a)!</Title>
                <Text>Navegue, escolha e adicione filmes e/ou séries em sua lista.</Text>
            </Container>
        </>
    );
}

const Container = styled.div`
    width:100%;
    height:200px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:5px;

    padding:30px;
    margin-top:80px;

    background:linear-gradient(to right,  #5f0101e6, #000000c8);
`;

const Title = styled.h1`
    width:100%;

    font-size:36px;
    font-style:bold;
    font-weight:700;
    text-align:left;
    color:#fff;

    @media only screen and (max-width: 600px) {
        font-size:26px;
    }
`;

const Text = styled.h2`
    width:100%;

    font-size:18px;
    font-style:normal;
    font-weight:400;
    text-align:left;
    line-height:20px;
    color:#fff;

    @media only screen and (max-width: 600px) {
        font-size:12px;
        line-height: 14px;
    }
`;