import * as weather from "../weather.json";

const Humidity = () => {
  return (
    <div class="card">
      <div class="card-body">
        <p class="card-text">
          <p>{ ` ${ weather.lat }, ${ weather.lon } ` }</p>
          <p>{ new Date(weather.current.dt).toLocaleTimeString("en-US") }</p>
          <h2>{ `${ weather.current.humidity } %` }</h2>
          <p>Humidity</p>
        </p>
      </div>
    </div>
  );
}

export default Humidity;
