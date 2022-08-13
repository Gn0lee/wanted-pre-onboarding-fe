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
    resetTodos: () => {
      return initialState;
    },
    createTodo: (state, actions: PayloadAction<Todo>) => {
      return { todos: state.todos.concat(actions.payload) };
    },
  },
});

export const { setTodos, createTodo, resetTodos } = AccountInfoSlice.actions;

export default AccountInfoSlice.reducer;
