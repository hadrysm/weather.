import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ContentTemplate from 'templates/ContentTemplate';
import Form from 'components/molecules/Form/Form';
import Card from 'components/molecules/Card/Card';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import ErrorHandler from 'components/atoms/ErrorHandler/ErrorHandler';

import { routes } from 'routes';

import undrawImage from 'assets/image/undraw.svg';
import listIcon from 'assets/icons/list.svg';

const StyledImg = styled.img`
  flex: 1;
  width: 70%;
  max-width: 400px;
`;

const StyledForm = styled(Form)`
  margin: 0 auto;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 5vh;
  right: 5%;
  transform: translateY(50%);
  z-index: ${({ theme }) => theme.zIndex.level9};
`;

const HomePage = ({ weatherData, error }) => {
  let mainContent = <StyledImg src={undrawImage} alt="" />;

  if (weatherData) {
    mainContent = (
      <>
        <Card />
        <StyledButtonIcon as={Link} to={routes.weatherList} icon={listIcon} />
      </>
    );
  }

  return (
    <ContentTemplate>
      <StyledForm />
      {mainContent}
      {error && <ErrorHandler />}
    </ContentTemplate>
  );
};

const mapStateToProps = ({ weatherData, error }) => ({
  weatherData: weatherData.length,
  error,
});

HomePage.propTypes = {
  weatherData: PropTypes.number,
  error: PropTypes.bool,
};

HomePage.defaultProps = {
  weatherData: 0,
  error: false,
};

export default connect(mapStateToProps, null)(HomePage);
