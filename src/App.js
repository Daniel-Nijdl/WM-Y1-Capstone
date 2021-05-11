import React from 'react';
import Detailed from './components/Detailed.jsx';
import { Navigation, Footer, DayGraph, Temp, Map, UltraViolet, Humidity } from './export.js';
function App() {
  return (
    <div className="main">
            <Navigation />

      <div className="main2">
        <Humidity className="humidity" />
        <UltraViolet className="ultra-violet" />
        <Temp className="temp"/>
        <Map />
        <Detailed/>
      </div>
      
      <DayGraph />
      <Footer className="footer" />
  </div>



  );
}




export default App;
