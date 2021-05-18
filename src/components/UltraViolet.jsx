import * as weather from "../weather.json";
import { TiWaves } from 'react-icons/ti';

const UltraViolet = () => {
  return (
    <div className="card mainCDiv">
      <div className="card-body mainCard">
        <p className="card-text cardText">
          <h2>{ `${ weather.current.uvi }` }</h2>
          <p>UV Index</p>
          <TiWaves size="100" />
        </p>
      </div>
    </div>
  );
}

export default UltraViolet;
