import types from './types';

const INITIAL_STATE = {
  loading: false,
  weatherData: [],
  error: null,
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_START:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_WEATHER_SUCCES:
      return {
        ...state,
        loading: false,
        weatherData: action.weatherData,
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
