import { configureStore } from '@reduxjs/toolkit';

import accountInfoSlice from './accountInfoSlice';
import todoSlice from './todoSlice';

const store = configureStore({
  reducer: { accountInfo: accountInfoSlice, todoData: todoSlice },
});

export default store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
