import {template as settingsTemplate} from './chat.tmpl';
import {compilePageTemplate} from "../../utils/compile-page-template";

import './chat.scss';

const context = {
    inputSearch: {
        name: 'inputSearch',
        type: 'text',
        value: 'Поиск'
    },
    chatItemList: [
        {},
        {}
    ],

    userName: 'userName',
    inputMessage: {
        name: 'message',
        type: 'text',
        value: 'Сообщение',
        // placeholder: 'Сообщение'
    }

};

compilePageTemplate(settingsTemplate, context);
