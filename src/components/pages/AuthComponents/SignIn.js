import { useState } from "react";
import authServices from "../../../services/authServices";
import { Button, Container, Form, Input, Anchor } from "./style";

export default function SignIn(){
    const [userData, setUserData] = useState({email:"", password:""});
    const [disabled, setDisabled] = useState(false);

    function loginUser(e){
        e.preventDefault();
        setDisabled(true);
        console.log(userData);
        const promise = authServices.signIn(userData);
        promise.then(res => console.log(res.data));
        promise.catch(erro => {
            console.log(erro);
            setDisabled(false);
        });
    }

    return (
        <Container>
            <Form onSubmit={() => loginUser()}>
                <Input type="email"
                        placeholder="Digite seu e-mail"
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})} 
                        disabled={disabled} />
                
                <Input type="password"
                        placeholder="Senha"
                        value={userData.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})} 
                        disabled={disabled} />

                <Button type="submit" disabled={disabled}>Entrar</Button>
            </Form>

            <Anchor  to="/sign-up">Não tem uma conta? Cadastre-se!</Anchor>
        </Container>
    )
}