import Handlebars from "handlebars";
import {template} from "./auth.tmpl";

Handlebars.registerPartial('auth', Handlebars.compile(template));

export default template;
