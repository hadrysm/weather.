import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserPageTemplate from 'templates/UserPageTemplate';
import CityList from 'components/molecules/CityList/CityList';

const WeatherListPage = ({ weatherCityList }) => (
  <UserPageTemplate>
    {weatherCityList.length > 0 && <CityList cityList={weatherCityList} />}
  </UserPageTemplate>
);

const mapStateToProps = ({ weatherCityList }) => ({ weatherCityList });

WeatherListPage.propTypes = {
  weatherCityList: PropTypes.arrayOf(PropTypes.array),
};

WeatherListPage.defaultProps = {
  weatherCityList: [],
};

export default connect(mapStateToProps)(WeatherListPage);
