import * as weather from "../weather.json";

const UltraViolet = () => {
  return (
    <div class="card">
      <div class="card-body">
        <p class="card-text">
          <p>{ ` ${ weather.lat }, ${ weather.lon } ` }</p>
          <p>{ new Date(weather.current.dt).toLocaleTimeString("en-US") }</p>
          <h2>{ `${ weather.current.uvi }` }</h2>
          <h2>{ weather.current.weather.icon }</h2>
          <p>UV Index</p>
        </p>
      </div>
    </div>
  );
}

export default UltraViolet;
