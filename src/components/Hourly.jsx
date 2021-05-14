import * as weather from "../weather.json";
import {
  FaSun,
  FaMoon,
  FaCloudSun,
  FaCloudMoon,
  FaCloud,
  FaCloudMeatball,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaCloudMoonRain,
  FaBolt,
  FaSnowflake,
} from "react-icons/fa";
import { RiMistFill } from "react-icons/ri";

// Use our own icons
weather.current.weather = weather.current.weather[0];

const getCurrentIconElement = (objIcon) => {
  switch (objIcon) {
    case "01d":
      return <FaSun size="45" />;
    case "02d":
      return <FaCloudSun size="45" />;
    case "03d":
      return <FaCloud size="45" />;
    case "04d":
      return <FaCloudMeatball size="45" />;
    case "09d":
      return <FaCloudShowersHeavy size="45" />;
    case "10d":
      return <FaCloudSunRain size="45" />;
    case "11d":
      return <FaBolt size="45" />;
    case "13d":
      return <FaSnowflake size="45" />;
    case "50d":
      return <RiMistFill size="45" />;
    case "01n":
      return <FaMoon size="45" />;
    case "02n":
      return <FaCloudMoon size="45" />;
    case "03n":
      return <FaCloud size="45" />;
    case "04n":
      return <FaCloudMeatball size="45" />;
    case "09n":
      return <FaCloudShowersHeavy size="45" />;
    case "10n":
      return <FaCloudMoonRain size="45" />;
    case "11n":
      return <FaBolt size="45" />;
    case "13n":
      return <FaSnowflake size="45" />;
    case "50n":
      return <RiMistFill size="45" />;
    default:
      console.log("No weather icon found");
      break;
  }
};

const Hourly = () => {
  return (

    
    <div className="hourlyContainer">
      <h3 id="hourlyTitle">Hourly Temperature: </h3>
      <div className="card" id="hourlyCard">
        <div className="card-body" id="card-flex">
          <div className="card-items">
          <p id="hour">{ `${new Date(weather.hourly[0].dt).toLocaleTimeString("en-US")}   ` }</p>
          <FaSun size="45" id="hour" />
          <p id="hour">{ `${weather.hourly[0].weather.description}   ` }</p>
          <p id="hour">{ `${(weather.hourly[0].temp)} °F.` }</p>
          <p id="hour">{ `${(weather.hourly[0].feels_like)} °F.` }</p>
          <p id="hour">{ `${(weather.hourly[0].dew_point)} °F.` }</p>
          <p id="hour">{ `${(weather.hourly[0].pressure)} psi.` }</p>
          <p id="hour">{ `${(weather.hourly[0].humidity)}%` }</p>
          <p id="hour">{ `${(weather.hourly[0].uvi)}` }</p>
          <p id="hour">{ `${(weather.hourly[0].clouds)}%` }</p>
          <p id="hour">{ `${(weather.hourly[0].visibility)} ft.` }</p>
          <p id="hour">{ `${(weather.hourly[0].wind_speed)} mph` }</p>
          <p id="hour">{ `${(weather.hourly[0].wind_gust)} mph.` }</p>
          <p id="hour">{ `${(weather.hourly[0].wind_deg)} °` }</p>
          </div>
        </div>
      </div>
      
      <div className="card" id="hourlyCard">
        <div className="card-body">
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
};

export default Hourly;
