import React from 'react';
import * as weather from "../weather.json";
import { TiWaves } from 'react-icons/ti';
import { WiSunrise, WiSunset, WiHumidity, WiCloud } from "react-icons/wi";
import { GiBottleVapors, GiPaperWindmill } from "react-icons/gi";
import { MdVisibility, MdRotate90DegreesCcw } from "react-icons/md";


const findCloudiness = clouds => {

  if (clouds > 75) {
    return 'Extremely Cloudy';
  } else if (clouds > 50) {
    return 'Very Cloudy';
  } else if (clouds > 25) {
    return 'Cloudy';
  } else {
    return 'Clear Skies';
  }
}

const Detailed = () => {
  return (

    <div id="detailed" className=" mainCDiv">
      <div className="card-body ">
        <p className="card-text cardText">
          <WiSunrise size="50" />
          <br></br>
          Sunrise:
          {new Date(weather.current.sunrise).toLocaleTimeString("en-US")}

        </p>
        <p card-body className="card-text cardText">
        <WiSunset size="50" />
        <br></br>
          Sunset:
        {new Date(weather.current.sunset).toLocaleTimeString("en-US")}
        </p>
        <p>
          <p className="card-text cardText">
            Pressure:
          <br></br>
        {`${weather.current.pressure}`}
          </p>
        </p>
        {/* <p me="card-text cardText">

        <WiHumidity size="50" />
        <br></br>
          Humidity:
        {`${weather.current.humidity}`}
        </p> */}

<p className="card-text cardText">
<WiHumidity size="50" />
<br></br>
          Humidity:
        {`${weather.current.humidity}`}
        </p>
        <p className="card-text cardText">
<GiBottleVapors size="45" />
<br></br>
          Dew Point:
        {`${weather.current.dew_point}`}
        </p>
        <p>
          <p className="card-text cardText">
            <WiCloud size="50"/>
            <br></br>
            Clouds:
        {` ${findCloudiness(weather.current.clouds)}`}
          </p>

          <p className="card-text cardText">
          <MdVisibility size="35" />
          <br></br>
        Visibility:
        {`${weather.current.visibility}`}
        </p>

          {/* <p className="card-text">
            <GiPaperWindmill size="50"/>
            <br></br>
            Wind Speed:
        {`${weather.current.wind_speed}`}
          </p>
          <MdRotate90DegreesCcw size="50"/>
          <br></br> */}
          {/* <p className="card-text">
        Wind Degrees:
        </p> */}
        
        {/* <p>
        {`${weather.current.wind_deg}`}
          </p> */}
          {/* <p>
            <h2>{`${weather.current.uvi}`}</h2>
            <p className="card-text">UV Index</p>
            <TiWaves size="50" />
          </p> */}
        </p>
      </div>
    </div>
  )
}

export default Detailed;
<TiWaves size="50" />