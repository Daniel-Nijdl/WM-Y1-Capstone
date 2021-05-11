import * as weather from "../weather.json";
weather.current.weather = weather.current.weather[0];

const weatherData = () => {
  return (
    <div class="card">
      <div class="card-body">
        <p class="card-text">
          <p>{` ${weather.lat}, ${weather.lon} `}</p>
          <p>{new Date(weather.current.dt).toLocaleTimeString("en-US")}</p>
          <h2>{ `${ weather.current.temp }° F` }</h2>
          <p>{` Feels like ${weather.current.feels_like} `}</p>
          <p>{ `${weather.current.weather.main}` }</p>
          <img src={ `http://openweathermap.org/img/wn/${ weather.current.weather.icon }@2x.png` } alt="Weather Icon" />
        </p>
      </div>
    </div>

  );
};

export default weatherData;
