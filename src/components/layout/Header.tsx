/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';

export default function Header() {
  return <div css={containerSt}></div>;
}

const containerSt = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 4rem;

  background-color: #fafafa;
`;
