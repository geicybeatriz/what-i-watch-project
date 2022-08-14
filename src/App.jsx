import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Profile from "./pages/Profile";
import SignInPage from "./pages/SignInPage";
import Homepage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export default function App(){
    return (
        <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="/sign-up" element={<SignUpPage/>}></Route>
                <Route path="/myaccount" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
                <Route path="/home" element={<PrivateRoute><Homepage /></PrivateRoute>}></Route>
                <Route path="/movies" element={<PrivateRoute><MoviesPage /></PrivateRoute>}></Route>
                <Route path="/series" element={<PrivateRoute><SeriesPage /></PrivateRoute>}></Route>
            </Routes>
        </BrowserRouter>
        </UserProvider>
    );
}