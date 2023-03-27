<template>
    <div class="platform">
        <div class="platform__gif">
            <img src="@/assets/img/gif.gif" alt="">
            <ul>
                <li><span>Промо-ролик о платформе</span></li>
            </ul>
        </div>
        <div class="platform__description">
            <div class="platform__title">
                <h2>Наша гордость. Платформа</h2>
                <div class="signs">
                    <div class="sign">
                        <div class="sign__number">1</div>
                        <div class="sign__text"> <p> самое важное — опыт. Именно этим мы руководствовались, создавая нашу платформу</p></div>
                    </div>
                    <div class="sign">
                        <div class="sign__number">2</div>
                        <div class="sign__text"><p> удобство платформы это отличительный признак команды XSLAB</p></div>
                    </div>
                    <div class="sign">
                        <div class="sign__number">3</div>
                        <div class="sign__text"><p> создание платформы заняло более года, её создавали ведущие специалисты страны </p></div>
                    </div>
                </div>
            </div>
            <div class="platform__buttons">
                <ButtonHomePage button-type="button-blue">Демо-режим платформы</ButtonHomePage>
                <ButtonHomePage button-type="button-white">О создании платформы</ButtonHomePage>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonHomePage from '@/UI/ButtonHomePage.vue';

    export default {
    components: { ButtonHomePage }
}
</script>

<style lang="scss" scoped>
    .platform{
        display: flex;
        width: 100%;
        height: 1093px;
        margin-top: 206px;
        @media (max-width: 1366px) {
            margin-top: 100px;
        }
        .platform__gif{
            width: 1146px;
            height: 1093px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 64px;
            img{
                width: 100%;
                height: 1035px;
            }
            ul{
                list-style-image: url(@/assets/img/li.svg);
            li{
                margin-left: 224px; 
                color: #121212;
                font-size: 23px;
                line-height: 27px;
                padding-left: 18px;
            }
        }
        }
        .platform__description{
            width: 415px;
            height: 1035px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
                .platform__title{
                    width: 100%;
                    height: 478px;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    h2{
                        font-size: 58px;
                        line-height: 120%;      
                        letter-spacing: -0.03em;
                        @media (max-width: 1366px) {
                            font-size: 40px;
                        }
                    }
                    .signs{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 278px;
                        max-width: 366px;
                        @media (max-width: 1366px) {
                            max-width: 260px;
                        }
                    .sign{
                        height: 66px;
                        display: -webkit-box;
                            .sign__number{
                                width: 36px;
                                height: 36px;
                                margin: auto 0;
                                margin-right: 22px;
                                border: 1px solid rgba(33, 33, 33, 1);
                                font-size: 23px;
                                line-height: 120%;
                                border-radius: 20px;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                @media (max-width: 1366px) {
                                    width: 28px;
                                    height: 28px;
                                }
                            }
                            .sign__text{
                                display: flex;
                                align-items: center;
                                height: 100%;
                                max-width: 100%;
                                font-size: 18px;
                                line-height: 120%;
                                @media (max-width: 1366px) {
                                    font-size: 14px;
                                }
                            }
                    }
                }
                }
                .platform__buttons{
                    height: 150px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
        }
    }
</style>