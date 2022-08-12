import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from 'types';

export interface TodosData {
  todos: Todo[];
}

const initialState: TodosData = {
  todos: [],
};

const AccountInfoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, actions: PayloadAction<Todo[]>) => {
      return { ...state, todos: actions.payload };
    },
  },
});

export const { setTodos } = AccountInfoSlice.actions;

export default AccountInfoSlice.reducer;
