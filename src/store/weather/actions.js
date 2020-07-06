import { getCurrentDay } from 'helpers';
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
      const { list, city: cityData } = data;
      const weatherData = [];

      for (let i = 0; i < list.length; i += 8) {
        const currentDay = {
          icon: `http://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png`,
          id: Math.random().toString(16).substring(2),
          location: {
            country: cityData.country,
            city,
          },
          temp: Math.round(list[i].main.temp),
          day: getCurrentDay(list[i].dt_txt),
          description: {
            main: list[i].weather[0].main,
            detailed: list[i].weather[0].description,
          },
        };

        weatherData.push(currentDay);
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
