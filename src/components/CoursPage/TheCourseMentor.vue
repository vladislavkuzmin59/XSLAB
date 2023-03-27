<template>
    <div class="mentor">
        <div class="mentor__photho">
            <img src="@/assets/img/Star3.png" alt="" class="star__one">
            <img src="@/assets/img/Star4.png" alt="" class="star__two">
        </div>
        <div class="mentor__content">
            <div class="mentor__name">
                <div class="mentor__avatar__name">
                    <img src="@/assets/img/mentorAvatar.png" alt="">
                    <h2>Александр Пушкин</h2>
                </div>
                <p>Автор и преподаватель курса</p>
                <p>Ведущий методологист XSLAB, Сеньор-разработчик Java</p>
            </div>
            <div class="mentor__data">
                <div class="data__card one">
                    <h2>7</h2>
                    <p>Лет успешно работает в нашей команде</p>
                </div>
                <div class="data__card two">
                    <h2>>100.000</h2>
                    <p>Человек прошли через курсы, которые создал Саша</p>
                </div>
                <div class="data__card three">
                    <h2>12</h2>
                    <p>Лет работает JS-программистом</p>
                </div>
                <div class="data__card four">
                    <a href=""><p>Статьи</p></a><img src="@/assets/img/arrow-up-right 1.svg" alt="">
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
.mentor{
    margin-top: 251px;
    width: 1848px;
    height: 1000px;
    display: flex;
    justify-content: space-between;
    padding-right: 125px;
    @media  (max-width: 1366px) {
        width: 1294px;
    }
        .mentor__photho{
            position: relative;
            width: 912px;
            height: 1000px;
            background: url(@/assets/img/Pushkin.png);
                .star__one{
                    position: absolute;
                    bottom: -60px;
                    left: -30px
                }
                .star__two{
                    position: absolute;
                    right: -60px;
                    top: -20px;
                }

        }
        .mentor__content{
            width: 655px;
            height: 893px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media  (max-width: 1366px) {
                width: 440px;
            }
                .mentor__name{
                    width: 100%;
                    height: 293px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                        .mentor__avatar__name{
                            display: flex;
                            img{
                                width: 60px;
                                height: 60px;
                                margin-right: 14px;
                                @media (max-width: 1366px) {
                                    width: 40px;
                                    height: 40px;
                                }
                            }
                            h2{
                                font-weight: 400;
                                font-size: 58px;
                                line-height: 135%;
                                letter-spacing: -0.04em;
                                @media  (max-width: 1366px) {
                                    font-size: 50px;
                                }
                            }
                        }
                        p{
                            font-size: 23px;
                            line-height: 135%;
                            letter-spacing: -0.02em;
                            margin-left: 36px;
                            @media (max-width: 1366px) {
                                font-size: 18px;
                            }
                        }
                }
                .mentor__data{
                    width: 581px;
                    height: 411px;
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    grid-template-rows: repeat(5, 1fr);
                    grid-column-gap: 0px;
                    grid-row-gap: 0px;
                    @media  (max-width: 1366px) {
                        margin-left: 10px;
                    }
                }
                .data__card{
                    a{
                        color: inherit !important;
                        text-decoration: none;
                        border-bottom: 1px solid rgba($color: #212121, $alpha: .2);
                        margin-right: 6px;
                    }
                    h2{
                        font-size: 58px;
                        line-height: 135%;
                        letter-spacing: -0.04em;
                        margin-bottom: 10px;
                        @media  (max-width: 1366px) {
                            font-size: 50px;
                        }
                    }
                    p{
                        font-size: 23px;
                        line-height: 135%;
                        letter-spacing: -0.01em;
                        @media  (max-width: 1366px) {
                            font-size: 18px;
                        }
                    }
                    &.one{
                        width: 195px;
                        grid-area: 1 / 1 / 2 / 2;
                        margin: 0 100px 80px 0;
                        @media  (max-width: 1366px) {
                            width: 160px;
                        }
                    }
                    &.two{
                        width: 255px;
                        grid-area: 1 / 2 / 2 / 3;
                        margin: 0 0 80 0;
                        @media  (max-width: 1366px) {
                            width: 145px;
                        }
                    }
                    &.three{
                        width: 214px;
                        grid-area: 2 / 1 / 3 / 2;
                        margin-right: 80px;
                        @media  (max-width: 1366px) {
                            width: 184px;
                        }
                    }
                    &.four{
                        width: 287px;
                        display: flex;
                        align-items: center;
                        grid-area: 2 / 2 / 3 / 3;
                        @media  (max-width: 1366px) {
                            width: 157px;
                        }
                    }
                }
        }
}
</style>