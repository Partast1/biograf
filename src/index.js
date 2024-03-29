import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
// import Movie from "./components/movie";
// import Seat from "./components/seat";
 import Hall from "./components/hall";

ReactDOM.render(
  <React.StrictMode>
    <Hall />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
