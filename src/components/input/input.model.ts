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

export interface IInputProps {
  name: string;
  type: IInputType;
  value: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}
