import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserPageTemplate from 'templates/UserPageTemplate';
import Form from 'components/molecules/Form/Form';
import Card from 'components/molecules/Card/Card';

import undrawImage from 'assets/image/undraw.svg';

const InnerWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Home = ({ weatherData }) => {
  let mainContent = (
    <InnerWrapper>
      <img src={undrawImage} alt="" />
    </InnerWrapper>
  );

  if (weatherData) {
    mainContent = <Card />;
  }

  return (
    <UserPageTemplate>
      <Form />
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
