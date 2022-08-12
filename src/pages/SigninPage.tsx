/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { SignInUpperContent, SignInInput } from 'components';

export default function SignInPage() {
  return (
    <div css={containerSt}>
      <SignInUpperContent />
      <SignInInput />
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
