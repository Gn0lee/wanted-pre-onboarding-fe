/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { Button, TextInput } from 'components';

export default function CreateTodo() {
  return (
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
