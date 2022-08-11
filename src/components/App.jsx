import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Profile from "./pages/Profile";
import SignInPage from "./pages/SignInPage";
import Homepage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="/sign-up" element={<SignUpPage/>}></Route>
                <Route path="/myaccount" element={<Profile />}></Route>
                <Route path="/home" element={<Homepage />}></Route>
                <Route path="/movies" element={<MoviesPage />}></Route>
                <Route path="/series" element={<SeriesPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}