// language=hbs
export default `
    <div class="page">
        <h1>{{header}}</h1>
        {{> form-component this.form.props}}
        <a href="#">{{linkText}}</a>
    </div>
`;
