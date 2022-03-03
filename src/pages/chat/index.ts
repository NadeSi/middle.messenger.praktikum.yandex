import template from './chat.tmpl';
import {ChatProps} from './chat.model';

import Page from '../../modules/page';

import {IState} from '../../modules/store';
import connect from '../../modules/connect';
import {ChatsController} from '../../controllers/chats';
import Router from '../../modules/router/router';
import ChatMainPanelComponent from '../../components/chat/chat-main-panel';
import isEqual from '../../utils/helpers/isEqual';
import store from '../../modules/store/store';
import {ActiveChat} from '../../models/chat';
import {ChatWebSocket} from '../../service/chat-websocket/chat-websocket';
import {ChatSidebarLeftComponent, ChatSidebarRightComponent} from '../../components/chat/chat-sidebar';

import './chat.scss';

class Chat extends Page<ChatProps> {
  router = Router.getInstance();
  activeChatSession?: ChatWebSocket;

  constructor() {
    super('page-chat', template, {
      chatList: [],
      chatUserList: [],
      activeChat: {},
      activeChatContent: [],
    });

    this.handleChangeActiveChat = this.handleChangeActiveChat.bind(this);

    this.props.chatSidebarRight = new ChatSidebarRightComponent({
      chatList: this.props.chatList,
    });

    this.props.chatSidebarLeft = new ChatSidebarLeftComponent({});

    this.props.chatMainPanel = new ChatMainPanelComponent(
      {
        activeChat: this.props.activeChat,
        activeChatContent: this.props.activeChatContent,
      },
      {
        handleSendMessage: (e) => this.handleSendMessage(e),
      },
    );
  }

  componentDidUpdate(oldProps: ChatProps, newProps: ChatProps) {
    /**sidebar right components*/
    if (!isEqual(oldProps.sidebarRight, newProps.sidebarRight)) {
      this.props.chatSidebarRight?.setProps({...newProps.sidebarRight});
    }

    if (!isEqual(oldProps.chatList, newProps.chatList)) {
      this.props.chatSidebarRight?.setProps({
        chatList: newProps.chatList,
      });
    }
    /**sidebar right components*/

    /**sidebar left components*/
    if (!isEqual(oldProps.sidebarLeft, newProps.sidebarLeft)) {
      this.props.chatSidebarLeft?.setProps({...newProps.sidebarLeft});
    }

    if (!isEqual(oldProps.chatUserList, newProps.chatUserList)) {
      this.props.chatSidebarLeft?.setProps({
        chatUserList: newProps.chatUserList,
      });
    }
    /**sidebar left components*/

    if (!isEqual(oldProps.activeChat, newProps.activeChat)) {
      this.props.chatSidebarRight?.setProps({activeChat: newProps.activeChat});
      this.props.chatSidebarLeft?.setProps({activeChat: newProps.activeChat});
      this.props.chatMainPanel?.setProps({activeChat: newProps.activeChat});
      this.handleChangeActiveChat(newProps.activeChat);
    }

    if (!isEqual(oldProps.activeChatContent, newProps.activeChatContent)) {
      this.props.chatMainPanel?.setProps({activeChatContent: newProps.activeChatContent});
    }

    return true;
  }

  handleChangeActiveChat(activeChat: ActiveChat) {
    if (this.activeChatSession) {
      this.activeChatSession.close();
      store.set('activeChatContent', []);
    }

    if (!activeChat?.id) {
      return;
    }

    ChatsController.getChatUsers(activeChat.id);

    ChatsController.getChatToken(activeChat.id).then((token) => {
      if (token && this.props.currentUser?.id) {
        this.activeChatSession = new ChatWebSocket(this.props.currentUser?.id, activeChat.id, token);
      }
    });
  }

  handleSendMessage(message: string) {
    this.activeChatSession && this.activeChatSession.sendMessage(message);
  }
}

function mapStateToProps(state: IState) {
  return {
    currentUser: {...state.currentUser},

    sidebarRight: {...state.sidebarRight},
    sidebarLeft: {...state.sidebarLeft},

    chatList: state.chatList || [],
    chatUserList: state.userList || [],

    activeChat: {...state.activeChat} || {},
    activeChatContent: state.activeChatContent || [],
  } as ChatProps;
}

export default connect(Chat, mapStateToProps);
