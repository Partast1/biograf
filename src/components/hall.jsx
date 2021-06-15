import Seat from '../components/seat';
import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import '../styles/seat.style.css';
var free = '#39D1B4';
var occupied = '#FFD712';

class Hall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            seats: []
        };
        // this.toggleColor = this.toggleColor.bind(this);
    }



    // componentDidMount() {
    //     axios.get("http://localhost:3001/seats")
    //         .then(res => {
    //             const seats = res.data;
    //             this.setState({ seats });
    //         });
    // }


    render() {
            return (
<div>
                    {/*{this.state.seats.map((Seat) => (*/}
                            <div className="seatContainer">

                                <React.Fragment>
                                    <Seat />
                                </React.Fragment>
                                {/*<div className="seat"*/}
                                {/*     key={Seat.seat_id}*/}
                                {/*     style={{backgroundColor: this.state.status}}*/}
                                {/*     onClick={Seat.toggleColor()}>*/}

                                {/*    Sæde {Seat.number} {Seat.letter}*/}
                                {/*    {Seat.status}  {Seat.HallHallId}*/}

                                {/*</div>*/}




                            </div>

                    // ))}
</div>


            );
        // }
    }
}
// var [listOfMovies, setListOfMovies] = useState([]);


// this.toggleStatus = this.toggleStatus.bind(this);

// useEffect(() => {
//     axios.get("http://localhost:3001/seats").then((response) => {
//         setListOfMovies(response.data);
//     });
// }, []);

//
// return (
//     <div className="seatContainer" >
//         {listOfMovies.map((value, key) => {
//             return (
//                 <div className="seat"
//                 >
//                     <div className="body"
//                          style={{backgroundColor: value.colorFree}}>
//                         Sal </div>
//                     <div className="body">Sæde {value.number} {value.letter} </div>
//                     <div className="body"> {value.status}  {value.status}  </div>
//                     <button onClick={()=> toggleStatus(value.status)}>Click</button>
//                     {/*<button onClick={toggleStatus}>Click</button>*/}
//
//                 </div>
//
//             );
//         })}
//     </div>
// );


// return props.state.status;

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





