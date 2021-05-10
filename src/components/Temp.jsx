import * as weather from "../weather.json";
import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

const current = weather.current;
// const longitude = weather.lon
// const latitude = weather.lat
console.log(weather.current.weather.main);

const weatherData = () => {
  // console.log(weather)
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="card-text">
          <p>{` ${weather.lat}, ${weather.lon} `}</p>
          <p>{new Date(weather.current.dt).toLocaleTimeString("en-US")}</p>
          <h2>{`${weather.current.temp}° F`}</h2>
          <h2>{weather.current.weather.icon}</h2>
          <p>{` Feels like ${weather.current.feels_like} `}</p>
        </p>
      </div>
    </div>
  );
};

export default weatherData;
