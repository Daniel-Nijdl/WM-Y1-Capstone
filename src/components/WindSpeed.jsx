import * as weather from '../weather.json';
import { GiPaperWindmill } from 'react-icons/gi';

const WindSpeed = () => {
  return (
    <div className="" id="windCard">
      <div className="">
        <p className="card-text cardText">
          <h2 className="resText">{ `${weather.current.wind_speed}` }</h2>
          <p className="resText">MPH</p>
          <GiPaperWindmill className="resImg" />
        </p>
      </div>
    </div>

  );
}

export default WindSpeed;
