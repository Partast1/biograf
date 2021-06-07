import Seat from '../components/seat';
import {useEffect, useState, React, Component} from "react";
import axios from "axios";
import {Seatapi} from './apihandler';
import '../styles/seat.style.css';
// const free = '#39D1B4';
// const occupied = '#FFD712';

function Hall(){
    var [listOfMovies, setListOfMovies] = useState([]);
    const number = useState();
    let color = '';
    // this.toggleStatus = this.toggleStatus.bind(this);
    useEffect(() => {
        axios.get("http://localhost:3001/seats").then((response) => {
            setListOfMovies(response.data);
        });
    }, []);


    return (
        <div className="seatContainer" >
            {listOfMovies.map((value, key) => {
                color = value.status;
                return (
                    <div className="seat"

                    >
                        <div className="body"
                             style={{backgroundColor: color
                             }}
                        >Sal {value.hallFK} </div>
                        <div className="body">Sæde {value.number} {value.letter} </div>
                        <div className="body"> {value.status} {color} </div>
                        <button onClick={value.toggleStatus}>Click</button>
                    </div>

                );
            })}
        </div>
    );
}

// function toggleStatus() {
//
//     if(this.state.color === free){
//         this.setState({color:occupied})
//     }
//     else{
//         this.setState({color: free});
//     }
//     return this.state;
//
// }
export default Hall;








// function LockSeat(props){
//     return  <button className="reserveSeat badge badge-primary"
//                         style={{pointerEvents: "none"}}
//                         onClick={this.reserveSeat}>
//                     <span>Reserve seats</span>
//                 </button>;
// }





