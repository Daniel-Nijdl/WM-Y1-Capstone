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
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

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
  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>12am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[0].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[0].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[0].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[0].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[0].humidity)}%` }</p>
      <p>{ `${(weather.hourly[0].uvi)}` }</p>
      <p>{ `${(weather.hourly[0].clouds)}%` }</p>
      <p>{ `${(weather.hourly[0].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[0].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[0].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[0].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>1am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[1].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[1].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[1].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[1].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[1].humidity)}%` }</p>
      <p>{ `${(weather.hourly[1].uvi)}` }</p>
      <p>{ `${(weather.hourly[1].clouds)}%` }</p>
      <p>{ `${(weather.hourly[1].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[1].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[1].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[1].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>2am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[2].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[2].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[2].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[2].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[2].humidity)}%` }</p>
      <p>{ `${(weather.hourly[2].uvi)}` }</p>
      <p>{ `${(weather.hourly[2].clouds)}%` }</p>
      <p>{ `${(weather.hourly[2].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[2].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[2].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[2].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>3am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[3].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[3].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[3].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[3].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[3].humidity)}%` }</p>
      <p>{ `${(weather.hourly[3].uvi)}` }</p>
      <p>{ `${(weather.hourly[3].clouds)}%` }</p>
      <p>{ `${(weather.hourly[3].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[3].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[3].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[3].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>4am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[4].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[4].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[4].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[4].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[4].humidity)}%` }</p>
      <p>{ `${(weather.hourly[4].uvi)}` }</p>
      <p>{ `${(weather.hourly[4].clouds)}%` }</p>
      <p>{ `${(weather.hourly[4].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[4].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[4].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[4].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>5am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[5].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[5].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[5].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[5].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[5].humidity)}%` }</p>
      <p>{ `${(weather.hourly[5].uvi)}` }</p>
      <p>{ `${(weather.hourly[5].clouds)}%` }</p>
      <p>{ `${(weather.hourly[5].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[5].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[5].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[5].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>6am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[6].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[6].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[6].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[6].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[6].humidity)}%` }</p>
      <p>{ `${(weather.hourly[6].uvi)}` }</p>
      <p>{ `${(weather.hourly[6].clouds)}%` }</p>
      <p>{ `${(weather.hourly[6].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[6].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[6].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[6].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>7am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[7].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[7].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[7].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[7].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[7].humidity)}%` }</p>
      <p>{ `${(weather.hourly[7].uvi)}` }</p>
      <p>{ `${(weather.hourly[7].clouds)}%` }</p>
      <p>{ `${(weather.hourly[7].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[7].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[7].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[7].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>8am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[8].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[8].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[8].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[8].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[8].humidity)}%` }</p>
      <p>{ `${(weather.hourly[8].uvi)}` }</p>
      <p>{ `${(weather.hourly[8].clouds)}%` }</p>
      <p>{ `${(weather.hourly[8].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[8].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[8].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[8].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>9am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[9].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[9].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[9].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[9].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[9].humidity)}%` }</p>
      <p>{ `${(weather.hourly[9].uvi)}` }</p>
      <p>{ `${(weather.hourly[9].clouds)}%` }</p>
      <p>{ `${(weather.hourly[9].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[9].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[9].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[9].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>10am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[10].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[10].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[10].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[10].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[10].humidity)}%` }</p>
      <p>{ `${(weather.hourly[10].uvi)}` }</p>
      <p>{ `${(weather.hourly[10].clouds)}%` }</p>
      <p>{ `${(weather.hourly[10].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[10].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[10].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[10].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>11am</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[11].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[11].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[11].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[11].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[11].humidity)}%` }</p>
      <p>{ `${(weather.hourly[11].uvi)}` }</p>
      <p>{ `${(weather.hourly[11].clouds)}%` }</p>
      <p>{ `${(weather.hourly[11].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[11].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[11].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[11].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>12pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[12].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[12].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[12].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[12].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[12].humidity)}%` }</p>
      <p>{ `${(weather.hourly[12].uvi)}` }</p>
      <p>{ `${(weather.hourly[12].clouds)}%` }</p>
      <p>{ `${(weather.hourly[12].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[12].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[12].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[12].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>1pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[13].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[13].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[13].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[13].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[13].humidity)}%` }</p>
      <p>{ `${(weather.hourly[13].uvi)}` }</p>
      <p>{ `${(weather.hourly[13].clouds)}%` }</p>
      <p>{ `${(weather.hourly[13].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[13].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[13].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[13].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>2pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[14].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[14].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[14].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[14].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[14].humidity)}%` }</p>
      <p>{ `${(weather.hourly[14].uvi)}` }</p>
      <p>{ `${(weather.hourly[14].clouds)}%` }</p>
      <p>{ `${(weather.hourly[14].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[14].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[14].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[14].wind_deg)} °` }</p>
       </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>3pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[15].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[15].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[15].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[15].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[15].humidity)}%` }</p>
      <p>{ `${(weather.hourly[15].uvi)}` }</p>
      <p>{ `${(weather.hourly[15].clouds)}%` }</p>
      <p>{ `${(weather.hourly[15].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[15].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[15].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[15].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>4pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[0].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[0].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[0].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[0].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[0].humidity)}%` }</p>
      <p>{ `${(weather.hourly[0].uvi)}` }</p>
      <p>{ `${(weather.hourly[0].clouds)}%` }</p>
      <p>{ `${(weather.hourly[0].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[0].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[0].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[0].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>5pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[0].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[0].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[0].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[0].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[0].humidity)}%` }</p>
      <p>{ `${(weather.hourly[0].uvi)}` }</p>
      <p>{ `${(weather.hourly[0].clouds)}%` }</p>
      <p>{ `${(weather.hourly[0].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[0].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[0].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[0].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>6pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[0].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[0].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[0].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[0].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[0].humidity)}%` }</p>
      <p>{ `${(weather.hourly[0].uvi)}` }</p>
      <p>{ `${(weather.hourly[0].clouds)}%` }</p>
      <p>{ `${(weather.hourly[0].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[0].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[0].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[0].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>7pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[0].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[0].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[0].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[0].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[0].humidity)}%` }</p>
      <p>{ `${(weather.hourly[0].uvi)}` }</p>
      <p>{ `${(weather.hourly[0].clouds)}%` }</p>
      <p>{ `${(weather.hourly[0].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[0].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[0].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[0].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>8pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[20].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[20].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[20].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[20].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[20].humidity)}%` }</p>
      <p>{ `${(weather.hourly[20].uvi)}` }</p>
      <p>{ `${(weather.hourly[20].clouds)}%` }</p>
      <p>{ `${(weather.hourly[20].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[20].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[20].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[20].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>9pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[21].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[21].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[21].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[21].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[21].humidity)}%` }</p>
      <p>{ `${(weather.hourly[21].uvi)}` }</p>
      <p>{ `${(weather.hourly[21].clouds)}%` }</p>
      <p>{ `${(weather.hourly[21].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[21].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[21].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[21].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>10pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[22].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[22].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[22].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[22].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[22].humidity)}%` }</p>
      <p>{ `${(weather.hourly[22].uvi)}` }</p>
      <p>{ `${(weather.hourly[22].clouds)}%` }</p>
      <p>{ `${(weather.hourly[22].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[22].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[22].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[22].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className="hourlyDesc">
    <Card.Body className="hourlyBack">
      <Card.Title></Card.Title>
      <Card.Text className="hourlyText">
      <p>11pm</p>
      <p><FaSun size="45" id="hour" /></p>
      <p>{ `${(weather.hourly[23].temp)} °F.` }</p>
      <p>{ `${(weather.hourly[23].feels_like)} °F.` }</p>
      <p>{ `${(weather.hourly[23].dew_point)} °F.` }</p>
      <p>{ `${(weather.hourly[23].pressure)} psi.` }</p>
      <p>{ `${(weather.hourly[23].humidity)}%` }</p>
      <p>{ `${(weather.hourly[23].uvi)}` }</p>
      <p>{ `${(weather.hourly[23].clouds)}%` }</p>
      <p>{ `${(weather.hourly[23].visibility)} ft.` }</p>
      <p>{ `${(weather.hourly[23].wind_speed)} mph` }</p>
      <p>{ `${(weather.hourly[23].wind_gust)} mph.` }</p>
      <p>{ `${(weather.hourly[23].wind_deg)} °` }</p>
      </Card.Text>
    </Card.Body>
  </Card>





    </div>
  );
};

export default Hourly;
