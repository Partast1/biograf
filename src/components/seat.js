import '../styles/seat.style.css';
import React, {Component} from "react";
// const free = '#39D1B4';
// const occupied = '';


class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = { button:true,
            colorFree: "#39D1B4",
            colorOccu: "#FFD712",
            status: "free"
        };
        // this.status = this.colorFree  ;
        this.toggleStatus = this.toggleStatus.bind(this);


    }
    // toggleStatus() {
    //
    //
    //     console.log("fuck off")
    //     // if(this.state.status === "free"){
    //     //     this.setState("occuipied")
    //     // }
    //     // else{
    //     //     this.setState({color: this.state.colorFree});
    //     // }
    //     // return this.state.color;
    //
    // }
    // toggleStatus() {
    //
    //     if(this.state.status === this.state.colorFree){
    //         this.setState({color:this.state.colorOccu})
    //     }
    //     else{
    //         this.setState({color: this.state.colorFree});
    //     }
    //     return this.state.color;
    //
    // }



    render()
    {
        return (
            <div>
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
