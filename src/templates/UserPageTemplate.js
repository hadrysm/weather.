import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import Error from 'components/molecules/Error/Error';

import bgcImage1 from 'assets/image/bgc1.svg';
import bgcImage2 from 'assets/image/bgc2.svg';
import bgcImage3 from 'assets/image/bgc3.svg';
import Spinner from 'components/atoms/Spinner/Spinner';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 15vh;
  background-image: url(${bgcImage1});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: right bottom;
  overflow: hidden;
`;

const StyledBgcImage1 = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const StyledBgcImage2 = styled(StyledBgcImage1)`
  top: -10%;
  left: 0;
`;

const StyledSpinner = styled(Spinner)`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

const UserPageTemplate = ({ children, loading, error }) => (
  <StyledWrapper>
    <Header />
    {children}
    <Footer />
    <StyledBgcImage1 src={bgcImage2} alt="" />
    <StyledBgcImage2 src={bgcImage3} alt="" />
    {loading && <StyledSpinner />}
    {error && <Error />}
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

UserPageTemplate.defaultProps = {
  loading: false,
  error: false,
};

const mapStateToProps = ({ loading, error }) => ({ loading, error });

export default connect(mapStateToProps, null)(UserPageTemplate);
