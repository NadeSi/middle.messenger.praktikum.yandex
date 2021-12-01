//language=hbs
export default `
    <div class="page">
        <div>{{avatar}}</div>
        <p>{{display_name}}</p>
        {{> form-component this.form.props}}
        <a href="#">{{changeInfoText}}</a>
        <a href="#">{{changePasswordText}}</a>
        <a href="#">{{exitText}}</a>
        {{> button-cancel-component buttonCancel}}
    </div>
`;
