import AuthComponent from '../../components/auth';
import {IFormElementsDefinition} from '../../components/form';
import {IInputType} from '../../components/common/input';
import {FORM_VALIDATE_PATTERNS} from '../../utils/validation';
import {AuthItem} from '../../models/auth';

export type RegisterProps = {
  authForm: AuthComponent;
};

export const formElementsDefinition: IFormElementsDefinition<AuthItem>[] = [
  {
    name: 'login',
    label: 'Логин',
    type: IInputType.text,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.LOGIN,
  },
  {
    name: 'email',
    label: 'Почта',
    type: IInputType.text,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.EMAIL,
  },
  {
    name: 'first_name',
    label: 'Имя',
    type: IInputType.text,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.USER_NAME,
  },
  {
    name: 'second_name',
    label: 'Фамилия',
    type: IInputType.text,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.USER_NAME,
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: IInputType.text,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.PHONE_NUMBER,
  },
  {
    name: 'password',
    label: 'Пароль',
    type: IInputType.password,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
  {
    name: 'passwordCopy',
    label: 'Пароль (ещё раз)',
    type: IInputType.password,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
];
