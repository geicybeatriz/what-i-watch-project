import styled from "styled-components";
import {Link} from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function TopMenu({openMenu}){
    const navigate = useNavigate();
    function logOut(e){
        e.preventDefault();
        localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <Container openMenu={openMenu}>
            <MenuButton to="/home">Filmes Populares</MenuButton>
            <MenuButton to="/now-playing">Nos cinemas</MenuButton>
            <MenuButton to="/top-rated">Bem avaliadas!</MenuButton>
            {openMenu ? <MenuButton to="/myaccount">Minha conta</MenuButton> : <></>}
            {openMenu ? <BiLogOut onClick={logOut} color="#fff" size={28}/>: <></>}
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