import store from '../../../../modules/store';
import ChatSidebarComponent, {ChatSidebarOuterProps, ChatSidebarProps} from '../chat-sidebar-common';
import {ChatSidebarLeftProps} from './chat-sidebar-left.model';
import {ChatInfoPanelComponent, ChatUsersPanelComponent} from '../chat-sidebar-content';
import isEqual from '../../../../utils/helpers/isEqual';
import {ChatsController} from '../../../../controllers/chats';
import {ChatSidebarMode, ChatSidebarPosition} from '../../../../models/chat-sidebar';

class ChatSidebarLeftComponent extends ChatSidebarComponent {
  static initialState: ChatSidebarOuterProps = {
    position: ChatSidebarPosition.LEFT,
    isVisible: false,
    mode: ChatSidebarMode.CHAT_INFO_VIEW,
  };

  constructor(props: ChatSidebarLeftProps) {
    super({...ChatSidebarLeftComponent.initialState, ...props});

    this.initChatSidebar();

    this.props.chatInfoViewPanel = new ChatInfoPanelComponent(
      {
        activeChat: this.props.activeChat,
      },
      {
        onClickButtonCancelPanel: (e) => this.handleChangeSidebarVisible(false),
        onClickButtonShowUsersPanel: (e) => this.handleChangeSidebarMode(ChatSidebarMode.CHAT_ADD_USERS),
        onClickButtonDeleteChat: (e) => this.handleDeleteChat(e),
      },
    );

    this.props.chatUsersPanel = new ChatUsersPanelComponent(
      {
        userList: [],
      },
      {
        onAddUsersToChat: (e) => this.handleAddUsersToChat(e),
        onClosePanel: (e) => this.handleChangeSidebarMode(ChatSidebarMode.CHAT_INFO_VIEW),
      },
    );
  }

  componentDidUpdate(oldProps: ChatSidebarProps, newProps: ChatSidebarProps) {
    super.componentDidUpdate(oldProps, newProps);

    if (oldProps.isVisible !== newProps.isVisible && newProps.isVisible) {
      this.refreshChatInfoViewPanel(newProps.activeChat);
    }

    if (!isEqual(oldProps.activeChat, newProps.activeChat)) {
      this.refreshChatInfoViewPanel(newProps.activeChat);
    }

    if (!isEqual(oldProps.chatUserList, newProps.chatUserList)) {
      this.props.chatUsersPanel?.setProps({userList: newProps.chatUserList});
    }

    return true;
  }

  initChatSidebar = () => {
    store.set('sidebarLeft', ChatSidebarLeftComponent.initialState);
  };

  handleChangeSidebarVisible = (isVisible: boolean) => {
    store.set('sidebarLeft', {...store.getState().sidebarLeft, isVisible});
  };

  handleChangeSidebarMode = (mode: ChatSidebarMode) => {
    store.set('sidebarLeft', {...store.getState().sidebarLeft, mode});
  };

  //chatUsersPanel
  handleAddUsersToChat(id: number) {
    const chatId = this.props.activeChat?.id;
    if (chatId) {
      ChatsController.addChatUser(chatId, id).then(() => {
        ChatsController.getChatUsers(chatId);
        this.handleChangeSidebarMode(ChatSidebarMode.CHAT_INFO_VIEW);
      });
    }
  }

  handleDeleteChat(chatId: number) {
    if (chatId) {
      ChatsController.deleteChat(chatId).then(() => {
        this.handleChangeSidebarVisible(false);
        store.set('activeChat', undefined);
        store.set('activeChatContent', []);
      });
    }
  }

  refreshChatInfoViewPanel = (activeChat: ChatSidebarProps['activeChat']) => {
    this.props.chatInfoViewPanel?.setProps({activeChat});
  };
}

export default ChatSidebarLeftComponent;
