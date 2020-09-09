import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from 'store/weather/actions';
import { routes } from 'routes';

import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const InnerWrapper = styled.li`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};
  margin: 0 2rem;
  text-transform: capitalize;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.m};
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  margin: 0;
  width: 6rem;
  height: 6rem;
`;

const CityListItem = ({ cityData, setCurrentCity }) => {
  let cityItem = null;

  const handleClick = () => {
    setCurrentCity(cityData);
  };

  for (let i = 0; i < cityData.length; i += 5) {
    cityItem = (
      <InnerWrapper id={cityData[i].id} onClick={handleClick}>
        <StyledLink to={routes.home}>
          <StyledInfo>
            <StyledHeading as="h3">{cityData[i].location.city}</StyledHeading>
            <StyledParagraph>{cityData[i].temp}°C</StyledParagraph>
          </StyledInfo>
          <StyledImg src={cityData[i].icon} alt={cityData[i].description.main} />
        </StyledLink>
      </InnerWrapper>
    );
  }

  return cityItem;
};

CityListItem.propTypes = {
  cityData: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCurrentCity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setCurrentCity: currentCityData => dispatch(actions.setCurrentCity(currentCityData)),
});

export default connect(null, mapDispatchToProps)(CityListItem);
