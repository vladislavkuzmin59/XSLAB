<template>
    <div class="benefits">
        <div class="timeline">
            <h3>Мы отказываемся от коротких курсов для высасывания денег в пользу долговременного, качественного обучения</h3>
            <p>С увеличением объёма знаний, которые требуются от специалиста JavaScript, делать курс менее чем на полгода — немыслимо</p>
        </div>
        <img src="@/assets/img/courseBenefits.png" alt="">
        <div class="others__benefits">
            <h3>Из остальных преимуществ</h3>
            <div class="others">
                <div>
                    <h4>Наличие ментора</h4>
                    <p>Человек, который поможет вам разобрать сложную задачу и направить вектор обучения</p>
                </div>
                <div>
                    <h4>Собственный тренажер</h4>
                    <p>Не придется искать задачи которые будут закреплять изученную информацию</p>
                </div>
                <div>
                    <h4>Проработанная программа</h4>
                    <p>Курс подготовлен по самым новым технологиям и принципам. Мы успеем охватить самые важные аспекты</p>
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
    .benefits{
        display: flex;
        flex-direction: column;
        max-width: 1848px;
        height: 1751px;
        margin-top: 125px;
        @media (max-width: 1366px) {
            max-width: 1294px;
        }
        .timeline{
            width: 1380px;
            height: 325px;
            margin-left: 468px;
            display: flex;
            justify-content: space-between;
            @media  (max-width: 1366px) {
                    width: 100%;
                    margin-left: 20px;
                }
            p{
                font-size: 23px;
                line-height: 130%;
                letter-spacing: -0.01em;
                max-width: 443px;
                margin-top: 18px;
                @media  (max-width: 1366px) {
                    font-size: 20px;
                }
            }
            h3{
                font-size: 58px;
                line-height: 130%;
                letter-spacing: -0.03em;
                max-width: 832px;
                @media  (max-width: 1366px) {
                    font-size: 50px;
                }
            }
        }
        img{
            margin-left: 468px;
            margin-top: 50px;
            width: 1380px;
            height: 940px;
            @media  (max-width: 1366px) {
                margin-left: 30px;
            }
        }
        .others__benefits{
            width: 100%;
            height: 316px;
            margin-top: 120px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
                h3{
                    font-size: 58px;
                    line-height: 130%;
                }
                .others{
                    width: 1700px;
                    height: 140px;
                    border-top: 1px solid rgba(33, 33, 33, .15);
                    padding-top: 39px;
                    display: flex;
                    justify-content: space-between;
                    @media (max-width: 1366px) {
                        width: 1290px;
                    }
                    div{
                        text-align: center;
                        height: 140px;
                        max-width: 385px;
                        h4{
                            font-size: 29px;
                            line-height: 130%;
                            @media  (max-width: 1366px) {
                            font-size: 23px;
                            }
                        }
                        p{
                            margin-top: 18px
                            ;
                            opacity: 0.56;
                            font-size: 20px;
                            line-height: 140%;
                            @media (max-width: 1366px) {
                                font-size: 17px;
                            }

                        }
                }
                }
        }
    }
</style>