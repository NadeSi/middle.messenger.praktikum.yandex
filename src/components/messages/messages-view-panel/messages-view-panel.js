import Handlebars from "handlebars";
import {template} from "./messages-view-panel.tmpl";

Handlebars.registerPartial('messagesViewPanel', Handlebars.compile(template));

export default template;
