import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import GlobalStyles from 'styles/GlobalStyles';

import store from './redux/store';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Provider store={store}>
        <Router />
      </Provider>
    </React.Fragment>
  );
}

export default App;
