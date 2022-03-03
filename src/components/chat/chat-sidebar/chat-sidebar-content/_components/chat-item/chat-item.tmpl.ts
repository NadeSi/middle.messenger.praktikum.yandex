//language=hbs
export default `
    <div class="chat-item" id={{id}}>
        {{> avatar-component avatarElement.props}}
        <div class="body-container">
            <p class="body-title">
                <span class="body-container-info body-title-header">{{title}}</span>
                <span class="body-title-date">{{lastMessageDate}}</span>
            </p>
            <p class="body-subtitle">
                <span class="body-container-info body-last-message">{{lastMessage.content}}</span>
                {{#if unreadCount}}
                    <span class="body-badge">{{unreadCount}}</span>
                {{/if}}
            </p>
        </div>
        <div class="action-container">
            {{#if buttonDeleteItem}}
                {{> button-icon-component buttonDeleteItem.props}}
            {{/if}}
        </div>
    </div>
`;
