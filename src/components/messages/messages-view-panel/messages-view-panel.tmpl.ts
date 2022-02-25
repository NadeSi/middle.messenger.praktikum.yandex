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

/*
    <div class="messages-view-panel">
<!--        {{#each this.messageDateGroup}}-->
<!--            <div class="message-date-group">-->
<!--                <span>{{date}}</span>-->
        {{#if messageItemList}}
            {{#each messageItemList}}
                {{> message-item-component this.props}}
            {{/each}}
        {{/if}}
<!--            </div>-->
<!--        {{/each}}-->
    </div>
* */
