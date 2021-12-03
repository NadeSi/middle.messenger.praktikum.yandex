import InputComponent from '../../input';

export interface IMessagesInputPanelProps {
  inputMessage: InputComponent;
}

export interface IMessagesInputPanelHandlers {
  onSendMessage(message: string): void;
}
