import {template as settingsTemplate} from './settings-edit.tmpl';
import {compilePageTemplate} from "../../utils/compile-page-template";

const context = {
    buttonSave: 'Сохранить',

    formInput: [
        {
            name: 'display_name',
            label: 'Имя в чате',
            type: "text",
            value: "display_name"
        },
        {
            name: 'first_name',
            label: 'Имя',
            type: 'text',
            value: 'first_name'
        },
        {
            name: 'second_name',
            label: 'Фамилия',
            type: "text",
            value: "second_name"
        },
        {
            name: 'login',
            label: 'Логин',
            type: "text",
            value: "login"
        },
        {
            name: 'email',
            label: 'Почта',
            type: "text",
            value: "email"
        }
        ,
        {
            name: 'phone',
            label: 'Телефон',
            type: "text",
            value: "phone"
        }
    ]

};

compilePageTemplate(settingsTemplate, context);
