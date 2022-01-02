export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_WEATHER":
      console.log(action);
      return action.payload.weather;

    default:
      return state;
  }
};

export const fetchWeather = (cityName) => async (dispatch) => {
  const weatherResponse = await fetch(
    `${process.env.REACT_APP_WEATHER_API_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityName}`
  ).then((response) => response.json());

  dispatch({ type: "SET_WEATHER", payload: { weather: weatherResponse } });
};
