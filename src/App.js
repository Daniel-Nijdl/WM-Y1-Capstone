import React from 'react';
import { Navigation, Footer, DayGraph, Temp, Map } from './export.js';

function App() {
  return (
    <div className="main">
      <Navigation />
      <Temp className="temp"/>
      <Map />
      <DayGraph />
      <Footer className="footer" />
  </div>
  );
}

export default App;
