//language=hbs
export default `
    <div class="chat-user-panel">
        <div class="sidebar-header">
            {{> button-icon-component buttonCancel.props}}
            <h3 class="sidebar-header-title">Добавить пользователей</h3>
        </div>
        <div class="sidebar-search-container">
            {{> input-component inputSearchUsers.props}}
            {{> button-icon-component buttonSearchUsers.props}}
        </div>
        {{> chat-item-list-component userItemsList.props}}
    </div>
`;
