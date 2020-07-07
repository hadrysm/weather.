import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import WeatherList from 'components/molecules/WeatherList/WeatherList';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 30rem;
  margin: 0 auto;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.dark200};
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.dark200};

  ${({ darker }) =>
    darker &&
    css`
      background-color: ${({ theme }) => theme.dark100};
      border-bottom-left-radius: 2.5rem;
      border-bottom-right-radius: 2.5rem;
    `};
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
`;

const StyledParagaph = styled(Paragraph)`
  margin: 0 1rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledImg = styled.img`
  margin: 0;
  width: 6rem;
  height: 6rem;
`;

const InfoWrapper = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const Card = ({ weatherData }) => {
  const [currentDayWeather, ...restWeather] = weatherData;

  const { temp, location, description, icon } = currentDayWeather;

  return (
    <StyledWrapper>
      <InnerWrapper darker>
        <StyledHeading as="h2">{temp}°C</StyledHeading>
        <InfoWrapper>
          <StyledParagaph>{description.main}</StyledParagaph>
          <StyledParagaph>
            {location.city}, {location.country}
          </StyledParagaph>
        </InfoWrapper>
        <StyledImg src={icon} alt={description.main} />
      </InnerWrapper>
      <InnerWrapper>
        <WeatherList weatherData={restWeather} />
      </InnerWrapper>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ weatherData }) => ({
  weatherData,
});

Card.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Card);
