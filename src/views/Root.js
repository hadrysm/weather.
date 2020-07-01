import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import WeatherList from 'views/WeatherList';

const Root = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/weather-list" component={WeatherList} />
      </Switch>
    </MainTemplate>
  );
};

export default Root;
