import axios from "axios";
import {useEffect, useState, React, Component} from "react";
import '../styles/movie.style.css';


 function Movie(){
    const [listOfMovies, setListOfMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/movies").then((response) => {
            setListOfMovies(response.data);
        });
    }, []);

    return (
        <div className="movieContainer">
            {listOfMovies.map((value, key) => {
                return (
                    <div className="movie">
                        <div className="title"> {value.movieName} </div>
                        <div className="badge-success">Længde {value.runtime} mins </div>
                        <div className="body"> {value.movieDescription} </div>
                        <div className="footer"> Biografsal {value.hallFK} </div>
                        {/*<button*/}
                        {/*title="go to movie" onPress={() =>}></button>*/}
                    </div>

                );
            })}


        </div>
    );
}
export default Movie;

