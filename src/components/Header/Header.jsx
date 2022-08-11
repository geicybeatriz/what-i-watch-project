import styled from "styled-components";
import Logo from "./components/Logo";
import MenuUser from "./components/MenuUser";
import TopMenu from "./components/TopMenu";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header(){
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Container>
            <Logo/>
            <DivMenu>
                <TopMenu />
                <span></span>
                <MenuUser />
            </DivMenu>
            <MenuMobile>
                <AiOutlineMenu color="#fff" size={30} onClick={() => setOpenMenu(true)}/>
            </MenuMobile>
            <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;

    height:80px;
    padding: 0 30px;

    background-color:#20201f;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display:flex;
    justify-content:space-between;
    align-items:center;

    @media only screen and (max-width: 600px) {
        justify-content:center;
    }
`;

const DivMenu = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;

    gap:20px;

    span{
        width:1px;
        height: 40px;
        background-color:#ffffff;
    }

    @media only screen and (max-width: 600px) {
        display:none;
    }
`;

const MenuMobile = styled.div`
    width:40px;
    height:40px;

    position:fixed;
    top:20px;
    right:20px;

    display:flex;
    justify-content:center;
    align-items:center;

    @media only screen and (min-width: 600px) {
        display:none;
    }
`;