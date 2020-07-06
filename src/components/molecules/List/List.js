import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListItem from './ListItem/ListItem';

const ListWrapper = styled.ul`
  width: 90%;
  margin: 0 auto;
  list-style: none;
`;

const List = ({ weatherData }) => {
  const currentDayItems = weatherData.map(({ id, ...item }) => (
    <ListItem key={id} weatherData={item} />
  ));

  return <ListWrapper>{currentDayItems}</ListWrapper>;
};

List.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
