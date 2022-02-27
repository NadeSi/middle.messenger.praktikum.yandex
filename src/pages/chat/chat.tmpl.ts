//language=hbs
export default `
    <div class="page chat">
        {{#if chatSidebarRight}}
            {{> chat-sidebar-component chatSidebarRight.props}}
        {{/if}}
        {{#if chatMainPanel}}
            {{> chat-main-panel-component chatMainPanel.props}}
        {{/if}}
        {{#if chatSidebarLeft}}
            {{> chat-sidebar-component chatSidebarLeft.props}}
        {{/if}}
    </div>
`;
