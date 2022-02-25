//language=hbs
export default `
    <div class="message-item {{#if (isCurrentUser userId)}}is-out{{else}}is-in{{/if}}">
        <div class="message-item-container">
            <span class="message">{{content}}</span>
            <span class="time">{{time}}</span>
        </div>
    </div>
`;
