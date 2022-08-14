import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function signUp(userData){
    const promise = await axios.post(`${BASE_URL}/sign-up`, userData);
    return promise;
}

function signIn(userData){
    const promise = axios.post(`${BASE_URL}/sign-in`, userData);
    return promise;
}

const authServices = {
    signUp,
    signIn
}

export default authServices;