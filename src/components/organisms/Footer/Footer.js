import React from 'react';
import styled from 'styled-components';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import githubIcon from 'assets/icons/github.svg';
import linkedinIcon from 'assets/icons/linkedin.svg';

const StyledWrapper = styled.footer`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 10vh;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 0 auto;
`;

const Footer = () => (
  <StyledWrapper>
    <InnerWrapper>
      <ButtonIcon as="a" href="https://github.com/hadrysm" icon={githubIcon} />
      <ButtonIcon as="a" href="https://www.linkedin.com/" icon={linkedinIcon} />
    </InnerWrapper>
  </StyledWrapper>
);

export default Footer;
