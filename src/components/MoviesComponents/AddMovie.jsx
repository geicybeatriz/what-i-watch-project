import { useContext, useState } from "react";
import styled from "styled-components"
import { UserContext } from "../../contexts/UserContext";
import {IoAddSharp} from "react-icons/io5";
import {TailSpin} from "react-loader-spinner";
import axios from "axios";
import MyLists from "./MyLists";
import Swal from "sweetalert2";

export default function AddMovie({title, id, image}){
    const [nameList, setNameList] = useState({name:""});
    const [myLists, setMyLists] = useState([]);
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const {token} = useContext(UserContext);

    const config = {headers: {Authorization: `Bearer ${token}` }};
    const URL = `${process.env.REACT_APP_API_BASE_URL}/mylist`;

    function getLists(){
        const promise = axios.get(URL, config);
        promise.then(res => {
            setMyLists(res.data);
            setOpen(!open);
        });
        promise.catch(err => console.log(err)); 
    }

    function createList(e){
        e.preventDefault();
        setDisabled(true);

        const promise = axios.post(URL,nameList, config);
        promise.then(res => {
            Swal.fire({text:'Lista criada com sucesso!', icon:'success'});
            setDisabled(false)
            setNameList({...nameList, name:""});
            getLists();
        });
        promise.catch(err => {
            Swal.fire({text: `${err.response.data}`, icon: 'warning'});
            setDisabled(false);
        });
    }

    function addMovie(e){
        e.preventDefault();
        getLists();
    }

    return (
        <Container>
            <DivButton>
                <Button onClick={addMovie}>+</Button>
            </DivButton>
            <DivForm open={open} >
                <Form onSubmit={createList}>
                    <Input placeholder="ex: lista 1"
                            type="text" required
                            value={nameList.name}
                            onChange={(e) => setNameList({...nameList, name: e.target.value})} 
                            disabled={disabled}/>
                    <ButtonAdd type="submit" disabled={disabled}>
                        {disabled ? 
                            <TailSpin color="#FFF" height={20} width={20} />
                            :
                            <IoAddSharp color="#ffffff" size={28} />
                        }
                    </ButtonAdd>
                </Form>
                <MyLists setOpen={setOpen} title={title} id={id} image={image} lists={myLists}/>
            </DivForm>
        </Container>
    )
}

const Container = styled.div`
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
    gap:20px;

`;

const DivButton = styled.div`
    width: 100%;

    display:flex;
    justify-content:right;
`;

const Button = styled.button`
    width: 30px;
    height:30px;

    border-radius:50%;
    border:none;
    background-color:#6C0000;

    color:#fff;
    font-size:16px;

    display:flex;
    justify-content:center;
    align-items:center;

`;

const DivForm = styled.div`
    width: 200px;
    padding:5px;

    display:${props => props.open ? "flex" : "none"};
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:5px;

    background-color:#0c0808e2;
`;

const Form = styled.form`
    width: 100%;

    display:flex;
    justify-content:right;
    gap:10px;
`;

const Input = styled.input`
    width: 80%;

    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
`;

const ButtonAdd = styled.button`
    width: 30px;
    height:30px;

    border-radius:5px;
    border:none;
    background-color:#6C0000;

    display:flex;
    justify-content:center;
    align-items:center;
`;


