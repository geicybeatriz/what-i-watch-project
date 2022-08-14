import styled from "styled-components";
import {FaUserCircle} from "react-icons/fa";
import {BiLogOut} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

export default function MenuUser({openMenu}){
    const navigate = useNavigate();

    function logOut(e){
        e.preventDefault();
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <Icon openMenu={openMenu}>
            <FaUserCircle onClick={() => navigate("/myaccount")} color="#fff" size={28}/>
            <BiLogOut onClick={logOut} color="#fff" size={28}/>
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

