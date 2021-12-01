//language=hbs
export default `
    <div class="page">
        {{> form-component this.form.props}}
        {{> button-cancel-component buttonCancel}}
    </div>
`;
