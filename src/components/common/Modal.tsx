/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/react';

export interface ModalProps {
  visible: boolean;
  overlayColor?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
  top?: string;
}

export default function Modal({
  visible,
  children,
  footer,
  width = '300px',
  top = '11.25rem',
  overlayColor = 'rgba(12, 12, 12, 0.48)',
}: ModalProps) {
  if (!visible) return null;

  return (
    <div css={overlaySt(overlayColor)}>
      <div css={containerSt(top, width)}>
        {children}
        {footer}
      </div>
    </div>
  );
}

const overlaySt = (overlayColor: string) => css`
  position: absolute;
  left: 0rem;
  right: 0rem;
  top: 0rem;

  height: 100%;

  background: ${overlayColor};

  z-index: 9999;
`;

const containerSt = (top: string, width?: string) => css`
  width: ${width};

  margin: ${`${top} auto`};
  padding: 1.5rem 2rem;

  width: ${width};

  z-index: 10000;

  border: 1px solid #d1cfc9;
  background: #fafafa;
  border-radius: 8px;
`;
