import authTemplate from '../../components/auth';
import {compilePageTemplate} from "../../utils/compile-page-template";

const context = {
    header: 'Вход',
    buttonSubmitText: 'Войти',
    linkText: 'Регистрация',

    formInput: [
        {
            name: 'login',
            label: 'Логин',
            type: 'text',
            value: 'login'
        },
        {
            name: 'password',
            label: 'Пароль',
            type: "text",
            value: "password"
        }
    ]

};

compilePageTemplate(authTemplate, context);
