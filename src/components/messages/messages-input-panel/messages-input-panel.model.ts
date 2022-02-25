import InputComponent from '../../common/input';
import ButtonIconComponent from '../../common/button/button-icon';

type MessagesInputPanelInnerProps = {
  buttonAddFile: ButtonIconComponent;
  inputMessage: InputComponent;
  buttonSend: ButtonIconComponent;
};

//export type MessagesInputPanelOuterProps = Record<string, never>;

export type MessagesInputPanelProps = MessagesInputPanelInnerProps;

export type MessagesInputPanelHandlers = {
  onSendMessage(message: string): void;
};
