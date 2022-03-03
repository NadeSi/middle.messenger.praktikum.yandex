import {IInputType} from '../../components/common/input';
import ButtonComponent from '../../components/common/button/button';
import ButtonCancelComponent from '../../components/common/button/button-cancel';
import AvatarComponent from '../../components/common/avatar';
import FormComponent, {IFormElementsDefinition} from '../../components/form';
import {FORM_VALIDATE_PATTERNS} from '../../utils/validation';
import {CurrentUserItem, CurrentUserPasswordItem} from '../../models/auth';

export type SettingConnectProps = {
  currentUser?: CurrentUserItem;
};

type SettingInnerProps = SettingConnectProps & {
  isViewMode: boolean;
  avatarElement: AvatarComponent;
  buttonChangeInfo: ButtonComponent;
  buttonChangePassword: ButtonComponent;
  buttonExit: ButtonComponent;
  form?: FormComponent;
  buttonCancel: ButtonCancelComponent;
};

export type SettingOuterProps = SettingConnectProps & {
  settingsFormElementsDef: IFormElementsDefinition[];
  buttonSubmitText?: string;
  isViewMode?: boolean;
};

export type SettingProps = SettingInnerProps &
  SettingOuterProps & {
    formKeys: string[];
  };

export const settingsViewFormElementsDef: IFormElementsDefinition<CurrentUserItem>[] = [
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
    name: 'phone',
    label: 'Телефон',
    type: IInputType.text,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.PHONE_NUMBER,
  },
];

export const settingsEditFormElementsDef: IFormElementsDefinition<CurrentUserItem>[] = [
  {
    name: 'display_name',
    label: 'Имя в чате',
    type: IInputType.text,
    value: '',
  },
  ...settingsViewFormElementsDef,
];

export const settingsPasswordsFormElementsDef: IFormElementsDefinition<CurrentUserPasswordItem>[] = [
  {
    name: 'oldPassword',
    label: 'Старый пароль',
    type: IInputType.password,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
  {
    name: 'newPassword',
    label: 'Новый пароль',
    type: IInputType.password,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
  {
    name: 'newPasswordCopy',
    label: 'Повторите новый пароль',
    type: IInputType.password,
    value: '',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
];
