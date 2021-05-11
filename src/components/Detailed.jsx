import React from 'react';
import * as weather from "../weather.json";

const Detailed = () => {
  return (

    <div id="detailed" class="card">
      <div class="card-body">

        <p class="card-text">
          Sunrise:
          {new Date(weather.current.sunrise).toLocaleTimeString("en-US")}
        </p>
        <p>
          Sunset:
        {new Date(weather.current.sunset).toLocaleTimeString("en-US")}
        </p>
      </div>
    </div>
  )
}

export default Detailed;