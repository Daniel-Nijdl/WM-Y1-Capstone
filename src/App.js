import React from 'react';
import { Navigation, Footer, DayGraph, Temp, Map, Detailed, Calendar, Hourly} from './export.js';
function App() {
  return (
    <div className="Wrapper">
      <Navigation className="navigation" />

      <div className="main">
        {/* <WindSpeed className="wind-speed" /> */}
        {/* <Humidity className="humidity" /> */}
        {/* <UltraViolet className="ultra-violet" /> */}
        <Temp className="temp" />
        <Map className="map" />
        <Detailed />
      </div>


      <DayGraph className="graphThing"/>
      <Calendar classname="calendar" id="weekly" />
      <Hourly classname="hourly" id="hourly" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
