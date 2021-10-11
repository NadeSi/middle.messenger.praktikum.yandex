import inputTemplate from "../../input";
import Handlebars from "handlebars";

export const template = `
    <div class="messages-input-panel">
        <button class="button-add-file"></button>
        {{> input inputMessage}}
        <button class="button-send"></button>
    </div>
`;

Handlebars.registerPartial('input', Handlebars.compile(inputTemplate));

