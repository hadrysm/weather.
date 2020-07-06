import React from 'react';
import styled from 'styled-components';

import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 0;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: ${({ theme }) => theme.primary};
  text-align: center;
  box-shadow: 0px 10px 10px 0px ${({ theme }) => theme.secondary};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.xl};
`;

export const Error = () => (
  <StyledWrapper>
    <StyledParagraph>Error</StyledParagraph>
  </StyledWrapper>
);

export default Error;
