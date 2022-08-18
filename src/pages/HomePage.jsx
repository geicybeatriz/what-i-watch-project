import Footer from "../components/Footer/Footer";
import Banner from "../components/MoviesComponents/Banner";
import ContainerMovies from "../components/MoviesComponents/ContainerMovies";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";
import tmdbServices from "../services/tmdbServices";

export default function Homepage(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = tmdbServices.getPopularMovies()
        promise.then(res => {
                setMovies(res.data.results)
        });
    }, [])

    return (
        <>
            <Header />
            <Banner/>
            <ContainerMovies movies={movies} />
            <Footer />
        </>
    )
}
