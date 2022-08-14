import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../contexts/UserContext"

const PrivateRoute = ({children}) => {
    const {token} = useContext(UserContext);
    const navigate = useNavigate();
    if(!token) {
        Swal.fire({text:"Você será redirecionado(a)!", icon:'warning'})
            .then(() => navigate("/"));
    }
    
    return children; 
}

export default PrivateRoute;