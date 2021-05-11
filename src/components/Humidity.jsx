import * as weather from "../weather.json";
import { WiHumidity } from 'react-icons/wi';

const Humidity = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          <p>{ ` ${ weather.lat }, ${ weather.lon } ` }</p>
          <p>{ new Date(weather.current.dt).toLocaleTimeString("en-US") }</p>
          <h2>{ `${ weather.current.humidity } %` }</h2>
          <p>Humidity</p>
          <WiHumidity size="100" />
        </p>
      </div>
    </div>
  );
}

export default Humidity;
