/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

export default function TodoPage() {
  return (
    <div css={containerSt}>
      <h2>Todo</h2>
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
`;

const inputWrapSt = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 18rem;
`;
