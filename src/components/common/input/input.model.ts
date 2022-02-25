export enum IInputType {
  button = 'button',
  checkbox = 'checkbox',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  password = 'password',
  radio = 'radio',
  reset = 'reset',
  submit = 'submit',
  text = 'text',
}

export interface IInputProps<T = any> {
  name: string & keyof T;
  type: IInputType;
  value: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}

export interface IInputHandler {
  onInput?(value: string): void;
}
