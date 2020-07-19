import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: calc(10vh + 2rem);
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
`;

const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    <Header />
    {children}
    <Footer />
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
