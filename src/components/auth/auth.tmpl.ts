// language=hbs
export default `
    <div class="page">
        <h1>{{header}}</h1>
<!--        {{#if form}}-->
        {{> form-component this.form.props}}
<!--        {{/if}}-->
        {{> link-component this.link.props}}
    </div>
`;
