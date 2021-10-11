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
    statusCode: '500',
    text: 'Мы уже устраняем неисправность, попробуйте обновить страницу позже.'
};

compilePageTemplate(template, context);
