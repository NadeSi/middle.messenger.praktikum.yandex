import Handlebars from "handlebars";
import {template} from "./messages-input-panel.tmpl";

Handlebars.registerPartial('messagesInputPanel', Handlebars.compile(template));

export default template;
