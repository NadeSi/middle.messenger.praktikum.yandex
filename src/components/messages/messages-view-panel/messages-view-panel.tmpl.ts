//language=hbs
export default `
    <div id="messages-view-panel" class="messages-view-panel">
        <div class="messages-view-panel-container">
            {{#if messageItemList}}
                {{#each messageItemList}}
                    {{> message-item-component this.props}}
                {{/each}}
            {{/if}}
        </div>
    </div>
`;
