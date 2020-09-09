import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import HomePage from 'views/HomePage';
import WeatherListPage from 'views/WeatherListPage';

import { routes } from 'routes';

const Root = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.weatherList} component={WeatherListPage} />
      </Switch>
    </MainTemplate>
  );
};

export default Root;
