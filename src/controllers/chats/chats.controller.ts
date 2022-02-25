import store from '../../modules/store/store';
import {ChatsService} from '../../service/chats/chats.service';
import {
  IChatCreateDataApi,
  IChatItemApi,
  IChatPaging,
  IChatsFilter,
  IChatUserItemApi,
} from '../../service/chats/chats.helper';
import {ChatItem, formatChatItem, formatChatUserItem} from '../../models/chat';
import {showError} from '../../utils/error';
import {MessageDataApi} from '../../service/chat-websocket/chat-websocket.helper';
import {IState} from '../../modules/store';
import {formatList} from '../../models/common';
import {MessageItem} from '../../models/message';
import {IUserItemApi} from '../../service/user/user.helper';

export type ChatCreateData = IChatCreateDataApi;

class ChatsController {
  constructor(private chatsService = new ChatsService()) {
    //
  }

  /**chat */
  getChats(title?: string) {
    //TODO добавить начитку по скроллу
    const filter: IChatsFilter = {
      offset: 0,
      limit: 10000,
    };
    if (title) filter['title'] = title;

    this.chatsService
      .getChats(filter)
      .then((data) => {
        const chatItemList = formatList<IChatItemApi, ChatItem>(data, formatChatItem);
        store.set('chatList', chatItemList);
      })
      .catch((e) => showError(e));
  }

  createChat(title: string) {
    return this.chatsService.createChat({title});
  }

  deleteChat(chatId: number) {
    return this.chatsService.deleteChat({chatId}).then(() => {
      this.getChats();
    });
  }

  /**chat user*/
  getChatUsers(chatId: number) {
    //TODO добавить начитку по скроллу
    const filter: IChatPaging = {
      offset: 0,
      limit: 10000,
    };
    this.chatsService.getChatUsers(chatId, {...filter}).then((data) => {
      const users = formatList<IChatUserItemApi, ChatItem>(data, formatChatUserItem);
      store.set('activeChat', {...store.getState().activeChat, users});
    });
  }

  addChatUser(chatId: number, userId: number) {
    return this.chatsService.addChatUsers({chatId, users: [userId]}).then((data) => {
      //
    });
  }

  deleteChatUser(chatId: number, userId: number) {
    this.chatsService.deleteChatUsers({chatId, users: [userId]}).then((data) => {
      this.getChatUsers(chatId);
    });
  }

  /** */
  updateChatAvatar(chatId: number, file: File) {
    this.chatsService.updateChatAvatar({chatId, avatar: file}).then((data) => {
      store.set('activeChat', {...store.getState().activeChat, ...formatChatUserItem(data)});
    });
  }

  //chat content
  public getChatToken(chatId: number) {
    return this.chatsService.connect(chatId).then((data) => {
      return data.token;
    });
  }

  public refreshChatMessages(data: MessageDataApi | MessageDataApi[]) {
    const formatData = (item: MessageDataApi | MessageDataApi[]) => {
      if (Array.isArray(item)) {
        return item.map((dataItem) => formatMessageData(dataItem)).reverse();
      } else {
        return formatMessageData(item);
      }
    };

    const formatMessageData = (item: MessageDataApi): MessageItem => ({
      ...item,
      userId: item.user_id,
      chatId: item.chat_id,
      isRead: item.is_read,
      date: new Date(item.time),
    });

    store.set(
      'activeChatContent',
      (store.getState().activeChatContent || []).concat(formatData(data)) as IState['activeChatContent'],
    );

    this.getChats();
  }
}

export default new ChatsController();
