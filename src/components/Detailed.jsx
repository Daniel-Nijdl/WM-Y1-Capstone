import { WiHumidity } from 'react-icons/wi';
import React from 'react';
import * as weather from "../weather.json";
import { TiWaves } from 'react-icons/ti';
import { WiSunrise } from "react-icons/wi";




const Detailed = () => {
  return (

    <div id="detailed" className="card">
      <div className="card-body">

        <p className="card-text">
          Sunrise:
          {new Date(weather.current.sunrise).toLocaleTimeString("en-US")}
          <WiSunrise size="100" />
        </p>
        <p>
          Sunset:
        {new Date(weather.current.sunset).toLocaleTimeString("en-US")}
        </p>
        <p>
        <p>
          Pressure:

        { `${ weather.current.pressure }` }
        </p>
        </p>
        <p>
          Humidity:
        { `${ weather.current.humidity }` } 
        <WiHumidity size="100" />

        </p>
        <p>
          Dew Point:
        { `${ weather.current.dew_point }` }
        </p>
        <p>
        <p>
          Clouds:
        { `${ weather.current.clouds }` }
        </p>
        Visibility:
        { `${ weather.current.visibility }` }
        <p>
          Wind Speed:
        { `${ weather.current.wind_speed }` }
        </p>
        Wind Degrees:
        <p>
        {new Date(weather.current.wind_deg).toLocaleTimeString("en-US")}
        </p>
        <p>
        <h2>{ `${ weather.current.uvi }` }</h2>
          <p>UV Index</p>
          <TiWaves size="100" />
        </p>
        </p>
      </div>
    </div>
  )
}

export default Detailed;
<TiWaves size="100" />