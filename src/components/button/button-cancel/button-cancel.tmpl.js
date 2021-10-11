import Handlebars from "handlebars";
import inputTemplate from "../../input";

import './button-cancel.scss';

export const template = `
    <div class="button-cancel-container">
        <button class="button button-cancel"/>
    </div>
`;

Handlebars.registerPartial('input', Handlebars.compile(inputTemplate));
