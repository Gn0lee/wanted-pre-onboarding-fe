import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';

import store from './redux/store';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router />
      </Provider>
    </React.Fragment>
  );
}

export default App;
