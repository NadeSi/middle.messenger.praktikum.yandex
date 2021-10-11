import Handlebars from "handlebars";
import errorTemplate from '../../components/error';
import {compilePageTemplate} from "../../utils/compile-page-template";

const template = `
    <div class="page">
        {{> error}}
    </div>
`;
Handlebars.registerPartial('error', Handlebars.compile(errorTemplate));

const context = {
    statusCode: '404',
    text: 'Страница не найдена'
};

compilePageTemplate(template, context);


