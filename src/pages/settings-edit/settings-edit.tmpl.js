import Handlebars from "handlebars";
import inputTemplate from "../../components/input";
import buttonCancelTemplate from "../../components/button/button-cancel";

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

Handlebars.registerPartial('input', Handlebars.compile(inputTemplate));
Handlebars.registerPartial('button-cancel', Handlebars.compile(buttonCancelTemplate));
