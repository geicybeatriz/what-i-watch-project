import styled from "styled-components";
import {Link} from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

export default function TopMenu({openMenu}){
    return (
        <Container openMenu={openMenu}>
            <MenuButton to="/home">Início</MenuButton>
            <MenuButton to="/movies">Filmes</MenuButton>
            <MenuButton to="/series">Séries</MenuButton>
            {openMenu ? <MenuButton to="/myaccount">Minha conta</MenuButton> : <></>}
            {openMenu ? <BiLogOut color="#fff" size={28}/>: <></>}
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:30px;

    ${props => props.openMenu && "flex-direction: column"};
`;

const MenuButton = styled(Link)`
    font-family: 'Roboto', sans-serif;
    font-size:16px;
    font-weight:400;
    font-style:normal;
    color:#ffffff;
`;