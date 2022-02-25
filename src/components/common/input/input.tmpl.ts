//language=hbs
export default `
    <div class="input-container">
        <label for="">{{label}}</label>
        <input
            class="input"
            name={{name}}
            type={{type}}
            {{#if value}}
                value={{value}}
            {{/if}}
            {{#if placeholder}}
                placeholder="{{placeholder}}"
            {{/if}}
            {{#if disabled}}
                disabled
            {{/if}}
        />
    </div>
`;
