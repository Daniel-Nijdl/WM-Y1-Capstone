import React from 'react';
import { Navigation, Footer, DayGraph, Temp, Map } from './export.js';

function App() {
  return (
    <div className="main">
            <Navigation />

      <div className="main2">
      <Temp className="temp"/>
      <Map />
      </div>
      
      <DayGraph />
      <Footer className="footer" />
  </div>
  );
}

export default App;
