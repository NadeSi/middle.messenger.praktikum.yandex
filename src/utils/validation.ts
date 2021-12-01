export const FORM_VALIDATE_PATTERNS = {
  NOT_NULL: /.*/,
  LOGIN: /(?!^\d+$)^[\w-]{3,20}$/,
  PASSWORD: /(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9_-]{8,40}/,
  PHONE_NUMBER: /^[\+]?[0-9]{10,15}$/,
  EMAIL: /[\w+-_\.!?]+@[\w+-_\.!?]+[A-Za-z]\.[\w]+/,
  USER_NAME: /^(?=[A-ZА-Я])[a-zA-Zа-яА-Я-]+$/,
};

const isValid = (pattern: RegExp | string, value: string): boolean => {
  const regex = new RegExp(pattern);
  return regex.test(value);
};

export const validateFormInput = (
  pattern: RegExp | string = FORM_VALIDATE_PATTERNS.NOT_NULL,
  formInput: HTMLInputElement,
): boolean => {
  const isValidInput = isValid(pattern, formInput.value);
  if (!isValidInput) {
    formInput.classList.add('input-error');
  } else {
    formInput.classList.remove('input-error');
  }

  return isValidInput;
};
