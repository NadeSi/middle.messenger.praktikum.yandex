//language=hbs
export default `
    <div class="messages-view-panel">
        {{#each this.messageDateGroup}}
            <div class="message-date-group">
                <span>{{date}}</span>
              {{#each this.messageItemList}}
                {{> message-item-component this.props}}
              {{/each}}
            </div>
        {{/each}}
    </div>
`;
