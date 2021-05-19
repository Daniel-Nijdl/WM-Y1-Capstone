import React from 'react';
import { Navigation, Footer, DayGraph, Temp, Map, Detailed, Calendar, Hourly, WindSpeed, Humidity, UltraViolet, HourlyGraph} from './export.js';
import Container from 'react-bootstrap/Container'
function App() {
  return (
    <div className="Wrapper">
      <Navigation className="navigation" />
      <Calendar classname="calendar" id="weekly" />
      
      <div className="main mainGrid">
        <Temp className="temp" />
        <Humidity className="humidity" />
        <UltraViolet className="uv" />
        <WindSpeed className="ws" />
        <Map className="map" />
        <Detailed className="detail" />
      </div>


      <DayGraph className="graphThing" />
      <HourlyGraph className="hourly-graph" />
      <Hourly classname="hourly" id="hourly" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
