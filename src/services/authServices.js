import axios from "axios";

const URL = process.env.REACT_APP_API_DEPLOY;

async function signUp(userData){
    const promise = await axios.post(`${URL}/sign-up`, userData);
    return promise;
}

function signIn(userData){
    const promise = axios.post(`${URL}/sign-in`, userData);
    return promise;
}

const authServices = {
    signUp,
    signIn
}

export default authServices;