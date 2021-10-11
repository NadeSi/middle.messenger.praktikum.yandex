import Handlebars from "handlebars";
import chatPanelTemplate from "../../components/chat/chat-panel";
import messagesTopPanelTemplate from "../../components/messages/messages-top-panel";
import messagesViewPanelTemplate from "../../components/messages/messages-view-panel";
import messagesInputPanelTemplate from "../../components/messages/messages-input-panel";

export const template = `
    <div class="page chat">
        {{> chat-panel}}
        <div class="messages-panel">
            {{> messages-top-panel}}
            {{> messages-view-panel}}
            {{> messages-input-panel}}
        </div>
    </div>
`;

Handlebars.registerPartial('chat-panel', Handlebars.compile(chatPanelTemplate));
Handlebars.registerPartial('messages-top-panel', Handlebars.compile(messagesTopPanelTemplate));
Handlebars.registerPartial('messages-view-panel', Handlebars.compile(messagesViewPanelTemplate));
Handlebars.registerPartial('messages-input-panel', Handlebars.compile(messagesInputPanelTemplate));
