import Handlebars from "handlebars";
import {template} from "./messages-top-panel.tmpl";

Handlebars.registerPartial('messagesTopPanel', Handlebars.compile(template));

export default template;
