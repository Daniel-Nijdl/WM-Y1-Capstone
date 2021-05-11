import * as weather from "../weather.json";
import { TiWaves } from 'react-icons/ti';

const UltraViolet = () => {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          <h2>{ `${ weather.current.uvi }` }</h2>
          <p>UV Index</p>
          <TiWaves size="100" />
        </p>
      </div>
    </div>
  );
}

export default UltraViolet;
