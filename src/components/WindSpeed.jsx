import * as weather from '../weather.json';
import { GiPaperWindmill } from 'react-icons/gi';

const WindSpeed = () => {
  return (
    <div className="card mainCDiv" id="windCard">
      <div className="card-body mainCard wind">
        <p className="card-text cardText">
          <h2>{ `${weather.current.wind_speed}` }</h2>
          <p>MPH</p>
          <br />
          <GiPaperWindmill size="65" />
        </p>
      </div>
    </div>

  );
}

export default WindSpeed;
