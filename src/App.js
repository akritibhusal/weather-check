import { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const getWeather = async () => {
    const city = document.getElementById("city").value;

    const weatherResponse = await fetch(
      `${process.env.REACT_APP_WEATHER_API_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
    ).then((response) => response.json());
    setWeatherData(weatherResponse);
  };

  console.log(weatherData);

  return (
    <div className="App bg-grey vh-100">
      <div className="container pt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="header">
              <h1 className="app-title h4 py-2 mb-0">Weather Check</h1>
            </div>
            <div className="app-content card">
              <div className="input-group input-group-lg city-input">
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                  placeholder="Search City"
                />
                <button
                  className="btn btn-primary btn-block px-4"
                  onClick={getWeather}
                >
                  Search
                </button>
              </div>

              {Object.keys(weatherData).length === 0 ? null : (
                <div className="results">
                  <Weather weatherData={weatherData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
