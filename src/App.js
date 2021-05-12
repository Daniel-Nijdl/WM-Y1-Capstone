import React from 'react';
import { Navigation, Footer, DayGraph, Temp, Map, UltraViolet, Humidity, Detailed, Calendar, Minutely } from './export.js';
function App() {
  return (


    
    <div className="main">
      <Navigation />

      <div className="main2">
        <Humidity className="humidity" />
        <UltraViolet className="ultra-violet" />
        <Temp className="temp"/>
        <Map />
        <Detailed />
        <Minutely/>
      </div>


      <DayGraph />
      <Calendar />
      <Footer className="footer" />
    </div>
  );
}

export default App;
