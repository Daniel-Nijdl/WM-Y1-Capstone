import React from 'react';
import * as weather from "../weather.json";

const Detailed = () => {
  return(

  <div id ="detailed" class="card">
  <div class="card-body">

    <p class="card-text">
      Sunrise:
    { ` ${ weather.current.sunrise }` }</p>

  </div>
</div>
  )
}

export default Detailed;