export default{
    state:{
        subscriptions:[
            {
                subscriptionType: "Базовая подписка",
                title: "Dark",
                courses: "178 курсов",
                benefit: "тренажер",
                gives: "только просмотр уроков, без контроля успехов",
                price: 2590,
                background: "#151515",
                color: "white"
            },
            {
                subscriptionType: "Улучшенная подписка",
                title: "Spotlight",
                courses: "224 курса",
                benefit: "составим резюме",
                gives: "просмотр уроков, доступ к книгам, тренажер на повышение квалификации, помощь с резюме, собственное API",
                price: 3990,
                background: "#0500FF",
                color: "white"
            },
            {
                subscriptionType: "Топовый вариант",
                title: "Sunlight",
                courses: "332 курсов",
                benefit: "трудоустроим",
                gives: "все от предыдущих подписок + вызов ментора раз в день, гарантия трудоустройства",
                price: 10000,
                background: "#FFDF37",
                color: "#151515"
            },
        ],
    }
}