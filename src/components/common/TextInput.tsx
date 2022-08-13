/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';

export interface TextInputProps {
  label?: React.ReactNode;
  placeholder?: string;
  value?: string;
  valueType?: 'text' | 'password';
  helpText?: React.ReactNode;
  width?: string;
  height?: string;
  validation?: 'none' | 'passed' | 'failed';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * description: 텍스트 인풋
 */
export default function TextInput({
  label,
  placeholder,
  value,
  valueType = 'text',
  helpText,
  width = '100%',
  validation = 'none',
  onChange = () => {},
  height = '3rem',
}: TextInputProps) {
  return (
    <div css={containerCss(width)}>
      {label && (
        <div css={labelWrapperCss}>
          <div css={labelCss}>{label}</div>
        </div>
      )}
      <div css={inputWrapCss(height)}>
        <input
          type={valueType}
          css={inputSt}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {helpText && <div css={helpTextCss(validation)}>{helpText}</div>}
    </div>
  );
}

const containerCss = (width: string) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: ${width};

  box-sizing: border-box;
`;

const labelWrapperCss = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #7d7d78;
  font-size: 0.875rem;
  font-weight: 400;
  width: 100%;
`;

const labelCss = css`
  width: 100%;
`;

const inputWrapCss = (height: string) => css`
  position: relative;

  width: 100%;
  height: ${height};
`;

const inputSt = css`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  padding-left: 1rem;
  padding-right: 1rem;

  width: 100%;
  height: 100%;

  border: 1px solid #d1cfc9;
  border-radius: 8px;

  background: #fafafa;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-weight: 400;

  ::placeholder {
    color: #a6a6a1;
  }
`;

const helpTextCss = (validation: 'none' | 'passed' | 'failed') => css`
  margin-top: 0.5rem;
  color: #7d7d78;
  font-size: 0.875rem;
  font-weight: 400;
  ${validation === 'failed' && `color: #D91F29`}
`;
