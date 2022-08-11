/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { TextInput, Button } from 'components';

export default function SignUpPage() {
  return (
    <div css={containerSt}>
      <h2>회원가입</h2>
      <div css={inputWrapSt}>
        <TextInput label="email" valueType="text" />
        <TextInput label="password" valueType="password" />
        <Button
          width="100%"
          backgroundColor="#122E99"
          height="3rem"
          color="#FAFAFA"
        >
          회원가입
        </Button>
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
`;

const inputWrapSt = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 18rem;
`;
