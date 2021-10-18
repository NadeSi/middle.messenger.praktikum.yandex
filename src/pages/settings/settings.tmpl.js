import input from '../../components/input';
import buttonCancel from '../../components/button/button-cancel'

export const template = `
    <div class="page">
        <div>{{avatar}}</div>
        <p>{{display_name}}</p>
        <form>
        {{#each formInput}}
          {{> input}}
        {{/each}}
        </form>
        <a href="#">{{changeInfoText}}</a>
        <a href="#">{{changePasswordText}}</a>
        <a href="#">{{exitText}}</a>
        {{> button-cancel}}
    </div>
`;
