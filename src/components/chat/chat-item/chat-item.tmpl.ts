//language=hbs
export default `
    <div class="chat-item">
        <div class="avatar-container"></div>
        <div class="body-container">
            <span class="body-container-header">{{header}}</span>
            <span class="body-container-message">{{lastMessage}}</span>
        </div>
        <div class="info-container">
            <span class="info-container-date">{{date}}</span>
            {{#if notificationCount}}
                <span class="info-container-badge">{{notificationCount}}</span>
            {{/if}}
        </div>
    </div>
`;
