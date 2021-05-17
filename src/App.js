import React from 'react';
import { Navigation, Footer, DayGraph, Temp, Map, Detailed, Calendar, Hourly, WindSpeed, Humidity, UltraViolet} from './export.js';
import Container from 'react-bootstrap/Container'
function App() {
  return (
    <div className="Wrapper">
      <Navigation className="navigation" />

      <div className="main mainGrid">
        <WindSpeed className="ws" />
        <Humidity className="humidity" />
        <UltraViolet className="uv" />
        <Temp className="temp" />
        <Map className="map" />
        <Detailed className="detail" />
      </div>


      <DayGraph className="graphThing"/>
      <Calendar classname="calendar" id="weekly" />
      <Hourly classname="hourly" id="hourly" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
