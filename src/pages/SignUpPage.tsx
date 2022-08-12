/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { SignUpInput } from 'components';

export default function SignUpPage() {
  return (
    <div css={containerSt}>
      <h1>회원가입</h1>
      <SignUpInput />
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
