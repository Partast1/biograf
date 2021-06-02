import './app.style.css';
import IndexImage from './helpers/image.helper'
import Movie from './components/movie';
import ReactDOM from "react-dom";
import React from "react";





function App() {
  return (
    <div className="App">
      <div className="mainWrapper ">
        <div className="container">


          <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <a className="navbar-brand" href="#">Disa bio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="index.js">Movies <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">About</a>
                <a className="nav-item nav-link disabled" href="#">Disabled</a>
              </div>
            </div>
          </nav>

          <h2 className="Maintitle">Velkommen</h2>

          <div className="MainContentLeft">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          <div className="MainContentRight">
            {IndexImage()}
          </div>
          <div className="testhey">
            <p>rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du</p>
            <React.Fragment>
            <Movie/>
              </React.Fragment>
          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
