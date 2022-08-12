/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { TextInput, Button } from 'components';

export default function SignUpInput() {
  return (
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
  );
}

const inputWrapSt = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 18rem;
`;
