import {BrowserRouter, Routes, Route} from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignUpPage from "./pages/SignUpPage";
import Profile from "./pages/Profile";
import SignInPage from "./pages/SignInPage";
import Homepage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import NowPlayingPage from "./pages/NowPlaying";
import MoviePage from "./pages/MoviePage";

export default function App(){
    return (
        <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="/sign-up" element={<SignUpPage/>}></Route>
                <Route path="/home" element={<PrivateRoute><Homepage /></PrivateRoute>}></Route>
                <Route path="/now-playing" element={<PrivateRoute><NowPlayingPage/></PrivateRoute>}></Route>
                <Route path="/top-rated" element={<PrivateRoute><SeriesPage /></PrivateRoute>}></Route>
                <Route path="/myaccount" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
                <Route path="/movie/:id" element={<PrivateRoute><MoviePage /></PrivateRoute>}></Route>
            </Routes>
        </BrowserRouter>
        </UserProvider>
    );
}