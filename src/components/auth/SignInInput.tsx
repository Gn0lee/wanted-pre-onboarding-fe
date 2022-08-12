/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';

import { useValueValidate } from 'hooks';
import { TextInput, Button } from 'components';

import { validateEmail, validatePassword } from 'utils';

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

  useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [isEmailValid, isPasswordValid]);

  return (
    <div css={inputWrapSt}>
      <TextInput
        label="email"
        valueType="text"
        value={email}
        helpText={emailHelpTxt}
        validation={emailValidation}
        onChange={handleChangeEmail}
      />
      <TextInput
        label="password"
        valueType="password"
        validation={passwordValidation}
        value={password}
        helpText={passwordHelpTxt}
        onChange={handleChangePassword}
      />
      <Button
        width="100%"
        backgroundColor="#122E99"
        height="3rem"
        color="#FAFAFA"
        disabled={btnDisable}
      >
        로그인
      </Button>
    </div>
  );
}

const inputWrapSt = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 18rem;
`;
