/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  AiOutlineCheck,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineSave,
  AiOutlineCloseCircle,
} from 'react-icons/ai';

import { ConfirmModal, TextInput } from 'components';
import { deleteTodoApi, updateTodoApi } from 'api';
import { deleteTodo, updateTodo } from 'redux/todoSlice';
import { Todo, DeleteTodoApiError, UpdateTodoApiError } from 'types';
import { isAxiosError } from 'utils';

/**
 * description: 할일 컴포넌트
 */
export default function TodoComponent({ id, todo, isCompleted, userId }: Todo) {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const [enteredIsCompleted, setEnteredIsCompleted] = useState(isCompleted);
  const [enteredTodo, setEnteredTodo] = useState(todo);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickDeleteIcon = () => {
    setIsDeleteModalVisible(true);
  };

  const handleClickEditIcon = () => {
    setIsUpdateMode(true);
  };

  const handleClickCloseIcon = () => {
    setEnteredIsCompleted(isCompleted);
    setEnteredTodo(todo);
    setIsUpdateMode(false);
  };

  const handleClickSaveIcon = () => {
    setIsUpdateModalVisible(true);
  };

  const handleClickDeleteModalCancelBtn = () => {
    setIsDeleteModalVisible(false);
  };

  const handleClickUpdateModalCancelBtn = () => {
    setIsUpdateModalVisible(false);
  };

  const handleClickDeleteModalOkBtn = async () => {
    try {
      await deleteTodoApi({ id });
      setIsDeleteModalVisible(false);
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

  const handleClickUpdateModalOkBtn = async () => {
    try {
      const res = await updateTodoApi({
        todo: enteredTodo,
        isCompleted: enteredIsCompleted,
        id,
      });
      setIsUpdateModalVisible(false);
      dispatch(updateTodo(res));
      setIsUpdateMode(false);
    } catch (err) {
      if (isAxiosError<UpdateTodoApiError>(err) && err.response) {
        alert(err.response.data.message);
      }

      if (err instanceof Error && err.message === 'no token') {
        navigate('/');
      }
    }
  };

  const handleChangeIsCompleted: React.ChangeEventHandler = e => {
    setEnteredIsCompleted(prev => !prev);
  };

  const handleChangeTodo: React.ChangeEventHandler<HTMLInputElement> = e => {
    setEnteredTodo(e.target.value);
  };

  if (!isUpdateMode)
    return (
      <div css={todoContainerSt}>
        <div css={iconWrapSt}>
          {isCompleted && <AiOutlineCheck color="#24A147" size={25} />}
        </div>
        <div css={descrpSt(isCompleted)}>{todo}</div>
        <div css={editDeleteWrapSt}>
          <AiOutlineEdit size={25} onClick={handleClickEditIcon} />
          <AiOutlineDelete size={25} onClick={handleClickDeleteIcon} />
        </div>
        <ConfirmModal
          visible={isDeleteModalVisible}
          handleClickCancelBtn={handleClickDeleteModalCancelBtn}
          handleClickOkBtn={handleClickDeleteModalOkBtn}
          body="정말로 삭제하시겠습니까?"
          okString="삭제"
        />
      </div>
    );

  return (
    <div css={todoContainerSt}>
      <div css={iconWrapSt}>
        <input
          type="checkbox"
          checked={enteredIsCompleted}
          onChange={handleChangeIsCompleted}
          css={checkBoxSt}
        />
      </div>
      <TextInput
        value={enteredTodo}
        height="2rem"
        onChange={handleChangeTodo}
      />
      <div css={editDeleteWrapSt}>
        <AiOutlineSave size={25} onClick={handleClickSaveIcon} />
        <AiOutlineCloseCircle size={25} onClick={handleClickCloseIcon} />
      </div>
      <ConfirmModal
        visible={isUpdateModalVisible}
        body="Todo를 변경하시겠습니까?"
        okString="저장"
        handleClickCancelBtn={handleClickUpdateModalCancelBtn}
        handleClickOkBtn={handleClickUpdateModalOkBtn}
      />
    </div>
  );
}

const todoContainerSt = css`
  display: flex;
  align-items: center;

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

const checkBoxSt = css`
  width: 100%;
`;
