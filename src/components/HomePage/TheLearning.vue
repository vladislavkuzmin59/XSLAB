<template>
    <div class="learning">
        <div class="learning__content">
        <h2>Обучаем только самым нужным профессиям в России</h2>
            <div class="learning__cards">
                <div class="learning__card">
                    <div class="card__text">
                        <h3>Нам невыгодно</h3>
                        <p>Зачем нам потеть над репутацией, обучая людей Flash? Мы работаем только с тем, что востребовано на рынке</p>
                    </div>
                </div>
                <div class="learning__card">
                    <div class="card__text">
                        <h3>Вам захочеться остаться</h3>
                        <p>Люди всегда хотели заработать больше денег. Дав им такую возможность — мы удержим их без обмана и хитростей</p>
                    </div>
                </div>        
                <div class="learning__card small">
                    <div class="card__text">
                        <h3>12 <img src="@/assets/img/arrow-up-right 1.svg" alt=""></h3>
                        <p>Больше аргументов за то, чтобы остаться</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .learning{
        width: 1845px;
        height: 295px;
        padding-top: 75px;
        margin: 100px auto 0;
        border-top: 1px solid rgba(33, 33, 33, .15);
        @media (max-width: 1366px) {
            width: 1294px;
        }
        .learning__content{
            display: flex;
            justify-content: space-between;
            height: 220px;
            h2{
                font-size: 58px;
                line-height: 120%;
                letter-spacing: -0.03em;
                margin: 0 !important;
                @media (max-width: 1366px) {
                    font-size: 40px;
                }
            }
            .learning__cards{
                width: 1147px;
                height: 100%;
                display: flex;
                justify-content: space-between;
                @media (max-width: 1366px) {
                    width: 900px;
                }
                .learning__card{
                    width: 444px;
                    padding: 33px 48px 39px 39px;
                    margin-right: 25px;
                    border: solid 1px rgba(33, 33, 33, .1);
                    border-radius: 32px;
                    .card__text{
                        display: flex;
                        flex-direction: column;
                        h3{
                            margin: 0 !important;
                            font-weight: 450;
                            font-size: 28px;
                            line-height: 120%;
                            @media screen and (max-width: 1366px) {
                                font-size: 20px;
                            }
                        }
                        p{
                            font-size: 18px;
                            line-height: 145%;
                            margin-top: 36px;
                            @media screen and (max-width: 1366px) {
                                font-size: 14px;
                            }
                        }
                    }
                }
                & .small{
                    width: 209px !important;
                    padding: 23px 16px 39px 27px;
                    margin-right: 0 !important;
                }
            }
        }
    }
</style>