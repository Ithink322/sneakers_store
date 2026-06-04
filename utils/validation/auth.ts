export interface LogInFormValues {
  login: string;
  password: string;
}

export interface SignUpFormValues {
  login: string;
  fio: string;
  number: string;
  password: string;
  passwordConfirm: string;
  policy: boolean;
}

const loginRegex =
  /^(?:[a-zA-Z0-9._%+-]{3,20}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const fioRegex =
  /^(?:[А-ЯЁа-яёA-Za-z]+\s[А-ЯЁа-яёA-Za-z]+)(?:\s[А-ЯЁа-яёA-Za-z]+)?$/;
const passwordRegex = /^[A-Za-zА-Яа-яёЁ\d_-]{8,20}$/;

export const validateLogin = (value: string) => {
  if (!value) {
    return "Важно заполнить это поле.";
  }
  return loginRegex.test(value) || "Введите корректный email или login.";
};

export const validateFio = (value: string) => {
  if (!value) {
    return "Важно заполнить это поле.";
  }
  return fioRegex.test(value.trim()) || "Введите корректное ФИО.";
};

export const validatePhone = (value: string) => {
  const numberDigits = value.replace(/\D/g, "");
  return (
    numberDigits.length === 11 &&
    /^7\d{3}\d{3}\d{2}\d{2}$/.test(numberDigits)
  ) || "Важно заполнить это поле.";
};

export const validatePassword = (value: string) => {
  if (!value) {
    return "Важно заполнить это поле.";
  }
  if (value.length < 8 || value.length > 20) {
    return "Пароль должен содержать от 8 до 20 символов.";
  }
  return (
    passwordRegex.test(value) ||
    "Пароль не должен содержать специальных символов."
  );
};

export const validatePasswordConfirm = (
  value: string,
  password: string
) => {
  const passwordValidation = validatePassword(value);
  if (passwordValidation !== true) {
    return passwordValidation;
  }
  return value === password || "Пароли не совпадают.";
};

export const validatePolicy = (value: boolean) => {
  return value || "Пожалуйста подтвердите обработку персональных данных.";
};
