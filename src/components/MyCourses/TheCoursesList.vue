<template>
    <div class="mycourses">
        <div class="cours" v-for="item in myCurses" :key="item.id" :style="{color: item.color, background: item.back}">
            <img :src="require(`@/assets/img/courseAvatar${item.cursAvatar}.png`)" alt="">
            <div class="cours__title__time">
                <div class="time" :style="{color: item.timeColor}">
                    <div class="lightning" :style="{display: item.lightning}">
                        <img :src="require(`@/assets/img/lightning${item.lightningColor}.svg`)" alt="">
                    </div>
                    <p>{{item.time}}</p>
                </div>
                <h3>{{item.title}}</h3>
            </div>
            <div class="curatots__progress">
                <div class="curators">
                    <div class="curators__title">
                        <p>Кураторы курса</p>
                    </div>
                    <div class="curators__content">
                        <div class="mentor" v-for="it in item.curators" :key="it.id">
                            <img :src="require(`@/assets/img/${it.avatar}.png`)" alt="">
                            <p>{{it.name}}</p>
                        </div>
                    </div>
                </div>
                <div class="progress">
                    <div class="progress__title">Прогресс</div>
                    <div class="progress__content">
                        <div class="percentage">
                            <img :src="require(`@/assets/img/flag${item.flagColor}.svg`)" alt="">
                            <p>{{item.percentage}}%</p>
                        </div>
                        <p class="motivation">{{item.motivation}}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () { 
    },
    props: {
        myCurses: {
            type: Array,
        },
    },
}
</script>

<style lang="scss" scoped>
.mycourses{
    width: 1615px;
    margin: 75px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media  (max-width: 1366px) {
        width: 100%;
    }
        .cours{
            background: orange;
            width: 100%;
            height: 190px;
            display: flex;
            align-items: center;
            padding-right: 106px;
            border-radius: 32px;
            border: 1px solid rgba(33, 33, 33, .15);
            margin-top: 70px;
                img{
                    margin-right: 58px;
                }
                .cours__title__time{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 300px;
                    height: 130px;
                    margin-right: 200px;
                    @media (max-width: 1366px) {
                        margin-right: 120px;
                    }
                        h3{
                            font-weight: 500;
                            font-size: 31px;
                            line-height: 125%;
                            letter-spacing: -0.02em;
                            @media (max-width: 1366px) {
                                font-size: 22px;
                            }
                        }
                        .time{
                            font-weight: 450;
                            font-size: 13px;
                            line-height: 115%;
                            width:  fit-content;
                            height: 36px;
                            border-radius: 100px;
                            background: black;
                            display: flex;
                            align-items: center;
                            padding: 10px 16px;
                                .lightning{
                                    width: 16px;
                                    height: 16px;
                                    margin-right: 9px;
                                }
                        }
                }
                .curatots__progress{
                    width: 479px;
                    height: 129px;
                    display: flex;
                    justify-content: space-between;
                        .curators{
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            width: 171px;
                            height: 129px;
                                .curators__title{
                                    width: 141px;
                                    height: 36px;
                                    border-radius: 100px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border: 1px solid rgba($color: #fff, $alpha: .25);
                                    font-weight: 450;
                                    font-size: 14px;
                                    line-height: 115%;
                                }
                                .curators__content{
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    height: 73px;
                                    width: 171px;
                                        .mentor{
                                            display: flex;
                                            align-items: center;
                                            height: 30px;
                                            font-weight: 450;
                                            font-size: 16px;
                                            line-height: 125%;
                                            letter-spacing: -0.02em;
                                            @media (max-width: 1366px) {
                                                font-size: 12px;
                                            }
                                            img{
                                                width: 30px;
                                                height: 30px;
                                                margin-right: 12px;
                                            }
                                        }
                                    }

                        }
                        .progress{
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            width: 220px;
                            height: 105px;
                                .progress__title{
                                    width: 99px;
                                    height: 36px;
                                    border-radius: 100px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border: 1px solid rgba($color: #fff, $alpha: .25);
                                    font-weight: 450;
                                    font-size: 14px;
                                    line-height: 115%;
                                }
                                .progress__content{
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    width: 220px;
                                    height: 52px;
                                    font-weight: 450;
                                    font-size: 16px;
                                    line-height: 150%;
                                    letter-spacing: -0.02em;
                                    @media  (max-width: 1366px) {
                                        font-size: 12px;
                                    }
                                        .percentage{
                                            display: flex;
                                            img{
                                                margin-right: 6px;
                                            }
                                        }
                                }
                        }
                }

        }
}
</style>