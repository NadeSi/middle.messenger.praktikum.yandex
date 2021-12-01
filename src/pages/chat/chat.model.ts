import ChatPanelComponent from '../../components/chat/chat-panel';
import MessagesTopPanelComponent from '../../components/messages/messages-top-panel';
import MessagesViewPanelComponent from '../../components/messages/messages-view-panel';
import MessagesInputPanelComponent from '../../components/messages/messages-input-panel';

export interface IChatProps {
  chatPanel: ChatPanelComponent;
  messagesTopPanel: MessagesTopPanelComponent;
  messagesViewPanel: MessagesViewPanelComponent;
  messagesInputPanel: MessagesInputPanelComponent;
}
