import styled from "styled-components";

export default function Logo(){
    return (
        <ContainerLogo>
            <img src="https://cdn-icons-png.flaticon.com/512/3567/3567356.png" alt="logo" />
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
    height: 50px;

    display:flex;
    justify-content:center;
    align-items:center;

    img{
        width: 65px;
        height:65px;
        object-fit:cover;
        
        @media only screen and (max-width: 600px) {
            width: 55px;
            height: 55px;
        }
    }
`;
