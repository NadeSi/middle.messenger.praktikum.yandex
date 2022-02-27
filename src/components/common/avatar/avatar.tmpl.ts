// language=hbs
export default `
    <div id={{name}} class="avatar {{#if isEditMode}}avatar-upload{{/if}}">
        {{#if imgSrc}}
            <img src={{imgSrc}} />
        {{/if}}
        {{#if isEditMode}}
            <input id="file-input-{{name}}" type="file" accept=".jpg, .jpeg, .png"/>
            <span class="icon icon-add-image" role="img" />
        {{/if}}
    </div>
`;
