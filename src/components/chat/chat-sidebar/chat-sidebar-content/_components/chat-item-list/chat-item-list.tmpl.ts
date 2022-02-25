//language=hbs
export default `
    <div class="chat-item-list-container">
        {{#each chatItemList}}
            {{> chat-item-component this.props}}
        {{/each}}
    </div>
`;
