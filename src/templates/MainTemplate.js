import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducer from 'store/weather';

import GlobalStyled from 'theme/GlobalStyled';
import { theme } from 'theme/mainTheme';

const store = createStore(weatherReducer, composeWithDevTools(applyMiddleware(thunk)));

const MainTemplate = ({ children }) => (
  <Provider store={store}>
    <Router>
      <GlobalStyled />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  </Provider>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
