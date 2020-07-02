import types from './types';

const fetchWeatherStart = () => ({ type: types.FETCH_WEATHER_START });
const fetchWeatherFail = () => ({ type: types.FETCH_WEATHER_FAIL });
const fetchWeatherSucces = weatherData => ({ type: types.FETCH_WEATHER_SUCCES, weatherData });

export default {
  fetchWeatherStart,
  fetchWeatherFail,
  fetchWeatherSucces,
};
