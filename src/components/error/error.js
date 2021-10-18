import Handlebars from "handlebars";
import {template} from "./error.tmpl";

Handlebars.registerPartial('error', Handlebars.compile(template));

export default template;
