import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.js/SignUpPage";
import Profile from "./pages/ProfilePage/Profile";
import SignInPage from "./pages/SignInPage/SignInPage";
import Homepage from "./pages/HomePage/HomePage";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="/sign-up" element={<SignUpPage/>}></Route>
                <Route path="/myaccount" element={<Profile />}></Route>
                <Route path="/home" element={<Homepage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}