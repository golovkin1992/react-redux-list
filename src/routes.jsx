import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContainer from './components/App';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';

const routes = (
  <Switch>
    <Route
      path="/"
      component={AppContainer}
      exact
    />
    <Route
      path="/books/:id"
      component={BookDetails}
      exact
    />
    <Route
      component={NotFound}
    />
  </Switch>
);
export default routes;
