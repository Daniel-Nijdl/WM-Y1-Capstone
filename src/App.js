import React from 'react';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx'
import Temp from './components/Temp.jsx'
import Map from './components/Map.jsx'


function App() {
  return (
    <div className="main">
      <Navigation />
    
      <Temp className="temp"/>
      <Map />
      <Footer className="footer" />
  </div>
  );
}

export default App;
