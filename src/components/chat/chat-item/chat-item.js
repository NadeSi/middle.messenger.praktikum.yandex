import Handlebars from "handlebars";
import {template} from "./chat-item.tmpl";

Handlebars.registerPartial('chatItem', Handlebars.compile(template));

export default template;
