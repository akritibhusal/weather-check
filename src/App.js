import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Weather from "./components/Weather";
import { fetchWeather } from "./reducers/weatherReducer";

function App() {
  const [cityName, setCityName] = useState("");
  const weatherData = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  const getWeather = () => {
    dispatch(fetchWeather(cityName));
  };

  // TODO use useRef
  const focusSearch = () => {
    document.getElementById("city").focus();
    document.getElementById("city").select();
  };

  const onInputKeyDown = (e) => {
    if (e.key === "Enter" && e.keyCode === 13) {
      getWeather();
    }
  };

  const onInputChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="App bg-grey vh-100">
      <div className="container pt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="header">
              <h1 className="app-title h4 pt-5 pb-3 mb-0">Weather Check</h1>
            </div>
            <div className="app-content card">
              <div className="input-group input-group-lg city-input">
                <input
                  autoFocus
                  key="city01"
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                  placeholder="Search City"
                  onKeyDown={onInputKeyDown}
                  onChange={onInputChange}
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
                  <Weather
                    weatherData={weatherData}
                    focusSearch={focusSearch}
                  />
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
