// language=hbs
export default `
    <button type="button" class="button chat-add-button" name={{name}}>
        <span class="icon {{#if icon}}{{icon}}{{else}}icon-plus{{/if}}" role="img" />
    </button>
`;
