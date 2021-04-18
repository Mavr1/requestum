import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { persistor, store } from './redux/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Route path="/">
          <App />
        </Route>
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);
