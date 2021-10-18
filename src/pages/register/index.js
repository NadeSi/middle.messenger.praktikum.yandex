import authTemplate from '../../components/auth';
import {compilePageTemplate} from "../../utils/compile-page-template";

const context = {
    header: 'Регистрация',
    buttonSubmitText: 'Зарегистрироваться',
    linkText: 'Войти',

    formInput: [
        {
            name: 'login',
            label: 'Логин',
            type: "text",
            value: "login"
        },
        {
            name: 'email',
            label: 'Почта',
            type: 'text',
            value: 'email'
        },

        {
            name: 'first_name',
            label: 'Имя',
            type: "text",
            value: "first_name"
        },
        {
            name: 'second_name',
            label: 'Фамилия',
            type: "text",
            value: "second_name"
        },
        {
            name: 'phone',
            label: 'Телефон',
            type: "text",
            value: "phone"
        },
        {
            name: 'password',
            label: 'Пароль',
            type: "password",
            value: "password"
        },
        {
            name: 'password',
            label: 'Пароль (ещё раз)',
            type: "password",
            value: "password"
        }
    ]

};

compilePageTemplate(authTemplate, context);
