//language=hbs
export default `
    <div class="sidebar-header chat-new-header">
        {{> button-icon-component buttonCancel.props}}
        <h3 class="sidebar-header-title">Новый чат</h3>
    </div>
    <div class="chat-new-title-container">
        {{> input-component inputNewChatTitle.props}}
    </div>
    {{> chat-add-button-component buttonNewChatAdd.props}}
`;
