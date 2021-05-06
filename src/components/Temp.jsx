import { useState } from 'react'
import weather from './components/weather.json';
import * as ReactBootStrap from "react-bootstrap";

const weatherData = () => {
  return(
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">
          Content
        </p>
        <a href="/#" className="card-link">Card link</ a>
      </div>
    </div>
    
  )
}