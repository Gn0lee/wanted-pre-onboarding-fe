import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import accountInfoSlice from './accountInfoSlice';
import todoSlice from './todoSlice';

const middlewares = [];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = configureStore({
  reducer: { accountInfo: accountInfoSlice, todoData: todoSlice },
  middleware: middlewares,
});

export default store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
