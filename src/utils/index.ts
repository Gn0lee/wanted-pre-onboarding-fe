import { rEmail, rPassword } from './regex';

import { TOKEN_KEY, API_ADDRESS } from './contants';

import {
  ValidateResult,
  validation,
  validateEmail,
  validatePassword,
} from './validateFunction';

export { rEmail, rPassword };

export { validateEmail, validatePassword };

export { TOKEN_KEY, API_ADDRESS };

export type { ValidateResult, validation };
