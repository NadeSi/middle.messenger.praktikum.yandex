import {template as settingsTemplate} from './settings-edit-password.tmpl';
import {compilePageTemplate} from "../../utils/compile-page-template";

const context = {
    buttonSave: 'Сохранить',

    formInput: [
        {
            name: 'oldPassword',
            label: 'Старый пароль',
            type: 'password',
            value: 'oldPassword'
        },
        {
            name: 'newPassword',
            label: 'Новый пароль',
            type: "password",
            value: "newPassword"
        },
        {
            name: 'newPasswordCopy',
            label: 'Повторите новый пароль',
            type: "password",
            value: "newPasswordCopy"
        }
    ]

};

compilePageTemplate(settingsTemplate, context);
