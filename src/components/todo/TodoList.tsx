/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReduxState } from 'redux/store';
import { setTodos } from 'redux/todoSlice';
import { getTodosApi } from 'api';
import { GetTodosApiError } from 'types';
import { isAxiosError } from 'utils';

import { TodoComponent } from 'components';

/**
 * description: 할일 컨테이너 컴포넌트
 * todo: userId dispatch
 */
export default function TodoList() {
  const { todos } = useSelector((state: ReduxState) => state.todoData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await getTodosApi();
        dispatch(setTodos(res));
      } catch (err) {
        if (isAxiosError<GetTodosApiError>(err) && err.response) {
          alert(err.response.data.message);
        }

        if (err instanceof Error && err.message === 'no token') {
          navigate('/');
        }
      }
    })();
  }, []);

  return (
    <div css={todoWrapSt}>
      {todos.map(todo => (
        <TodoComponent {...todo} />
      ))}
    </div>
  );
}

const todoWrapSt = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  height: 100%;

  overflow-y: auto;
`;
