import { useState } from "react";
import authServices from "./../../services/authServices";
import { Button, Container, Form, Input, Anchor } from "./style";
import {ThreeDots} from "react-loader-spinner";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const [userData, setUserData] = useState({email:"", password:""});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function loginUser(e){
        e.preventDefault();
        setDisabled(true);

        const promise = authServices.signIn(userData);
        promise.then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data);
            navigate("/home");
        });
        
        promise.catch(erro => {
            console.log(erro);
            Swal.fire({
                text: `${erro.response.data}`,
                icon: 'warning'
            })
            setDisabled(false);
        });
    }

    return (
        <Container>
            <Form onSubmit={loginUser}>
                <Input type="email" required
                        placeholder="Digite seu e-mail"
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})} 
                        disabled={disabled} />
                
                <Input type="password" required
                        placeholder="Senha"
                        value={userData.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})} 
                        disabled={disabled} />

                <Button type="submit" disabled={disabled}>{disabled ? <ThreeDots color="#ffffff" height={60} width={60} /> : "Entrar"}</Button>
            </Form>

            <Anchor  to="/sign-up">Não tem uma conta? Cadastre-se!</Anchor>
        </Container>
    )
}