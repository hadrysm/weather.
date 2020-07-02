import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from 'components/atoms/Logo/Logo';
import Heading from 'components/atoms/Heading/Heading';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  padding: 2rem;
`;

const Header = () => (
  <StyledHeader>
    <Heading>weather.</Heading>
    <Logo as={Link} to="/" />
  </StyledHeader>
);

export default Header;
