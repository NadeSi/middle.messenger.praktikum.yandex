//language=hbs
export default `
    <div class="chat-panel">
        <div class="chat-search-container">
          {{> input-component this.inputSearch.props}}
        </div>

      <div class="chat-items-container">
        {{#each this.chatItemList}}
            {{> chat-item-component this.props}}
        {{/each}}
      </div>
    </div>
`;
