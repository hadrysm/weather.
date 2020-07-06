import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserPageTemplate from 'templates/UserPageTemplate';
import Form from 'components/molecules/Form/Form';
import Card from 'components/molecules/Card/Card';

import undrawImage from 'assets/image/undraw.svg';

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

const Home = ({ weatherData }) => {
  let mainContent = <StyledImg src={undrawImage} alt="" />;

  if (weatherData) {
    mainContent = <StyledCard />;
  }

  return (
    <UserPageTemplate>
      <StyledForm />
      {mainContent}
    </UserPageTemplate>
  );
};

const mapStateToProps = ({ weatherData }) => ({ weatherData: weatherData.length });

Home.propTypes = {
  weatherData: PropTypes.number,
};

Home.defaultProps = {
  weatherData: 0,
};

export default connect(mapStateToProps, null)(Home);
