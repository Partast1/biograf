import axios from "axios";
import {useEffect, useState} from "react";
// import Seat from "./seat";



export function Seatapi(props){
    let [listOfSeats, setListOfSeats] = useState([]);


     listOfSeats = props.listOfSeats;
      setListOfSeats = listOfSeats.map((stuff) =>
        <li>{stuff}</li>
    );
    useEffect(() => {
        axios.get("http://localhost:3001/seats").then((response) => {
            setListOfSeats(response.data);
        });
    }, []);
    return(
        <ul>{setListOfSeats}</ul>

    );



}





//
// export function Movie() {
//     const [listOfMovies, setListOfMovies] = useState([]);
//
//     useEffect(() => {
//         axios.get("http://localhost:3001/movies").then((response) => {
//             setListOfMovies(response.data);
//         });
//     }, []);
//
//     return (
//         <div className="movieContainer">
//             {listOfMovies.map((value, key) => {
//                 return (
//                     <div className="movie">
//                         <div className="title"> {value.movieName} </div>
//                         <div className="badge-danger">Længde {value.runtime} mins</div>
//                         <div className="body"> {value.movieDescription} </div>
//                         <div className="footer"> Biografsal {value.hallFK} </div>
//                     </div>
//
//                 );
//             })}
//
//
//         </div>
//     );
// }
