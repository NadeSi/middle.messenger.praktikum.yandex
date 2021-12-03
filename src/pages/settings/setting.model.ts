import {IInputType} from '../../components/input';
import ButtonCancelComponent from '../../components/button/button-cancel';
import FormComponent from '../../components/form';
import {IFormElementsDefinition} from '../../components/form/form.model';
import {FORM_VALIDATE_PATTERNS} from '../../utils/validation';

export type SettingProps = {
  avatar: string;
  oldPassword: string;
  newPassword: string;
  changeInfoText: string;
  changePasswordText: string;
  exitText: string;
  display_name: string;
  form: FormComponent;
  buttonCancel: ButtonCancelComponent;
};

export type SettingEditProps = {
  form: FormComponent;
  buttonCancel: ButtonCancelComponent;
};

export const settingsFormElementsDef: IFormElementsDefinition[] = [
  {
    name: 'display_name',
    label: 'Имя в чате',
    type: IInputType.text,
    value: 'display_name',
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
    name: 'phone',
    label: 'Телефон',
    type: IInputType.text,
    value: '1234567890123',
    validatePattern: FORM_VALIDATE_PATTERNS.PHONE_NUMBER,
  },
];

export const settingsPasswordsFormElementsDef: IFormElementsDefinition[] = [
  {
    name: 'oldPassword',
    label: 'Старый пароль',
    type: IInputType.password,
    value: 'Passw0rd',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
  {
    name: 'newPassword',
    label: 'Новый пароль',
    type: IInputType.password,
    value: 'Passw0rd',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
  {
    name: 'newPasswordCopy',
    label: 'Повторите новый пароль',
    type: IInputType.password,
    value: 'Passw0rd',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
];
