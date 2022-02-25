//language=hbs
export default `
    <div class="chat-main-panel-inner-component messages-input-panel">
<!--        <button class="button-icon button-add-file">-->
<!--            <span class="icon icon-add-file" role="img" />-->
<!--        </button>-->
        {{> button-icon-component buttonAddFile.props}}
        {{> input-component inputMessage.props}}
        {{> button-icon-component buttonSend.props}}
    </div>
`;
