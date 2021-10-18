import Handlebars from "handlebars";
import {template} from "./input.tmpl";

Handlebars.registerPartial('input', Handlebars.compile(template));

export default template;
