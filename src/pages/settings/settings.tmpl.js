import Handlebars from "handlebars";
import inputTemplate from "../../components/input";
import buttonCancelTemplate from "../../components/button/button-cancel";

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

Handlebars.registerPartial('input', Handlebars.compile(inputTemplate));
Handlebars.registerPartial('button-cancel', Handlebars.compile(buttonCancelTemplate));
