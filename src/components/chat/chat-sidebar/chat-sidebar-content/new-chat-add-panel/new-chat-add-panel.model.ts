import InputComponent from '../../../../common/input';
import ButtonIcon, {ButtonIconHandlers} from '../../../../common/button/button-icon';
import ButtonIconComponent from '../../../../common/button/button-icon';
import ChatAddButton from '../_components/chat-add-button';

type NewChatAddPanelInnerProps = {
  inputNewChatTitle: InputComponent;
  buttonCancel: ButtonIconComponent;
  buttonNewChatAdd: ChatAddButton;
};

export type NewChatAddPanelOuterProps = {
  //
};

export type NewChatAddPanelProps = NewChatAddPanelInnerProps & NewChatAddPanelOuterProps;

export type NewChatAddPanelHandlers = {
  onClickCancel: ButtonIconHandlers['onClick'];
};
