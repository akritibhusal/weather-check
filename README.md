[![Netlify Status](https://api.netlify.com/api/v1/badges/fbedfdd7-bc93-412e-93cf-03bb040bda2b/deploy-status)](https://app.netlify.com/sites/weather-check-gh/deploys)

# Weather Check

An app that uses weatherapi to fetch weather information of a city 
 
[Live Demo](https://weather-check-gh.netlify.app/)

For React-only version of the working app, checkout the `react-only`  branch


## Tools used

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [WeatherAPI](https://www.weatherapi.com/)

### Instructions
- Clone
- Get your API keys from [WeatherAPI](https://www.weatherapi.com/)
- Setup .env file with following variables
 - REACT_APP_WEATHER_API_KEY=<YOUR_KEY>
 - REACT_APP_WEATHER_API_URL=<[API_HOSTNAME](https://api.weatherapi.com/v1/current.json)>
- `npm install`
- `npm run start` 
