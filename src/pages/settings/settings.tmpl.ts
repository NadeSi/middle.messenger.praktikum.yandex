//language=hbs
export default `
    <div class="page">
        <div>{{avatar}}</div>
        <p>{{display_name}}</p>
        {{> form-component form.props}}
        {{> link-component changeInfoLink.props}}
        {{> link-component changePasswordLink.props}}
        {{> link-component exitLink.props}}
        {{> button-cancel-component buttonCancel.props}}
    </div>
`;
