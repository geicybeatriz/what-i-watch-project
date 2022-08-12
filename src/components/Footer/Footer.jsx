import styled from "styled-components";

export default function Footer(){
    return (
        <>
            <Container>
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDB" />
                <span></span>
            </Container>
        </>
    )
}

const Container = styled.section`
    width:100%;
    height: 100px;

    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:20px;

    margin-top:100px;
    padding: 0 30px;

    background-color:#20201f;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.15);

    img{
        width: 60px;
        height:60px;
    }

    span{
        width:1px;
        height:60px;
        background-color:#fff;
    }

`;