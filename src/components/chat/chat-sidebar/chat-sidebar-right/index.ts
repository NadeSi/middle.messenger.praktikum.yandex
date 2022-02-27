import store from '../../../../modules/store';
import ChatSidebarComponent, {ChatSidebarProps, ChatSidebarOuterProps} from '../chat-sidebar-common';
import {ChatSidebarRightProps} from './chat-sidebar-right.model';
import {ChatListViewPanelComponent, NewChatAddPanelComponent} from '../chat-sidebar-content';
import {ChatsController} from '../../../../controllers/chats';
import isEqual from '../../../../utils/helpers/isEqual';
import {ChatSidebarMode, ChatSidebarPosition} from '../../../../models/chat-sidebar';

class ChatSidebarRightComponent extends ChatSidebarComponent {
  static initialState: ChatSidebarOuterProps = {
    position: ChatSidebarPosition.RIGHT,
    isVisible: true,
    mode: ChatSidebarMode.CHAT_LIST_VIEW,
  };

  constructor(props: ChatSidebarRightProps) {
    super({...ChatSidebarRightComponent.initialState, ...props});

    this.initChatSidebar();

    this.props.chatListViewPanel = new ChatListViewPanelComponent(
      {},
      {
        onShowAddChatPanel: (e) => this.handleChangeSidebarMode(ChatSidebarMode.NEW_CHAT_ADD),
      },
    );

    this.props.newChatAddPanel = new NewChatAddPanelComponent(
      {},
      {
        onClickCancel: (e) => this.handleChangeSidebarMode(ChatSidebarMode.CHAT_LIST_VIEW),
      },
    );

    ChatsController.getChats();
  }

  componentDidUpdate(oldProps: ChatSidebarProps, newProps: ChatSidebarProps) {
    super.componentDidUpdate(oldProps, newProps);

    if (!isEqual(oldProps.chatList, newProps.chatList)) {
      this.props.chatListViewPanel?.setProps({
        chatList: newProps.chatList,
      });
    }

    return true;
  }

  initChatSidebar = () => {
    store.set('sidebarRight', ChatSidebarRightComponent.initialState);
  };

  handleChangeSidebarMode = (mode: ChatSidebarMode) => {
    store.set('sidebarRight', {...store.getState().sidebarRight, mode});
  };
}

export default ChatSidebarRightComponent;
