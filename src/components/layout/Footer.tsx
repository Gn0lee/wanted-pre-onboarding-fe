/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';

/**
 * description: 푸터 컴포넌트
 */
export default function Footer() {
  return (
    <div css={containerSt}>
      <div>Wanted</div>
      <div>Author: Gnolee</div>
    </div>
  );
}

const containerSt = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 1.5rem;

  width: 100%;
  height: 4rem;

  background-color: #fafafa;

  & > div {
    font-weight: 400;
    font-size: 14px;
    color: #122e99;
  }
`;
