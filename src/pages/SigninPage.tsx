/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { TextInput, Button } from 'components';

export default function SignInPage() {
  return (
    <div css={containerSt}>
      <h1>로그인</h1>
      <div css={signUpWrapSt}>
        <div>회원이 아니라면?</div>
        <div css={signUpBtnSt}>회원가입</div>
      </div>
      <div css={inputWrapSt}>
        <TextInput label="email" valueType="text" />
        <TextInput label="password" valueType="password" />
        <Button
          width="100%"
          backgroundColor="#122E99"
          height="3rem"
          color="#FAFAFA"
        >
          로그인
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

  & > h1 {
    margin-bottom: 1rem;
  }
`;

const signUpWrapSt = css`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;

  width: 9.5rem;

  font-weight: 400;
  font-size: 14px;
  color: #7d7d78;
`;

const signUpBtnSt = css`
  color: #122e99;
  cursor: pointer;
`;

const inputWrapSt = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 18rem;
`;
