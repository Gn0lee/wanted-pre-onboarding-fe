/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, TextInput } from 'components';
import { ReduxState } from 'redux/store';
import { createTodo } from 'redux/todoSlice';
import { createTodoApi } from 'api';
import { CreateTodoApiError } from 'types';
import { isAxiosError } from 'utils';

/**
 * description: 새로운 할일을 추가하는 컴포넌트
 * todo: value 설정 ,api 연결, 추가 성공시 할일 리스트 갱신
 */
export default function CreateTodo() {
  const { userId } = useSelector((state: ReduxState) => state.accountInfo);
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeTodo: React.ChangeEventHandler<HTMLInputElement> = e => {
    setTodo(e.target.value);
  };

  const handleClickCreate = async () => {
    try {
      const res = await createTodoApi(todo);
      setTodo('');
      dispatch(createTodo({ ...res, userId }));
    } catch (err) {
      if (isAxiosError<CreateTodoApiError>(err) && err.response) {
        alert(err.response.data.message);
      }

      if (err instanceof Error && err.message === 'no token') {
        navigate('/');
      }
    }
  };

  return (
    <div css={createTodoWrapSt}>
      <TextInput valueType="text" onChange={handleChangeTodo} value={todo} />
      <Button
        width="6rem"
        backgroundColor="#122E99"
        height="3rem"
        color="#FAFAFA"
        onClick={handleClickCreate}
      >
        추가
      </Button>
    </div>
  );
}

const createTodoWrapSt = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;

  margin: 2rem 0rem;
`;
