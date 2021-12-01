import AuthComponent from '../../components/auth';
import {IFormElementsDefinition} from '../../components/form/form.model';
import {IInputType} from '../../components/input';
import {FORM_VALIDATE_PATTERNS} from '../../utils/validation';

export interface IRegisterProps {
  authForm: AuthComponent;
}

export const formElementsDefinition: IFormElementsDefinition[] = [
  {
    name: 'login',
    label: 'Логин',
    type: IInputType.text,
    value: 'login',
    validatePattern: FORM_VALIDATE_PATTERNS.LOGIN,
  },
  {
    name: 'email',
    label: 'Почта',
    type: IInputType.text,
    value: 'email@email.com',
    validatePattern: FORM_VALIDATE_PATTERNS.EMAIL,
  },
  {
    name: 'first_name',
    label: 'Имя',
    type: IInputType.text,
    value: 'FirstName',
    validatePattern: FORM_VALIDATE_PATTERNS.USER_NAME,
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    type: IInputType.text,
    value: 'SecondName',
    validatePattern: FORM_VALIDATE_PATTERNS.USER_NAME,
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: IInputType.text,
    value: '1234567890123',
    validatePattern: FORM_VALIDATE_PATTERNS.PHONE_NUMBER,
  },
  {
    name: 'password',
    label: 'Пароль',
    type: IInputType.password,
    value: 'Passw0rd',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
  {
    name: 'password',
    label: 'Пароль (ещё раз)',
    type: IInputType.password,
    value: 'Passw0rd',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
];
