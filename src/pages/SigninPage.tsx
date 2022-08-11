/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { TextInput } from 'components';

export default function SignInPage() {
  return (
    <div css={containerSt}>
      <TextInput />
    </div>
  );
}

const containerSt = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;
