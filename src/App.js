import React from 'react';
import { Navigation, Footer, DayGraph, Temp, Map, UltraViolet, Humidity, Detailed, Calendar, WindSpeed } from './export.js';
function App() {
  return (
    <div className="Wrapper">
      <Navigation className="navigation" />

      <div className="main">
        <WindSpeed className="wind-speed" />
        <Humidity className="humidity" />
        <UltraViolet className="ultra-violet" />
        <Temp className="temp" />
        <Map className="map" />
        <Detailed />
      </div>


      <DayGraph className="graphThing"/>
      <Calendar classname="calendar" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
