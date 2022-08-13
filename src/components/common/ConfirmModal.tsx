/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Modal, Button } from 'components/common';

export interface ConfirmModalProps {
  visible: boolean;
  handleClickCancelBtn?: () => void;
  handleClickOkBtn?: () => void;
  body?: string;
  okString?: string;
}

export default function ConfirmModal({
  visible,
  handleClickCancelBtn,
  handleClickOkBtn,
  body,
  okString,
}: ConfirmModalProps) {
  return (
    <React.Fragment>
      <Modal
        visible={visible}
        footer={
          <div css={modalBtnWrapSt}>
            <Button
              backgroundColor="#FAFAFA"
              color="#122E99"
              borderColor="#122E99"
              width="100%"
              height="100%"
              onClick={handleClickCancelBtn}
            >
              취소
            </Button>
            <Button
              backgroundColor="#122E99"
              color="#FAFAFA"
              width="100%"
              height="100%"
              onClick={handleClickOkBtn}
            >
              {okString}
            </Button>
          </div>
        }
      >
        <div css={modalBodySt}>{body}</div>
      </Modal>
    </React.Fragment>
  );
}

const modalBodySt = css`
  margin: 1rem 0rem;

  width: 100%;

  color: #292929;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

const modalBtnWrapSt = css`
  display: flex;
  gap: 0.5rem;

  width: 100%;
  height: 2rem;
`;
