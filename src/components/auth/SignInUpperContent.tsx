/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

export default function SignInUpperContent() {
  return (
    <React.Fragment>
      <h1>로그인</h1>
      <div css={signUpWrapSt}>
        <div>회원이 아니라면?</div>
        <div css={signUpBtnSt}>회원가입</div>
      </div>
    </React.Fragment>
  );
}

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
