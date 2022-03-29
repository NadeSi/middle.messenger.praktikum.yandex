import AuthComponent from '../../components/auth';
import {IFormElementsDefinition} from '../../components/form/form.model';
import {IInputType} from '../../components/common/input/input.model';
import {FORM_VALIDATE_PATTERNS} from '../../utils/validation';
import {AuthLoginItem, CurrentUserItem} from '../../models/auth';

export type LoginPageProps = {
  currentUser?: CurrentUserItem;
  authForm: AuthComponent;
};

export const formElementsDefinition: IFormElementsDefinition<AuthLoginItem>[] = [
  {
    name: 'login',
    label: 'Логин',
    value: '',
    type: IInputType.text,
    // placeholder: 'Логин',
    validatePattern: FORM_VALIDATE_PATTERNS.LOGIN,
  },
  {
    name: 'password',
    label: 'Пароль',
    value: '',
    type: IInputType.text,
    // placeholder: 'Пароль',
    validatePattern: FORM_VALIDATE_PATTERNS.PASSWORD,
  },
];
