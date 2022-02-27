//language=hbs
export default `  
    <ul>
        <li><a href={{appRoutes.LOGIN}}>Авторизация</a></li>
        <li><a href={{appRoutes.REGISTER}}>Регистрация</a></li>
        <li><a href={{appRoutes.MESSENGER}}>Список чатов и лента переписки</a></li>
        <li><a href={{appRoutes.SETTINGS}}>Настройки пользователя</a></li>
        <li><a href={{appRoutes.SETTINGS_EDIT}}>Настройки пользователя.Редактирование</a></li>
        <li><a href={{appRoutes.SETTINGS_EDIT_PASSWORD}}>Настройки пользователя.Изменение пароля</a></li>
        <li><a href={{appRoutes.NOT_FOUND}}>Страница 404</a></li>
        <li><a href={{appRoutes.SERVER_ERROR}}>Страница 500</a></li>
    </ul>
`;
