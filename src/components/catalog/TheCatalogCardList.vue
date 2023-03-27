<template>
    <div class="cards">
        <div class="card" v-for="item in curses"
         :key="item.id"
         :style="{background: item.background, color: item.color}">
            <div class="card__header">
                    <div class="card__time">
                        <img src="@/assets/img/clock.svg" alt="">
                        <p>{{item.time}}</p>
                    </div>
                    <div class="card__title">
                        <div class="bestCourse" :style="{display: item.best, color: item.bestColor, background: item.bestBack}">
                            <!-- <img :src="require(`@/assest/img/lightning${item.bestLightning}.svg`)" alt=""> -->
                            <img :src="require(`@/assets/img/lightning${item.bestLightning}.svg`)" alt="">
                            <p>Топовый курс</p>
                        </div>
                        <h2>{{item.title}}</h2>
                    </div>
            </div>
            <p class="subscription">Только по {{item.sub}}</p>
            <div class="buttons">
                <p>Добавить</p>
                <p class="grey">Подробнее</p>
            </div>
        </div>       
    </div>
</template>

<script>
    export default {
        props: {
            curses: {
                type: Array,
            },
        },
    }
</script>

<style lang="scss" scoped>
    .cards{
        width: fit-content;
        display: flex;
        flex-wrap: wrap;
        max-width: 1849px;
            .card{
                width: 443px;
                height: 600px;
                padding: 46px 0 35px 40px;
                border-radius: 24px;
                margin-bottom: 50px;
                margin-right: 15px;
                @media (max-width: 1366px) {
                    width: 334px;
                    height: 500px;
                }
                .card__header{
                    display: flex;
                    flex-direction: column;
                    height: 312px;
                    justify-content: space-between;
                    .card__time{
                        height: 25px;
                        display: flex;
                        align-items: center;
                        font-weight: 450;
                        font-size: 16px;
                        line-height: 115%;
                        letter-spacing: -0.02em;
                        opacity: 0.4;
                        p{
                            height: 16px;
                        }
                            img{
                                width: 17px;
                                height: 17px;
                                margin-right: 11px;
                            }
                    }
                    .card__title{
                        .bestCourse{
                            display: flex;
                            width: 168px;
                            height: 44px;
                            padding: 12px 16px;
                            margin-bottom: 29px;
                            border-radius: 100px;
                            img{
                                width: 20px;
                                height: 20px;
                                margin-right: 9px;
                                font-weight: 450;
                                font-size: 16px;
                                line-height: 115%;
                            }
                        }
                        h2{
                            max-width: 300px;
                            font-weight: 450;
                            font-size: 53px;
                            line-height: 100%;
                            letter-spacing: -0.04em;
                            @media (max-width: 1366px) {
                                max-width: 160px;
                                font-size: 40px;
                            }
                        }
                    }
            }
            .subscription{
                max-width: 145px;
                font-weight: 450;
                font-size: 18px;
                line-height: 125%;
                margin-top: 30px;
                @media (max-width: 1366px) {
                    font-size: 16px;
                    max-width: 230px;

                }
            }
            .buttons{
                width: 275px;
                margin-top: 110px;
                display: flex;
                justify-content: space-between;
                    p{
                        font-weight: 450;
                        font-size: 23px;
                        line-height: 115%;
                        border-bottom: 1.25px solid #FFFFFF;
                        cursor: pointer;
                        @media(max-width: 1366px) {
                            font-size: 20px;
                        }
                        &.grey{
                            opacity: .45;
                        }
                    }                
            }
            }
    }
</style>