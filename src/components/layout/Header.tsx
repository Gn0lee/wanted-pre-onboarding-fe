/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';

/**
 * description: 헤더 컴포넌트
 * todo: 로그아웃 아이콘 및 동작 추가
 */
export default function Header() {
  return (
    <div css={containerSt}>
      <div>Wanted Todo List</div>
    </div>
  );
}

const containerSt = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;

  background-color: #fafafa;

  & > div {
    color: #1c4aff;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
