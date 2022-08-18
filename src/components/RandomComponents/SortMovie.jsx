import { useContext } from "react";
import {UserContext} from "./../../contexts/UserContext";
import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi";
import Swal from "sweetalert2";
import moviesServices from "../../services/movieServices";

export default function SortMovieIcon({listId}){
    const {token} = useContext(UserContext);
    const config = {headers: {Authorization: `Bearer ${token}`}};

    function sortMovie(arr){
        let sorting = Math.floor(Math.random()*arr.length);
        const result = arr[sorting];
        console.log(sorting);
        Swal.fire({
            title: `${result.title}`,
            imageUrl: `https://image.tmdb.org/t/p/w500${result.image}`,
            imageWidth: 200,
            imageHeight: 250,
            imageAlt: 'Filme',
        })
    }

    function getMovies(listId){
        const promise = moviesServices.getMoviesByListId(listId, config);
        promise.then(res => {
            if(res.data.length > 0) {
                return sortMovie(res.data)
            } else {
                Swal.fire({title:"Impossível sortear!", text: "Não há filmes na lista!", icon: 'warning'});
            }
        });
        promise.catch(err => {
            console.log(err);
            Swal.fire({text: `${err.response.data}`, icon: 'warning'});
        })
    }

    return (
        <>
            <GiPerspectiveDiceSixFacesRandom  color="#ffffff" size={20} onClick={() => getMovies(listId)}/>
        </>
    )
}