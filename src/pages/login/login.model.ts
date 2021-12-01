import AuthComponent from '../../components/auth';
import {IFormElementsDefinition} from '../../components/form/form.model';
import {IInputType} from '../../components/input';
import {FORM_VALIDATE_PATTERNS} from '../../utils/validation';

export interface ILoginProps {
  authForm: AuthComponent;
}

export const formElementsDefinition: IFormElementsDefinition[] = [
  {
    name: 'login',
    label: 'Логин',
    value: 'login',
    type: IInputType.text,
    placeholder: 'Логин',
    validatePattern: FORM_VALIDATE_PATTERNS.LOGIN,
  },
  {
    name: 'password',
    label: 'Пароль',
    value: 'Passw0rd',
    type: IInputType.text,
    placeholder: 'Пароль',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
];
