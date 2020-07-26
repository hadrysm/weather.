import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import WeatherListItem from './WeatherListItem/WeatherListItem';

const ListWrapper = styled.ul`
  width: 90%;
  margin: 0 auto;
  list-style: none;
`;

const WeatherList = ({ weatherData }) => {
  const currentDayItems = weatherData.map(({ id, ...item }) => (
    <WeatherListItem key={id} weatherData={item} />
  ));

  return <ListWrapper>{currentDayItems}</ListWrapper>;
};

WeatherList.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default WeatherList;
