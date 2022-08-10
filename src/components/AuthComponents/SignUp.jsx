import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "./../../services/authServices";
import { Button, Container, Form, Input, Anchor } from "./style";
import { ThreeDots } from "react-loader-spinner";
import Swal from 'sweetalert2'

export default function SignUp(){
    const [userData, setUserData] = useState({name:"", email:"", password:"", confirm_password:""});
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function createNewUser(e){
        e.preventDefault();
        setDisabled(true);
        const promise = authServices.signUp(userData);
        promise.then(() => navigate("/"));
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
            <Form onSubmit={createNewUser}>
                <Input type="text"  required
                        placeholder="Digite seu nome"
                        value={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})} 
                        disabled={disabled} />

                <Input type="email"  required
                        placeholder="Digite seu e-mail"
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})} 
                        disabled={disabled} />
                
                <Input type="password"  required
                        placeholder="Senha"
                        value={userData.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})} 
                        disabled={disabled} />

                <Input type="password" required
                        placeholder="Confirme sua senha"
                        value={userData.confirm_password}
                        onChange={(e) => setUserData({...userData, confirm_password: e.target.value})} 
                        disabled={disabled} />

                <Button type="submit" disabled={disabled}>{disabled ? <ThreeDots color="#ffffff" height={60} width={60} /> : "Cadastrar"}</Button>
            </Form>

            <Anchor to="/">Já tem uma conta? Entre agora!</Anchor>
        </Container>
    )
}

