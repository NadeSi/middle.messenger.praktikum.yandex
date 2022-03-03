import MessagesTopPanelComponent from '../../messages/messages-top-panel';
import MessagesViewPanelComponent from '../../messages/messages-view-panel';
import MessagesInputPanelComponent, {MessagesInputPanelHandlers} from '../../messages/messages-input-panel';
import {ActiveChat, ActiveChatContent} from '../../../models/chat';

type ChatMainPanelInnerProps = {
  messagesTopPanel?: MessagesTopPanelComponent;
  messagesViewPanel?: MessagesViewPanelComponent;
  messagesInputPanel?: MessagesInputPanelComponent;

  activeChat: ActiveChat;
};

export type ChatMainPanelOuterProps = {
  activeChat: ChatMainPanelInnerProps['activeChat'];
  activeChatContent: ActiveChatContent;
};

export type ChatMainPanelProps = ChatMainPanelInnerProps & ChatMainPanelOuterProps;

export type ChatMainPanelHandlers = {
  handleSendMessage?: MessagesInputPanelHandlers['onSendMessage'];
};
