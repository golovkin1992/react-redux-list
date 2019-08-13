import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import routes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      {routes}
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
