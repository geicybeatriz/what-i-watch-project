import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.DATABASE_URL;

async function signUp(userData){
    const promise = await axios.post(`${BASE_URL}/sign-up`, userData);
    return promise;
}

async function signIn(userData){
    const promise = await axios.post(`${BASE_URL}/sign-in`, userData);
    return promise;
}

const authServices = {
    signUp,
    signIn
}

export default authServices;