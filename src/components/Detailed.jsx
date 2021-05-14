import React from 'react';
import * as weather from "../weather.json";
import { TiWaves } from 'react-icons/ti';
import { WiSunrise, WiSunset, WiHumidity } from "react-icons/wi";
import { GiBottleVapors, GiPaperWindmill } from "react-icons/gi";
import { WiCloud } from "react-icons/wi";
import { MdVisibility, MdRotate90DegreesCcw } from "react-icons/md";


const Detailed = () => {
  return (

    <div id="detailed" className="card">
      <div className="card-body">

        <p className="card-text">
          <WiSunrise size="100" />
          <br></br>
          Sunrise:
          {new Date(weather.current.sunrise).toLocaleTimeString("en-US")}

        </p>
        <p>
        <WiSunset size="100" />
        <br></br>
          Sunset:
        {new Date(weather.current.sunset).toLocaleTimeString("en-US")}
        </p>
        <p>
          <p>
            Pressure:

        {`${weather.current.pressure}`}
          </p>
        </p>
        <p>
        <WiHumidity size="100" />
<br></br>
          Humidity:
        {`${weather.current.humidity}`}

        </p>
        <p>
<GiBottleVapors size="90" />
<br></br>
          Dew Point:
        {`${weather.current.dew_point}`}
        </p>
        <p>
          <p>
            <WiCloud size="100"/>
            <br></br>
            Clouds:
        {`${weather.current.clouds}`}
          </p>
          <MdVisibility size="75" />
          <br></br>
        Visibility:
        {`${weather.current.visibility}`}
          <p>
            <GiPaperWindmill size="100"/>
            <br></br>
            Wind Speed:
        {`${weather.current.wind_speed}`}
          </p>
          <MdRotate90DegreesCcw size="100"/>
          <br></br>
        Wind Degrees:
        
        <p>
        {`${weather.current.wind_deg}`}
          </p>
          <p>
            <h2>{`${weather.current.uvi}`}</h2>
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