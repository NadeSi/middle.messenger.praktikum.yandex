import Handlebars from "handlebars";
import {template} from "./chat-panel.tmpl";

Handlebars.registerPartial('chatPanel', Handlebars.compile(template));

export default template;
