import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import Error from 'components/molecules/Error/Error';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 15vh;
  overflow: hidden;
`;

const UserPageTemplate = ({ children, error }) => (
  <StyledWrapper>
    <Header />
    {children}
    <Footer />
    {error && <Error />}
  </StyledWrapper>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  error: PropTypes.bool,
};

UserPageTemplate.defaultProps = {
  error: false,
};

const mapStateToProps = ({ error }) => ({ error });

export default connect(mapStateToProps, null)(UserPageTemplate);
