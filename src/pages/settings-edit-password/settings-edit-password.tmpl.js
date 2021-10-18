import input from '../../components/input'
import buttonCancel from '../../components/button/button-cancel'

export const template = `
    <div class="page">
        <form>
        {{#each formInput}}
          {{> input}}
        {{/each}}
        </form>
        <button>{{buttonSave}}</button>
        {{> button-cancel}}
    </div>
`;
