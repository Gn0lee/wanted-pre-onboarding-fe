/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';

import { logout } from 'redux/accountInfoSlice';
import { resetTodos } from 'redux/todoSlice';
import { TOKEN_KEY } from 'utils';
/**
 * description: 헤더 컴포넌트
 * todo: 로그아웃 아이콘 및 동작 추가
 */
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    dispatch(logout());
    dispatch(resetTodos());
    localStorage.removeItem(TOKEN_KEY);
    navigate('/');
  };

  return (
    <div css={containerSt}>
      <div>Wanted Todo List</div>
      <div css={logoutIconWrapSt}>
        <AiOutlineLogout onClick={handleClickLogout} />
      </div>
    </div>
  );
}

const containerSt = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;

  background-color: #fafafa;

  &:first-child {
    color: #1c4aff;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const logoutIconWrapSt = css`
  position: absolute;

  top: 18px;
  right: 32px;

  color: #292929;

  cursor: pointer;
`;
