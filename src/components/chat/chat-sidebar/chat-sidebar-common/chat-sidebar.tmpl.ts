//language=hbs
export default `
    <div class="chat-sidebar chat-sidebar-{{position}} {{_classNameActive}}">
        {{#ifEquals mode 'CHAT_LIST_VIEW'}}
            {{> chat-list-view-panel-component chatListViewPanel.props}}
        {{/ifEquals}}
        {{#ifEquals mode 'NEW_CHAT_ADD'}}
            {{> new-chat-add-panel-component newChatAddPanel.props}}
        {{/ifEquals}}
        {{#ifEquals mode 'CHAT_INFO_VIEW'}}
            {{> chat-info-panel-component chatInfoViewPanel.props}}
        {{/ifEquals}}
        {{#ifEquals mode 'CHAT_ADD_USERS'}}
            {{> chat-users-panel-component chatUsersPanel.props}}
        {{/ifEquals}}
    </div>
`;
