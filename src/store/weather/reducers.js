import types from './types';

const INITIAL_STATE = {
  loading: false,
  weatherData: [],
  error: null,
};

const weatherReducer = (state = INITIAL_STATE, { type, weatherData }) => {
  switch (type) {
    case types.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.FETCH_WEATHER_SUCCES:
      return {
        ...state,
        loading: false,
        error: null,
        weatherData,
      };

    case types.FETCH_WEATHER_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default weatherReducer;
