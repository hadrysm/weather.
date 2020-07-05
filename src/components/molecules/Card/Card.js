import React from 'react';
import styled, { css } from 'styled-components';

import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import List from 'components/molecules/List/List';

import sunnyIcon from 'assets/icons/sunny.svg';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 35rem;
  margin: 0 auto;
  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.dark200};
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 1.4rem 2rem;
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
  font-size: ${({ theme }) => theme.font.size.xxxl};
`;

const StyledParagaph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.m};
`;

const StyledImg = styled.img`
  width: 6rem;
  height: 6rem;
`;

const InfoWrapper = styled.div`
  margin: 0 1rem;
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper darker>
      <StyledHeading as="h2">23°C</StyledHeading>
      <InfoWrapper>
        <StyledParagaph>Clear</StyledParagaph>
        <StyledParagaph>Opole, Poland</StyledParagaph>
      </InfoWrapper>
      <StyledImg src={sunnyIcon} alt="sunny" />
    </InnerWrapper>
    <InnerWrapper>
      <List />
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
