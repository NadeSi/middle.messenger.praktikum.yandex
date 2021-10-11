import Handlebars from "handlebars";
import inputTemplate from "../../input";
import chatItemTemplate from "../chat-item";

export const template = `
    <div class="chat-panel">
        {{> input inputSearch}}
                
        {{#each chatItemList}}
          {{> chatItemTemplate}}
        {{/each}}
    </div>
`;

Handlebars.registerPartial('input', Handlebars.compile(inputTemplate));
Handlebars.registerPartial('chatItemTemplate', Handlebars.compile(chatItemTemplate));


