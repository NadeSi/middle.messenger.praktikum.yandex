import input from '../../input'
import chatItem from '../../chat/chat-item'

export const template = `
    <div class="chat-panel">
        {{> input inputSearch}}
                
        {{#each chatItemList}}
          {{> chatItem}}
        {{/each}}
    </div>
`;


