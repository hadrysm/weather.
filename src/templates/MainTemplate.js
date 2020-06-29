import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyled from 'theme/GlobalStyled';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyled />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
