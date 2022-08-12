import { rEmail, rPassword } from './regex';

import { TOKEN_KEY, API_ADDRESS } from './contants';

import {
  ValidateResult,
  validation,
  validateEmail,
  validatePassword,
} from './validateFunction';

import { isAxiosError } from './axiosUtils';

export {
  TOKEN_KEY,
  API_ADDRESS,
  validateEmail,
  validatePassword,
  rEmail,
  rPassword,
  isAxiosError,
};

export type { ValidateResult, validation };
