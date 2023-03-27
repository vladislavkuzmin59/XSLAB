<template>
    <div class="subscriptions__container">
        <div class="title">
            <h2>Кастомная система подписок — это удобно</h2>
            <img src="@/assets/img/borderSub.svg" alt="" class="border">
            <img src="@/assets/img/borderSub.svg" alt="" class="border right">
        </div>
        <div class="content">
            <TheSubscription @title="get__title" @price="get__price" :subscriptions="subscriptions"/>
            <div class="basket">
                <div class="items">
                    <p>{{this.title}}</p>
                    <p>{{this.price}}₽</p>
                </div>
                <div class="checkout">
                    <div class="checkout__top">
                        <h3>Чекаут</h3>
                        <div class="amount__sale">
                            <div class="amount__sale-row">
                                <h4>Сумма заказа</h4>
                                <p>{{this.price}}₽</p>
                            </div>
                            <div class="amount__sale-row">
                                <h4>Скидка</h4>
                                <p>{{makeSale}}₽</p>
                            </div>
                        </div>
                    </div>
                    <div class="checkout__bot">
                        <div class="cost">
                            <h3>Итого</h3>
                            <h3>{{makePrice}}₽</h3>
                        </div>
                        <button>Перейти к оформлению</button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
import TheSubscription from '../TheSubscription.vue';

    export default {
        data() {
            return {  
                title: '',
                price: '',
                sale: 1500,     
            }
        },
        props: {
            subscriptions: {
                type: Array,
            },
        },
        computed: {
            makePrice(){
                if(this.price===''){
                    return 0;
                }else{
                    return this.price-this.sale;
                }
            },
            makeSale(){
                if(this.price === ''){
                    return 0;
                }else{
                    if(this.sale === 0){
                        return 0;
                    } else{
                        return this.sale;
                    }
                }
            }
        },
        methods: {
            get__title(title){
                this.title=title;
                console.log('is',this.title);
            },
            get__price(price){
                this.price=price;
                console.log('is', this.price)
            }
        },
    components: { TheSubscription }
}
</script>

<style lang="scss" scoped>
    .subscriptions__container{
        position: relative;
        margin: 334px auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 95%;
        height: 948px;
        .title{
            width: 100%;
            height: 172px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .content{
            display: flex;
            justify-content: space-between;
            width: 100%;
                .basket{
                    width: 443px;
                    height: 673px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    @media (max-width: 1366px){
                        width: 350px;
                    }
                    p{
                        font-size: 18px;
                        line-height: 110%;
                        letter-spacing: -0.01em;
                    }
                        .items{
                            width: 100%;
                            height: 74px;
                            padding: 0 34px 0 34px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            border-radius: 24px;
                            border: 1px solid rgba($color: #212121, $alpha: .15);
                        }
                        .checkout{
                            width: 100%;
                            height: 581px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            padding: 35px 32px;
                            border: 1px solid rgba($color: #212121, $alpha: .15);
                            border-radius: 24px;
                                .checkout__top{
                                    width: 85%;
                                    height: 177px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                        h3{
                                            font-size: 32px;
                                            line-height: 110%;
                                            color: #000000;      
                                        }
                                        .amount__sale{
                                            width: 100%;
                                            height: 114px;
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: space-between;
                                            border-top: 1px solid rgba($color: #212121, $alpha: .15);
                                            border-bottom: 1px solid rgba($color: #212121, $alpha: .15);
                                            padding: 28px 0;
                                                .amount__sale-row{
                                                    height: 20px;
                                                    width: 100%;
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: space-between;
                                                    h4{
                                                        font-size: 18px;
                                                        line-height: 110%;
                                                        opacity: 0.4;
                                                        letter-spacing: -0.01em;
                                                    }
                                                    p{

                                                    }
                                                }
                                        }
                                }
                                .checkout__bot{
                                    width: 85%;
                                    height: 105px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                        .cost{
                                            width: 100%;
                                            height: 25px;
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                                h3{
                                                    font-size: 23px;
                                                    line-height: 110%;
                                                    letter-spacing: -0.01em;
                                                }
                                        }
                                        button{
                                            width: 100%;
                                            height: 56px;
                                            background: #212121;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            color: white;
                                            border-radius: 14px;
                                            font-size: 18px;
                                            line-height: 110%;
                                            letter-spacing: -0.01em;
                                        }
                                }
                        }
                }
        }
        .border{
            position: absolute;
            left: 0%;
            &.right{
                left: 98.6% !important;
                transform: rotate(180deg);
            }
        }
        h2{
            font-size: 78px;
            line-height: 110%;
            letter-spacing: -0.05em;
            text-align: center;
            width: 790px;
        }

    }
</style>