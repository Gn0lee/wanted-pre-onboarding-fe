/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Button, TextInput } from 'components';

export default function TodoPage() {
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
    <div css={containerSt}>
      <h1>Todo</h1>
      <div css={createTodoWrapSt}>
        <TextInput valueType="text" />
        <Button
          width="6rem"
          backgroundColor="#122E99"
          height="3rem"
          color="#FAFAFA"
        >
          추가
        </Button>
      </div>
      <div css={todoWrapSt}>
        {mockTodo.map(todo => (
          <div key={todo.id} css={todoContainerSt}>
            <div css={iconWrapSt}>
              {todo.isCompleted && <AiOutlineCheck color="#24A147" size={25} />}
            </div>
            <div css={descrpSt(todo.isCompleted)}>{todo.todo}</div>
            <div css={editDeleteWrapSt}>
              <AiOutlineEdit size={25} />
              <AiOutlineDelete size={25} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerSt = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 0rem;

  width: 100%;
  height: 100%;

  & > h1 {
    margin-bottom: 1rem;
  }
`;

const createTodoWrapSt = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;

  margin: 2rem 0rem;
`;

const todoWrapSt = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

const todoContainerSt = css`
  display: flex;

  width: 100%;
  height: 3rem;

  border: 1px solid #d1cfc9;
  border-radius: 8px;
`;

const iconWrapSt = css`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  width: 3rem;
  height: 100%;
`;
const descrpSt = (isCompleted: boolean) => css`
  padding: 0.5rem;

  width: 100%;

  line-height: 195%;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${isCompleted ? '#D1CFC9' : '#292929'};
  font-weight: 400;
  font-size: 16px;
`;

const editDeleteWrapSt = css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-items: center;

  padding: 0.5rem;

  height: 100%;

  & > svg {
    cursor: pointer;
  }
`;
