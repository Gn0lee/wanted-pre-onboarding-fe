import logger from 'redux-logger';

import { configureStore } from '@reduxjs/toolkit';

const middlewares = [];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = configureStore({
  reducer: {},
  middleware: middlewares,
});

export default store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
