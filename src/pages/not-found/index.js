import error from '../../components/error'

import {compilePageTemplate} from "../../utils/compile-page-template";

const template = `
    <div class="page">
        {{> error}}
    </div>
`;

const context = {
    statusCode: '404',
    text: 'Страница не найдена'
};

compilePageTemplate(template, context);


