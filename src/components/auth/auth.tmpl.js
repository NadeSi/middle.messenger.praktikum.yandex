import Handlebars from "handlebars";
import inputTemplate from "../../components/input";

export const template = `
    <div class="page">
        <h1>{{header}}</h1>
        <form>
        {{#each formInput}}
          {{> input}}
        {{/each}}
        </form>
        <button>{{buttonSubmitText}}</button>
        <a href="#">{{linkText}}</a>
    </div>
`;

Handlebars.registerPartial('input', Handlebars.compile(inputTemplate));
