import axios from "axios";

//const BASE_URL = "https://what-i-whatch-api.herokuapp.com";
const BASE_URL = "http://localhost:5000";

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