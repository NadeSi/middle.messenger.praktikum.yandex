//language=hbs
export default `
    <div class="chat-panel">
        <div class="sidebar-header chat-search-container">
            {{> button-icon-component buttonProfile.props}}
            <div class="sidebar-search-container">
                {{> input-component inputSearch.props}}
                {{> button-icon-component buttonSearchChats.props}}
            </div>
        </div>

        {{> chat-item-list-component chatItemList.props}}
        {{> chat-add-button-component chatAddButton.props}}
    </div>
`;
