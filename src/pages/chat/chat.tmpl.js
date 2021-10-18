import chatPanel from '../../components/chat/chat-panel'
import messagesTopPanel from "../../components/messages/messages-top-panel";
import messagesViewPanel from "../../components/messages/messages-view-panel";
import messagesInputPanel from "../../components/messages/messages-input-panel";

export const template = `
    <div class="page chat">
        {{> chatPanel}}
        <div class="messages-panel">
            {{> messagesTopPanel}}
            {{> messagesViewPanel}}
            {{> messagesInputPanel}}
        </div>
    </div>
`;
