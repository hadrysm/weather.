import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';
import Error from 'components/molecules/Error/Error';

import Spinner from 'components/atoms/Spinner/Spinner';

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

const StyledSpinner = styled(Spinner)`
  position: fixed;
  bottom: 3%;
  right: 5%;
`;

const UserPageTemplate = ({ children, loading, error }) => (
  <StyledWrapper>
    <Header />
    {children}
    <Footer />
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
