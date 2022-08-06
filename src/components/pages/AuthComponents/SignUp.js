import { useState } from "react";
import { Button, Container, Form, Input, Anchor } from "./style";

export default function SignUp(){
    const [userData, setUserData] = useState({name:"", email:"", password:"", confirm_password:""});
    const [disabled, setDisabled] = useState(false);

    function createNewUser(e){
        e.preventDefault();
        setDisabled(true);
        console.log(userData);
    }

    return (
        <Container>
            <Form onSubmit={() => createNewUser()}>
                <Input type="text"
                        placeholder="Digite seu nome"
                        value={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})} 
                        disabled={disabled} />

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

                <Input type="password"
                        placeholder="Confirme sua senha"
                        value={userData.confirm_password}
                        onChange={(e) => setUserData({...userData, confirm_password: e.target.value})} 
                        disabled={disabled} />

                <Button type="submit" disabled={disabled}>Cadastrar</Button>
            </Form>

            <Anchor to="/">Já tem uma conta? Entre agora!</Anchor>
        </Container>
    )
}

