import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CityListItem from './CityListItem/CityListItem';

const ListWrapper = styled.ul`
  width: 80%;
  padding: 1rem 2rem;
  margin: 0 auto auto;
  list-style: none;
  background: ${({ theme }) => theme.secondary};
  border-radius: 2rem;
  box-shadow: 0px 10px 8px 0px ${({ theme }) => theme.secondary};
`;

const CityList = ({ cityList }) => {
  const currentCityItems = cityList.map((city, index) => (
    <CityListItem key={city[index].id} cityData={city} />
  ));

  return <ListWrapper>{currentCityItems}</ListWrapper>;
};

CityList.propTypes = {
  cityList: PropTypes.arrayOf(PropTypes.array),
};

CityList.defaultProps = {
  cityList: [],
};
export default CityList;
