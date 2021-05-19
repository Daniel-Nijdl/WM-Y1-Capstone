import * as weather from "../weather.json";
import { WiHumidity } from 'react-icons/wi';

const Humidity = () => {
  return (
    <div className="">
      <div className="">
        <p className="card-text cardText">
          <h2>{ `${ weather.current.humidity } %` }</h2>
          <p>Humidity</p>
          <WiHumidity size="100" />
        </p>
      </div>
    </div>
  );
}

export default Humidity;
