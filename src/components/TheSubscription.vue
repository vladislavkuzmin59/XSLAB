<template>
    <div class="subscriptions">
        <div class="subscription" 
        v-for="item in subscriptions" :key="item.id"
        :style="{background: item.background, color: item.color}">
            <div class="card__header">
                <div class="subscription-type">{{item.subscriptionType}}</div>
                <div class="title">{{item.title}}</div>
            </div>
            <div class="card__content">
                <div class="card__body">
                <div class="include__benefit">
                    <div class="include">
                        <p>включает в себя</p>
                        <h3>{{item.courses}}</h3>
                    </div>
                    <div class="benefit">
                        <p>преимущество</p>
                        <h3>{{item.benefit}}</h3>
                    </div>
                </div>
                <div class="gives">
                    <p>что даёт?</p>
                    <h3>{{item.gives}}</h3>
                </div>
                </div>
             <div class="card__footer">
                 <div class="price">
                        <div>{{item.price}}₽</div>
                        <p>за месяц</p>
                    </div>
                    <div class="footer__buttons">
                        <p @click="send__price(item.price), send__title(item.title)">добавить</p>
                        <p>подробнее</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            subscriptions: {
                type: Array,
            },
        },
        methods: {
            send__title(title) {
                this.$emit('title', title,)
            },
            send__price(price) {
                this.$emit('price', price)
            },
        },
    }
</script>

<style lang="scss" scoped>
.subscriptions{
    display: flex;
    width: 75%;
    height: 676px;
    justify-content: space-between;
    .subscription{
        width: 443px;
        height: 676px;
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 40px;
        @media (max-width: 1366px){
            width: 350px;
        }
            .card__header{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 177px;
                margin-left: 43px;
                margin-top: 36px;
                    .subscription-type{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 200px;
                        height: 40px;
                        border: 1px solid rgba($color: white, $alpha: .15);
                        font-size: 16px;
                        line-height: 110%;
                        border-radius: 100px;
                    }     
                    .title{
                        font-size: 78px;
                        line-height: 110%;
                        letter-spacing: -0.05em;
                    }
                }
            .card__content{
                width: 323px;
                height: 373px;
                margin-left: 32px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                    .card__body{
                        display: flex;
                        flex-direction: column;
                        p{
                            font-size: 15px;
                            line-height: 110%;
                            opacity: 0.3;
                        }
                        h3{
                            font-size: 23px;
                            line-height: 110%;
                            margin-top: 4px;
                        }
                        .include__benefit{
                            display: flex;
                                .include{
                                    margin-right: 42px;
                                    h3{
                                        width: 125px;
                                    }
                                }
                                .benefit{
                                    h3{
                                    width: 200px;
                                }
                            }

                        }
                        .gives{
                            width: 375px;
                            margin-top: 40px;
                        }
                    }
                    .card__footer{
                        display: flex;
                        flex-direction: column;
                        height: 102px;
                        justify-content: space-between;
                            .price{
                                display: flex;
                                align-items: center;
                                cursor: pointer;
                                    div{
                                        width: fit-content;
                                        color: #151515;
                                        padding: 12px 32px;
                                        height: 49px;
                                        background: white;
                                        margin-right: 48px;
                                        font-size: 23px;
                                        line-height: 110%;
                                        border-radius: 100px;
                                    }
                                    p{
                                        font-size: 15px;
                                        line-height: 110%;
                                        opacity: 0.3;
                                    }
                            }
                            .footer__buttons{
                                display: flex;
                                justify-content: space-between;
                                width: 312px;
                                height: 27px;
                                    p{
                                        cursor: pointer;
                                        font-size: 23px;
                                        line-height: 110%;
                                        border-bottom: 1px solid rgba($color: white, $alpha: .25);
                                    }
                            }
                    }
            }
    }
}
</style>