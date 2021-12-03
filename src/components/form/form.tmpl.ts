// language=hbs
export default `
  <form name={{formName}}>
    {{#each this.formInputs}}
        {{> input-component this.props}}
    {{/each}}
    {{#if buttonSubmitText}}
        <button class="button button_type_submit" type="submit">{{buttonSubmitText}}</button>
    {{/if}}
  </form>
`;
