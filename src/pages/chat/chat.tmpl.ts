//language=hbs
export default `
    <div class="page chat">
        {{> chat-panel-component this.chatPanel.props}}
        <div class="messages-panel">
            {{> messages-top-panel-component this.messagesTopPanel.props}}
            {{> messages-view-panel-component this.messagesViewPanel.props}}
            {{> messages-input-panel-component this.messagesInputPanel.props}}
        </div>
    </div>
`;
