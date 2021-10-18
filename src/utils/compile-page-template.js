import Handlebars from "handlebars";

export function compilePageTemplate(template, context) {
    const templateScript = Handlebars.compile(template);
    const html = templateScript(context);
    
    document.querySelector('#root').innerHTML = html;
}