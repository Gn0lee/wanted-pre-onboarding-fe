/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'components';

export default function Layout() {
  return (
    <div css={containerSt}>
      <Header />
      <div css={outletWrapSt}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const containerSt = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  overflow-y: auto;

  background-color: #f5f5f5;
`;

const outletWrapSt = css`
  max-width: 25rem;
  width: 100%;

  height: fit-content;
  min-height: calc(100% - 8rem);
`;
