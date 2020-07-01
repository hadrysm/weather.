import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyled from 'theme/GlobalStyled';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => (
  <Router>
    <GlobalStyled />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Router>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
