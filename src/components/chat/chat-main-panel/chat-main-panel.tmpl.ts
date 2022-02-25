//language=hbs
export default `
    <div class="chat-main-panel">
        {{#if activeChat.id}}
            {{#if messagesTopPanel}}
                {{> messages-top-panel-component messagesTopPanel.props}}
            {{/if}}
            {{#if messagesViewPanel}}
                {{> messages-view-panel-component messagesViewPanel.props}}
            {{/if}}
            {{#if messagesInputPanel}}
                {{> messages-input-panel-component messagesInputPanel.props}}
            {{/if}}
        {{/if}}
    </div>
`;
