<template>
    <div class="header">
        <div class="header__content">
            <div class="header__logo">
                <h3>XSLAB</h3>
                <img src="@/assets/img/VectorLogo.svg" alt="">
                <p>Программирование</p>
            </div>
            <div class="header__links">
                <p>образовательные курсы <span>{{cursesLength}}</span></p>
                <p>тарифы и планы</p>
                <p>платформа</p>
                <p>профориентация</p>
            </div>
            <div class="header__profil__notification">
                <img src="@/assets/img/notif.svg" alt="">
                <img :src="require(`@/assets/img/${avatar}.png`)" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            cursesLength: {
                type: Number,
                default: 74
            },
            avatar: {
                type: String,
                default: "defaultAvatar"
            }
        },
    }
</script>

<style lang="scss" scoped>
    .header{
        z-index: 9999;
        background: white;
        position: sticky;
        top: 0;
        width: 100%;
        height: 86px;
        display: flex;
        align-items: center;
        justify-content: center;
            .header__content{
                width: 90%;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .header__logo{
                    width: 282px;
                    height: 27px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    h3{
                        font-size: 23px;
                        line-height: 27px;
                    }
                    p{
                        opacity: 0.3;
                        font-size: 18px;
                        line-height: 120%;
                    }    
                }
                .header__links{
                    width: 709px;
                    height: 20px;
                    margin-left: 311px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                        p{
                            font-size: 17px;
                            line-height: 20px;
                            cursor: pointer;
                                span{
                                    color: white;
                                    background:  #0500FF;
                                    font-size: 12px;
                                    padding: 4px 6px;
                                    border-radius: 100px;
                                }
                         &:hover{
                            border-bottom: solid 1px #212121;
                         }
                        }
                }
                .header__profil__notification{
                    width: 92px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                        img{
                            cursor: pointer;
                        }

                }
            }
    }
    @media  (max-width: 1366px) {
        .header__links{
            margin-left: 20px !important;
        }
        .header__logo{
            width: 265px !important;
        }
    }
</style>