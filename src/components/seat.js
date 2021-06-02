import axios from "axios";
import {useEffect, useState, getState} from "react";
import '../styles/seat.style.css';
import React, {Component} from "react";
const free = '#39D1B4';
const occupied = '#FFD712';


class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = { button:true,
            number: null,
            letter: null,
            status: free
        };
        this.toggleStatus = this.toggleStatus.bind(this);
    }
    toggleStatus() {

        if(this.state.color === free){
            this.setState({color:occupied})
        }
        else{
            this.setState({color: free});
        }
        return this.state;

    }


    render()
    {
        return (
            <div>
                <div className="seatable"
                     style={{backgroundColor: this.state.status}}
                     onClick={this.toggleStatus}>
                    <span>
                        {this.state.number} {this.state.letter}
                    </span>
                </div>



            </div>
        );
    }
}

// function LockSeat(props){
//     return  <button className="reserveSeat badge badge-primary"
//                         style={{pointerEvents: "none"}}
//                         onClick={this.reserveSeat}>
//                     <span>Reserve seats</span>
//                 </button>;
// }




export default Seat;
