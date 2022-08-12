import React, { useEffect, useState } from 'react';

import { ValidateResult, validation } from 'utils';

const useValueValidate = (validateFn: (value: string) => ValidateResult) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [validateResult, setValidateResult] = useState<ValidateResult>({
    message: '',
    validation: 'failed',
  });

  const handleChangeValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEnteredValue(event.target.value);
    setValidateResult(validateFn(event.target.value));
  };

  useEffect(() => {
    if (validateResult.validation === 'failed') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [validateResult.validation]);

  return {
    value: enteredValue,
    returnValidation: validateResult.validation,
    returnMsg: validateResult.message,
    isValid: isValid,
    handleChangeValue,
    setValue: setEnteredValue,
  };
};

export default useValueValidate;
