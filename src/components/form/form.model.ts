import InputComponent, {IInputProps} from '../input';

export interface IFormProps {
  formName: string;
  formInputs: InputComponent[];
  buttonSubmitText?: string;
}

export interface IFormHandlers {
  onSubmit?(formData: FormData): void;
  validateFormInput?(formInput: HTMLInputElement): boolean;
}

export interface IFormElementsDefinition extends IInputProps {
  validatePattern?: RegExp | string;
}
