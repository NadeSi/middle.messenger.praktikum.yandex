//language=hbs
export default `
    <div class="messages-input-panel">
        <button class="button-icon button-add-file">
            <span class="icon icon-add-file" role="img" />
        </button>
            {{> input-component this.inputMessage.props}}
        <button class="button-icon button-send">
            <span class="icon icon-send" role="img" />
        </button>
    </div>
`;
