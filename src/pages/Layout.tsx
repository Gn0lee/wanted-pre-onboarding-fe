/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header, Footer } from 'components';

export default function Layout() {
  const [isPathTodo, setIsPathTodo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/todo') {
      setIsPathTodo(true);
    } else {
      setIsPathTodo(false);
    }
    setIsLoading(false);

    return () => {
      setIsLoading(true);
    };
  }, [location]);

  if (isLoading) return <div css={containerSt}></div>;

  return (
    <div css={containerSt}>
      <Header />
      <div css={outletWrapSt(isPathTodo)}>
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

const outletWrapSt = (isPathTodo: boolean) => css`
  max-width: ${isPathTodo ? '30rem' : '25rem'};
  width: 100%;

  height: fit-content;
  min-height: calc(100% - 8rem);
`;
