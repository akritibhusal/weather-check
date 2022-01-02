import React from "react";

function Weather({ weatherData }) {
  return (
    <div className="py-4">
      <div className="header">
        <h2 className="h4">
          Weather in <a href="#city">{weatherData?.location?.name}</a>
        </h2>
        <div className="text-muted">
          {weatherData?.location?.region}, {weatherData?.location?.country}
        </div>
        <div className="text-muted">{weatherData?.location?.localtime}</div>
      </div>
      <div className="weather-details py-2 px-4 my-4 d-inline-block">
        <div className="current-condition">
          {weatherData?.current?.condition.text}
        </div>
        <img
          src={weatherData?.current?.condition?.icon}
          alt={weatherData?.current?.condition?.text}
        />
        <div className="temperature-celcius h2">
          {weatherData?.current?.temp_c}&deg;C
        </div>
        <div className="feelslike">
          Feels like {weatherData?.current?.feelslike_c}&deg;C
        </div>
      </div>
    </div>
  );
}

export default Weather;
