import {FaAngleUp, FaAngleDown} from "react-icons/fa";

export default function IconToggle({setOpenList, openList}){
    return (
        <>
            {openList ? 
                <FaAngleUp color="#fff" size={30} onClick={() => setOpenList(!openList)}/> 
                :
                <FaAngleDown color="#fff" size={30} onClick={() => setOpenList(!openList)}/>
            }
        </>
        
    );
}