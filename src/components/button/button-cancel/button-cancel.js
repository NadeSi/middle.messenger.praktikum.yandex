import Handlebars from "handlebars";
import {template} from "./button-cancel.tmpl";

Handlebars.registerPartial('button-cancel', Handlebars.compile(template));

export default template;
