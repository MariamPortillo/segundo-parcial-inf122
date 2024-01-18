import React from "react";
import App from './App.css';
import cajita1 from "./components/Cajita1";
import cajita2 from './components/cajita2';
import cajita3 from './components/cajita3';

function App(){
  return (
    <div className="App">
      <div className="container">
        <div className="titleContainer">
          <h1>Mis Metas</h1>
        </div>
        <div className="textContainer">
          <cajita1 />
        </div>
        <div className="infoContainer">
          /*<cajita2 />
          <cajita3 />/*
        </div>
      </div>
     
    </div>
  );
}

export default App;
