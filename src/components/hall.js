import Seat from '../components/seat';
import {useEffect, useState, React, Component} from "react";
import axios from "axios";
// import {Seatapi} from './apihandler';


class Hall extends Component {
    constructor(props) {
        super(props);
        this.state = {number: null,
            listOfSeats: [],
            completeListOfSeats: []



        };

    }

    render()
    {

        Seatapi();

        // const items = this.state.listOfSeats.map(Seatapi.call(item){
        //     return <li>{item}</li>;
        return (



            <div className="seat" >
                {this.state.completeListOfSeats.map((value, key) => {
                    return (
                        <div className="movie">
                            <div className="body">Sal {value.hallFK} </div>
                            <div className="body">Sæde {value.number} {value.letter} </div>
                            <div className="body"></div>
                            <div className="body"> {value.status} </div>
                        </div>

                    );
                })
                }


            </div>
        );
    }
}

function Seatapi(){
    useEffect(() => {
        axios.get("http://localhost:3001/seats").then((response) => {
            this.completeListOfSeats(response.data);
        });
    }, []);


}

// function LockSeat(props){
//     return  <button className="reserveSeat badge badge-primary"
//                         style={{pointerEvents: "none"}}
//                         onClick={this.reserveSeat}>
//                     <span>Reserve seats</span>
//                 </button>;
// }




export default Hall;
