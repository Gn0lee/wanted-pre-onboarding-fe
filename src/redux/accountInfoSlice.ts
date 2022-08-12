import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AccountInfoData {
  isLogin: boolean;
  userId: number;
}

const initialState: AccountInfoData = {
  isLogin: false,
  userId: -1,
};

const AccountInfoSlice = createSlice({
  name: 'accountInfo',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: state => {
      return { ...state, isLogin: true };
    },
    setUserId: (state, actions: PayloadAction<number>) => {
      return { ...state, userId: actions.payload };
    },
  },
});

export const { login, logout, setUserId } = AccountInfoSlice.actions;

export default AccountInfoSlice.reducer;
