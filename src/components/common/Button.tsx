/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react';

export interface ButtonStyleProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
}

export interface ButtonProps extends ButtonStyleProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

/**
 * description: 버튼
 */
export default function Button({
  children,
  disabled = false,
  width = 'fit-content',
  height = 'fit-content',
  backgroundColor,
  color,
  onClick,
  borderColor,
}: ButtonProps) {
  return (
    <button
      css={buttonSt({ width, height, backgroundColor, color, borderColor })}
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
  borderColor,
}: ButtonStyleProps) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${width};
  height: ${height};

  border: ${borderColor ? `1px solid ${borderColor}` : 'none'};
  border-radius: 8px;

  background-color: ${backgroundColor};
  color: ${color};

  font-weight: 500;
  line-height: 160%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #d1cfc9;
  }
`;
