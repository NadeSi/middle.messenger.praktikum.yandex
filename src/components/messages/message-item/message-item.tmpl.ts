//language=hbs
export default `
    <div class="message-item {{#if (isCurrentUser userLogin)}}is-out{{else}}is-in{{/if}}">
        <div class="message-item-container">
            <span class="message">{{message}}</span>
            <span class="time">{{time}}</span>
        </div>
    </div>
`;
