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
  padding: 1rem 0;
  text-transform: uppercase;
`;

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.font.size.xxl};
`;

const StyledHeaderWrapper = styled.div`
  flex: 1;
`;

const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 0 0 0 1rem;
`;

const ListItem = ({ weatherData: { day, description, temp, icon } }) => (
  <ItemWrapper>
    <StyledHeaderWrapper>
      <StyledHeading>{day}</StyledHeading>
      <Paragraph>{description.detailed}</Paragraph>
    </StyledHeaderWrapper>

    <StyledHeading>{temp}°C</StyledHeading>
    <StyledImg src={icon} alt={description.main} />
  </ItemWrapper>
);

ListItem.propTypes = {
  weatherData: PropTypes.shape({
    day: PropTypes.string,
    description: PropTypes.object,
    location: PropTypes.object,
    temp: PropTypes.number,
    icon: PropTypes.string,
  }).isRequired,
};

export default ListItem;
