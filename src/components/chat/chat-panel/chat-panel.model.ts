import InputComponent from '../../input';
import ChatItemComponent from '../chat-item';

export interface IChatPanelProps {
  inputSearch: InputComponent;
  chatItemList: ChatItemComponent[];
}
