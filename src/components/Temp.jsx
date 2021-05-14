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
  FaSnowflake
} from 'react-icons/fa';
import { RiMistFill } from 'react-icons/ri';

// Use our own icons
weather.current.weather = weather.current.weather[0];

const getCurrentIconElement = (objIcon) => {
  switch (objIcon) {
    case '01d':
      return <FaSun size="45" />
    case '02d':
      return <FaCloudSun size="45" />
    case '03d':
      return <FaCloud size="45" />
    case '04d':
      return <FaCloudMeatball size="45" />
    case '09d':
      return <FaCloudShowersHeavy size="45" />
    case '10d':
      return <FaCloudSunRain size="45" />
    case '11d':
      return <FaBolt size="45" />
    case '13d':
      return <FaSnowflake size="45" />
    case '50d':
      return <RiMistFill size="45" />
    case '01n':
      return <FaMoon size="45" />
    case '02n':
      return <FaCloudMoon size="45" />
    case '03n':
      return <FaCloud size="45" />
    case '04n':
      return <FaCloudMeatball size="45" />
    case '09n':
      return <FaCloudShowersHeavy size="45" />
    case '10n':
      return <FaCloudMoonRain size="45" />
    case '11n':
      return <FaBolt size="45" />
    case '13n':
      return <FaSnowflake size="45" />
    case '50n':
      return <RiMistFill size="45" />
    default:
      console.log('No weather icon found');
      break;
  }
}

const weatherData = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          <h2>{ `${ weather.current.temp }` }&deg; F</h2>
          <p>{ `Feels like ${ weather.current.feels_like }` }&deg; F</p>
          {/* <p>{ `${ weather.current.weather.main }` }</p>
          { getCurrentIconElement(weather.current.weather.main) } */}
        </p>
      </div>
    </div>

  );
};

export default weatherData;
