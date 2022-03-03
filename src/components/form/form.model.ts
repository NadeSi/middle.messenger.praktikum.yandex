import InputComponent, {IInputProps} from '../common/input';
import {CurrentUserItem} from '../../models/auth';

type FormInnerProps<T = any> = {
  formName: string;
  formInputs?: InputComponent[];
  buttonSubmitText?: string;
};

export type FormOuterProps<T = any> = {
  formName: FormInnerProps['formName'];
  buttonSubmitText?: FormInnerProps['buttonSubmitText'];
  formInputsModel: IInputProps<T>[];
  formInputValues?: Record<string & keyof T, any>;
};

export type FormProps<T = any> = FormInnerProps<T> & FormOuterProps<T>;

export type FormHandlers = {
  onSubmit?(formData: FormData): void;
  validateFormInput?(formInput: HTMLInputElement): boolean;
};

export interface IFormElementsDefinition<T = any> extends IInputProps<T> {
  validatePattern?: RegExp | string;
}

export const getFormKeys = (formElements: IFormElementsDefinition[]): string[] => formElements.map((item) => item.name);
export const getFormValues = (
  formElements: IFormElementsDefinition[],
  currentUser?: CurrentUserItem,
): Record<string, unknown> => {
  return Object.fromEntries(
    formElements.map((item) => [
      item.name,
      currentUser && currentUser.hasOwnProperty(item.name) ? currentUser[<keyof CurrentUserItem>item.name] : item.value,
    ]),
  );
};
