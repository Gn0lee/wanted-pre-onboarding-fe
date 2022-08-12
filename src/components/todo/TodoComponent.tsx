/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';

import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import { Todo } from 'types';

/**
 * description: 할일 컴포넌트
 * todo: 수정 클릭시 수정모드 변환, 수정 api 연결, 수정 성공 시 할일 리스트 갱신
 */
export default function TodoComponent({ id, todo, isCompleted, userId }: Todo) {
  return (
    <div key={id} css={todoContainerSt}>
      <div css={iconWrapSt}>
        {isCompleted && <AiOutlineCheck color="#24A147" size={25} />}
      </div>
      <div css={descrpSt(isCompleted)}>{todo}</div>
      <div css={editDeleteWrapSt}>
        <AiOutlineEdit size={25} />
        <AiOutlineDelete size={25} />
      </div>
    </div>
  );
}

const todoContainerSt = css`
  display: flex;

  width: 100%;
  height: 3rem;

  border: 1px solid #d1cfc9;
  border-radius: 8px;
`;

const iconWrapSt = css`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  width: 3rem;
  height: 100%;
`;

const descrpSt = (isCompleted: boolean) => css`
  padding: 0.5rem;

  width: 100%;

  line-height: 195%;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${isCompleted ? '#D1CFC9' : '#292929'};
  font-weight: 400;
  font-size: 16px;
`;

const editDeleteWrapSt = css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-items: center;

  padding: 0.5rem;

  height: 100%;

  & > svg {
    cursor: pointer;
  }
`;
