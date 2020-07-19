import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContentTemplate from 'templates/ContentTemplate';
import CityList from 'components/molecules/CityList/CityList';

const WeatherListPage = ({ weatherCityList }) => (
  <ContentTemplate>
    {weatherCityList.length > 0 && <CityList cityList={weatherCityList} />}
  </ContentTemplate>
);

const mapStateToProps = ({ weatherCityList }) => ({ weatherCityList });

WeatherListPage.propTypes = {
  weatherCityList: PropTypes.arrayOf(PropTypes.array),
};

WeatherListPage.defaultProps = {
  weatherCityList: [],
};

export default connect(mapStateToProps)(WeatherListPage);
