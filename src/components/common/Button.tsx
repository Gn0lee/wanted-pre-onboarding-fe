/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

export interface ButtonStyleProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
}

export interface ButtonProps extends ButtonStyleProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

export default function Button({
  children,
  disabled = false,
  width = 'fit-content',
  height = 'fit-content',
  backgroundColor,
  color,
  onClick,
}: ButtonProps) {
  return (
    <button
      css={buttonSt({ width, height, backgroundColor, color })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const buttonSt = ({
  width,
  height,
  backgroundColor,
  color,
}: ButtonStyleProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${width};
  height: ${height};

  border: none;
  border-radius: 0.5rem;

  background-color: ${backgroundColor};
  color: ${color};

  font-weight: 500;
  line-height: 100%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #d1cfc9;
  }
`;
