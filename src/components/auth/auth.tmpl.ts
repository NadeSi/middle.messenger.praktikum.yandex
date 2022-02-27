// language=hbs
export default `
    <div class="page">
        <h1>{{header}}</h1>
        {{#if form}}
            {{> form-component form.props}}
        {{/if}}
        {{> link-component link.props}}
    </div>
`;
