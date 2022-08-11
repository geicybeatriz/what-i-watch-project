import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TopMenu from "./TopMenu";

export default function NavBar({openMenu, setOpenMenu}){
    return (
        <>
            <ContainerNavBar openMenu={openMenu}>
                <Right>
                    <Icon>
                        <AiOutlineCloseCircle color="#fff" size={35} onClick={() => setOpenMenu(false)}/>  
                    </Icon>
                    <TopMenu openMenu={openMenu}/>
                </Right>
            </ContainerNavBar>
        </>
    )
}

const ContainerNavBar = styled.aside`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    right: 0;

    background-color: #ffffff;
    opacity: 0.9;
    z-index: 5;

    display: ${props => props.openMenu ? "flex" : "none"};
    justify-content: right;

    @media only screen and (min-width: 600px) {
        display:none;
    }
`;

const Right = styled.section`
    width: 70%;

    padding:20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;

    background-color: #000;
    opacity: 0.98;
`;

const Icon= styled.div`
    width:100%;
    height:40px;

    display:flex;
    justify-content:right;
    align-items:center;

    @media only screen and (min-width: 600px) {
        display:none;
    }
`;