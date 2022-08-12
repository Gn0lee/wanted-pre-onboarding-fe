import { rEmail, rPassword } from './regex';

export type validation = 'none' | 'passed' | 'failed';

export interface ValidateResult {
  validation: validation;
  message: string;
}

export function validatePassword(value: string): ValidateResult {
  const result: ValidateResult = { validation: 'none', message: '' };
  if (!rPassword.test(value)) {
    result.validation = 'failed';
    result.message = '비밀번호는 8자 이상입니다.';
  }
  return result;
}

export function validateEmail(value: string): ValidateResult {
  const result: ValidateResult = { validation: 'none', message: '' };
  if (!rEmail.test(value)) {
    result.validation = 'failed';
    result.message = '@를 포함한 이메일 주소를 입력해 주세요.';
  }
  return result;
}
