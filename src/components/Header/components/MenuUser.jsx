import styled from "styled-components";
import {FaUserCircle} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi";
// import {alertInProgress} from "../../utils/Toastify";

export default function MenuUser({openMenu}){
    return (
        <Icon openMenu={openMenu}>
            <FaUserCircle  color="#fff" size={28}/>
            <BiLogOut  color="#fff" size={28}/>
        </Icon>
    );
}

const Icon = styled.div`
    height:30px;

    display:flex;
    justify-content:center;
    align-items:center;
    gap:20px;
`;

