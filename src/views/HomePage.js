import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UserPageTemplate from 'templates/UserPageTemplate';
import Form from 'components/molecules/Form/Form';
import Card from 'components/molecules/Card/Card';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import undrawImage from 'assets/image/undraw.svg';
import listIcon from 'assets/icons/list.svg';

const StyledImg = styled.img`
  flex: 1;
  height: 100%;
`;

const StyledForm = styled(Form)`
  margin: auto;
`;

const StyledCard = styled(Card)`
  flex: 1;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 15%;
  right: 10px;
`;

const HomePage = ({ weatherData, weatherCityList }) => {
  let mainContent = <StyledImg src={undrawImage} alt="" />;

  if (weatherData) {
    mainContent = <StyledCard />;

    if (weatherCityList > 1) {
      mainContent = (
        <>
          <StyledCard />
          <StyledButtonIcon as={Link} to="/weather-list" icon={listIcon} />
        </>
      );
    }
  }

  return (
    <UserPageTemplate>
      <StyledForm />
      {mainContent}
    </UserPageTemplate>
  );
};

const mapStateToProps = ({ weatherData, weatherCityList }) => ({
  weatherData: weatherData.length,
  weatherCityList: weatherCityList.length,
});

HomePage.propTypes = {
  weatherData: PropTypes.number,
  weatherCityList: PropTypes.number,
};

HomePage.defaultProps = {
  weatherData: 0,
  weatherCityList: 0,
};

export default connect(mapStateToProps, null)(HomePage);
