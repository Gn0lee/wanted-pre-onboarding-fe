/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { TodoComponent } from 'components';

export default function TodoList() {
  const mockTodo = [
    {
      id: 1,
      todo: 'todo2',
      isCompleted: false,
      userId: 1,
    },
    {
      id: 2,
      todo: 'todo3asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsd',
      isCompleted: true,
      userId: 1,
    },
  ];
  return (
    <div css={todoWrapSt}>
      {mockTodo.map(todo => (
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
`;
