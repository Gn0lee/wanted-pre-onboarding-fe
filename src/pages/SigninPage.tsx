/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { SignInUpperContent, SignInInput } from 'components';
import { TOKEN_KEY } from 'utils';

export default function SignInPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (token) navigate('/todo');
  }, []);

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
