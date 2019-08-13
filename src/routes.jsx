import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Item from './components/ItemsList/Item';
import NotFound from './components/NotFound';

const routes = (
  <Switch>
    <Route
      path="/"
      component={App}
      exact
    />
    <Route
      path="/items/:id"
      component={Item}
      exact
    />
    <Route
      component={NotFound}
    />
  </Switch>
);
export default routes;
