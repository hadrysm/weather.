import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import HomePage from 'views/HomePage';
import WeatherListPage from 'views/WeatherListPage';

const Root = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/weather-list" component={WeatherListPage} />
      </Switch>
    </MainTemplate>
  );
};

export default Root;
