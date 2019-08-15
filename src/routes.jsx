import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContainer from './components/App';
import Book from './components/BooksList/Book';
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
      component={Book}
      exact
    />
    <Route
      component={NotFound}
    />
  </Switch>
);
export default routes;
