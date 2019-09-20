import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import i18n from './i18n';
import store from './store';
import routes from './routes';


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <I18nextProvider i18n={i18n}>
          {routes}
        </I18nextProvider>
      </MuiThemeProvider>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
