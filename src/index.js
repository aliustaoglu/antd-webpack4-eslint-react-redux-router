import React from 'react';
import ReactDOM from 'react-dom';
import './themes/ant.less';
import Routes from 'components/Routes/IndexRoute';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

if (ENVIRONMENT === 'development') {
  const RedBox = require('redbox-react').default;
  try {
    ReactDOM.render(
      <Provider store={store}>
        <Routes />
      </Provider>,
      document.getElementById('app')
    );
  } catch (e) {
    ReactDOM.render(<RedBox error={e} />, document.getElementById('app'));
  }
} else {
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById('app')
  );
}

module.hot.accept();
