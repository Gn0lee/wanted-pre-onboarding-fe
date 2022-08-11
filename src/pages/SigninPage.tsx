/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'components';

export default function SignInPage() {
  return (
    <div css={containerSt}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const containerSt = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;
