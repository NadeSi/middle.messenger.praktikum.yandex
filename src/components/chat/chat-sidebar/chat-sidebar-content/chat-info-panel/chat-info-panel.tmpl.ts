//language=hbs
export default `
    <div class="chat-info-panel">
      <div class="sidebar-header chat-info-header">
          {{> button-icon-component buttonCancelPanel.props}}
          <h3 class="sidebar-header-title chat-title">{{title}}</h3>
          {{> button-icon-component buttonDeleteChat.props}}
      </div>
      <div class="chat-info-body">
          {{> avatar-component avatarElement.props}}
      </div>
      {{> chat-item-list-component chatItemList.props}}
      {{> chat-add-button-component buttonShowUsersPanel.props}}
    </div>
`;
