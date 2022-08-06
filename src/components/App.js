import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./../assets/reset.css";
import SignUpPage from "./pages/SignUpPage.js/SignUpPage";
import Home from "./pages/Homepage/Home";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUpPage/>} />
            </Routes>
        </BrowserRouter>
    );
}