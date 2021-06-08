import ToggleStatus from '../components/toggleStatus';
import {useEffect, useState, React} from "react";
import axios from "axios";
// import {Seatapi} from './apihandler';
import '../styles/seat.style.css';
// const free = '#39D1B4';
// const occupied = '#FFD712';
const testfree = "free";

function Hall(){
    var [listOfMovies, setListOfMovies] = useState([]);


    // this.toggleStatus = this.toggleStatus.bind(this);
    useEffect(() => {
        axios.get("http://localhost:3001/seats").then((response) => {
            setListOfMovies(response.data);
        });
    }, []);

    return (
        <div className="seatContainer" >
            {listOfMovies.map((value, key) => {
                return (
                    <div className="seat"
                    >
                        <div className="body"
                             style={{backgroundColor: value.colorFree}}>
                            Sal </div>
                        <div className="body">Sæde {value.number} {value.letter} </div>
                        <div className="body"> {value.status}  {value.status}  </div>
                        <button onClick={()=> toggleStatus(value.status)}>Click</button>
                        {/*<button onClick={toggleStatus}>Click</button>*/}

                    </div>

                );
            })}
        </div>
    );


    // return props.state.status;
}
// function toggleStatus(props) {
//     // console.log("fuck off")
//     if(props.state.status = props.colorFree)
//     {
//         props.state.status = props.colorOccu ;
//     }
//     else{
//         props.state = this.colorOccu;
//     }
//     return props.state.status;
// }
export default Hall;








// function LockSeat(props){
//     return  <button className="reserveSeat badge badge-primary"
//                         style={{pointerEvents: "none"}}
//                         onClick={this.reserveSeat}>
//                     <span>Reserve seats</span>
//                 </button>;
// }





