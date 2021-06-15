import '../styles/seat.style.css';
import React, {useEffect, useState, setState, Component} from "react";
import axios from "axios";
// const free = '#39D1B4';
// const occupied = '';
var free = '#39D1B4';
var occupied = '#FFD712';



class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = { button:true,
            // free: "#39D1B4",
            // occupied: "#FFD712",
            status: this.free,
            seats: []
        };
        this.toggleColor = this.toggleColor.bind(this);


    }
    componentDidMount() {
        axios.get("http://localhost:3001/seats")
            .then(res => {
                const seats = res.data;
                this.setState({ seats });
            });
    }
    toggleColor() {

        if(this.state.color === free){
            this.setState({color:occupied})
        }
        else{
            this.setState({color: free});
        }
        return this.state;

    }
    toggleColor(props) {

        if(props.state.status === props.free){
            props.setState({status:this.occupied})
        }
        else{
            props.setState({status:this.free});
        }
        return props.state.status;

    }

     LockSeat(props){
    return  <button className="reserveSeat badge badge-primary"
                        style={{pointerEvents: "none"}}
                        onClick={this.reserveSeat}>
                    <span>Reserve seats</span>
                </button>;
}


    render()
    {

        return (
            <div>
            {this.state.seats.map((Seat) => (
            <div className="seat"
                 key={Seat.seat_id}
                 style={{backgroundColor: this.state.status}}
                 onClick={this.toggleColor}>

                Sæde {Seat.number} {Seat.letter}
                {Seat.status}  {Seat.HallHallId}

            </div>
                ))}
            </div>
        );
    }
}


export default Seat;
