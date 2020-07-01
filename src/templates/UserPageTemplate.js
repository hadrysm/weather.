import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import bgcImage1 from 'assets/image/bgc1.svg';
import bgcImage2 from 'assets/image/bgc2.svg';
import bgcImage3 from 'assets/image/bgc3.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background-image: url(${bgcImage1});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: right bottom;
  overflow: hidden;
`;

const StyledBgcImage1 = styled.img`
  position: absolute;
  width: 100%;
  height: 100;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const StyledBgcImage2 = styled(StyledBgcImage1)`
  top: -10%;
  left: 0;
`;

const UserPageTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledBgcImage1 src={bgcImage2} alt="" />
    <StyledBgcImage2 src={bgcImage3} alt="" />
    <Header />
    {children}
    <Footer>footer</Footer>
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
