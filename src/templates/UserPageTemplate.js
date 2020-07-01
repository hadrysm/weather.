import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header/Header';

const UserPageTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <footer>footer</footer>
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
