// language=hbs
export default `
  <form name={{formName}} class="form-container">
    {{#if formInputs}}
      {{#each this.formInputs}}
          {{> input-component this.props}}
      {{/each}}
    {{/if}}
    {{#if buttonSubmitText}}
        <button class="button button-type-submit" type="submit">{{buttonSubmitText}}</button>
    {{/if}}
  </form>
`;
