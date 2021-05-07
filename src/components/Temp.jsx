
import weather from './weather.json';
import React, { useState } from 'react'
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
      </div>
    </div>
    
  )
}

export default weatherData