import React from "react";
import { Navigation, Footer, DayGraph, Temp, Map, Detailed, Calendar } from "./export.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (


    
    <div className="main">
      <Navigation />

      <div className="main2">
        <Temp className="temp" />
        <Map />
      </div>


      <DayGraph />
      <Footer className="footer" />
    </div>
  );
}

export default App;
