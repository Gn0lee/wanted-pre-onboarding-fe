/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import { Modal, Button } from 'components';
import { deleteTodoApi } from 'api';
import { deleteTodo } from 'redux/todoSlice';
import { Todo, DeleteTodoApiError } from 'types';
import { isAxiosError } from 'utils';

/**
 * description: 할일 컴포넌트
 * todo: 수정 클릭시 수정모드 변환, 수정 api 연결, 수정 성공 시 할일 리스트 갱신
 */
export default function TodoComponent({ id, todo, isCompleted, userId }: Todo) {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickDeleteIcon = () => {
    setIsDeleteModalVisible(true);
  };

  const handleClickDeleteModalCancelBtn = () => {
    setIsDeleteModalVisible(false);
  };

  const handleClickDeleteModalOkBtn = async () => {
    try {
      await deleteTodoApi({ id });
      dispatch(deleteTodo(id));
    } catch (err) {
      if (isAxiosError<DeleteTodoApiError>(err) && err.response) {
        alert(err.response.data.message);
      }

      if (err instanceof Error && err.message === 'no token') {
        navigate('/');
      }
    }
  };

  return (
    <div css={todoContainerSt}>
      <div css={iconWrapSt}>
        {isCompleted && <AiOutlineCheck color="#24A147" size={25} />}
      </div>
      <div css={descrpSt(isCompleted)}>{todo}</div>
      <div css={editDeleteWrapSt}>
        <AiOutlineEdit size={25} />
        <AiOutlineDelete size={25} onClick={handleClickDeleteIcon} />
      </div>
      <Modal
        visible={isDeleteModalVisible}
        footer={
          <div css={modalBtnWrapSt}>
            <Button
              backgroundColor="#FAFAFA"
              color="#122E99"
              borderColor="#122E99"
              width="100%"
              height="100%"
              onClick={handleClickDeleteModalCancelBtn}
            >
              취소
            </Button>
            <Button
              backgroundColor="#122E99"
              color="#FAFAFA"
              width="100%"
              height="100%"
              onClick={handleClickDeleteModalOkBtn}
            >
              삭제
            </Button>
          </div>
        }
      >
        <div css={modalBodySt}>정말로 삭제하시겠습니까?</div>
      </Modal>
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
