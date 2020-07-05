import types from './types';

const fetchWeatherStart = () => ({ type: types.FETCH_WEATHER_START });
const fetchWeatherFail = () => ({ type: types.FETCH_WEATHER_FAIL });
const fetchWeatherSucces = weatherData => ({ type: types.FETCH_WEATHER_SUCCES, weatherData });

const getWeather = city => {
  return async dispatch => {
    dispatch(fetchWeatherStart());

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b8f549ae1c0e19d2820065b1dd7ea410&units=metric`,
      );
      const data = await response.json();

      const weatherData = [];

      for (let i = 0; i < data.list.length; i += 8) {
        weatherData.push(data.list[i]);
      }
      dispatch(fetchWeatherSucces(weatherData));
    } catch (err) {
      dispatch(fetchWeatherFail());
    }
  };
};

export default {
  fetchWeatherStart,
  fetchWeatherFail,
  fetchWeatherSucces,
  getWeather,
};
