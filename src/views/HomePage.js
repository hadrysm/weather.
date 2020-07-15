import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UserPageTemplate from 'templates/UserPageTemplate';
import Form from 'components/molecules/Form/Form';
import Card from 'components/molecules/Card/Card';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import ErrorHandler from 'components/atoms/ErrorHandler/ErrorHandler';

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
  bottom: 5vh;
  right: 1rem;
  transform: translateY(50%);
  z-index: ${({ theme }) => theme.zIndex.level9};
`;

const HomePage = ({ weatherData, error }) => {
  let mainContent = <StyledImg src={undrawImage} alt="" />;

  if (weatherData) {
    mainContent = (
      <>
        <StyledCard />
        <StyledButtonIcon as={Link} to="/weather-list" icon={listIcon} />
      </>
    );
  }

  return (
    <UserPageTemplate>
      <StyledForm />
      {mainContent}
      {error && <ErrorHandler />}
    </UserPageTemplate>
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
