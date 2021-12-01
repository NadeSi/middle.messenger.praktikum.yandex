// language=hbs
export default `
    <section class="error">
        <div class="error-container">
            <h1 class="error__status-code">{{statusCode}}</h1>
            <p class="error__text">{{text}}</p>
            <a class="error__link link" href="#">Назад к чатам</a>
        </div>
    </section>
`;
