import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0.5rem 0;
  text-transform: uppercase;

  @media ${({ theme }) => theme.mq.tablet} {
    padding: 1rem 0;
  }
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};
`;

const StyledHeaderWrapper = styled.div`
  flex: 1;
`;

const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 0 0 1rem;
`;

const WeatherListItem = ({ weatherData: { day, description, temp, icon } }) => (
  <ItemWrapper>
    <StyledHeaderWrapper>
      <StyledHeading as="h3">{day}</StyledHeading>
      <Paragraph>{description.detailed}</Paragraph>
    </StyledHeaderWrapper>
    <StyledHeading as="h3">{temp}°C</StyledHeading>
    <StyledImg src={icon} alt={description.main} />
  </ItemWrapper>
);

WeatherListItem.propTypes = {
  weatherData: PropTypes.shape({
    day: PropTypes.string,
    description: PropTypes.objectOf(PropTypes.string),
    temp: PropTypes.number,
    icon: PropTypes.string,
  }).isRequired,
};

export default WeatherListItem;
