/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useValueValidate } from 'hooks';
import { login } from 'redux/accountInfoSlice';
import { TextInput, Button } from 'components';

import { signInApi } from 'api';
import { SignInApiError } from 'types';
import {
  validateEmail,
  validatePassword,
  isAxiosError,
  TOKEN_KEY,
} from 'utils';

/**
 * description: 이메일, 비밀번호 정규식 검사에 따른 validation 변경, 클릭시 signin api 호출
 * todo: 로컬스토리지 토큰 검사 로직 추가
 */
export default function SignInInput() {
  const {
    value: email,
    returnMsg: emailHelpTxt,
    returnValidation: emailValidation,
    isValid: isEmailValid,
    handleChangeValue: handleChangeEmail,
  } = useValueValidate(validateEmail);

  const {
    value: password,
    returnMsg: passwordHelpTxt,
    returnValidation: passwordValidation,
    isValid: isPasswordValid,
    handleChangeValue: handleChangePassword,
  } = useValueValidate(validatePassword);

  const [btnDisable, setBtnDisable] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const res = await signInApi({ email, password });

      localStorage.setItem(TOKEN_KEY, res.access_token);
      dispatch(login());
      navigate('/todo');
    } catch (err) {
      if (isAxiosError<SignInApiError>(err) && err.response) {
        alert(err.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [isEmailValid, isPasswordValid]);

  return (
    <form
      css={inputWrapSt}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <TextInput
        label="email"
        valueType="text"
        value={email}
        helpText={emailHelpTxt}
        validation={emailValidation}
        onChange={handleChangeEmail}
        height="3rem"
      />
      <TextInput
        label="password"
        valueType="password"
        validation={passwordValidation}
        value={password}
        helpText={passwordHelpTxt}
        onChange={handleChangePassword}
        height="3rem"
      />
      <Button
        width="100%"
        backgroundColor="#122E99"
        height="3rem"
        color="#FAFAFA"
        disabled={btnDisable}
        type="submit"
      >
        로그인
      </Button>
    </form>
  );
}

const inputWrapSt = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 18rem;
`;
