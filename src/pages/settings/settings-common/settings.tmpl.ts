//language=hbs
export default `
    <div class="page page-setting">
      {{#if currentUser}}
          {{#if isViewMode}}
              {{> avatar-component avatarElement.props}}

              {{#if currentUser.display_name}}
                  <p>{{currentUser.display_name}}</p>
              {{/if}}
          {{/if}}

          {{#if form}}
              {{> form-component form.props}}
          {{/if}}

          {{#if isViewMode}}
              <div class="button-setting-container">
                  {{> button-component buttonChangeInfo.props}}
                  {{> button-component buttonChangePassword.props}}
                  {{> button-component buttonExit.props}}
              </div>
          {{/if}}

          {{> button-cancel-component buttonCancel.props}}
      {{/if}}
    </div>
`;
