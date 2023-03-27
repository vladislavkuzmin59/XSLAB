<template>
    <footer class="footer__container">
        <div class="footer">
            <div class="footer__content">
                <div class="footer__title__links">
            
                    <h2>XSLAB Courses</h2>
                    <div class="links">
                        <div class="links__left">
                            <p>оформить подписку</p>
                            <p>работать с нами</p>
                            <p>конфиденциальность</p>
                            <p>договор аферты</p>
                        </div>
                        <div class="links__right">
                            <p>новости проекта</p>
                            <p>как работает сервис</p>
                            <p>каталог курсов</p>
                            <p>подписки</p>
                        </div>
                    </div>
                
                
                </div>
                <div class="footer__agreement__addres">
                    <div class="addres__number">
                        <p class="addres">Санкт-Петербург, Средний проспект 32/A строение 1</p>
                        <p class="number">+7 (999) 380 23-23</p>
                    </div>
                    <div class="agreement__mail">
                        <p class="agreement">Пользовательское соглашение</p>
                        <p class="mail">commons@xslab.ru</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footer__container{
        height: 660px;
        flex: 0 0 auto;
        .footer{
            width: 100%;
            height: 100%;
            margin-top: 73px;
            background: url(@/assets/img/footerbg.png);
            color: #fff;
            padding: 141px 157px;
            @media (max-width: 1366px) {
                padding: 100px 100px;
            }
                .footer__content{
                    width: 1606px;
                    height: 423px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                        .footer__title__links{
                            display: flex;
                            justify-content: space-between;
                            height: 177px;
                            width: 1184px;
                            h2{
                                font-weight: 450;
                                font-size: 58px;
                                line-height: 67px;
                                border-bottom: 1.25px solid rgba(255, 255, 255, .3);
                                height: 73px;
                                @media (max-width: 1366px) {
                                    font-size: 50px;
                                }
                            }
                        .links{
                            width: 603px;
                            height: 166px;
                            display: flex;
                            justify-content: space-between;
                                .links__left{
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    height: 100%;
                                }
                                .links__right{
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    height: 100%;
                                }
    
                                p{
                                    cursor: pointer;
                                    opacity: .3;
                                    font-size: 23px;
                                    line-height: 120%;
                                    @media (max-width: 1366px) {
                                        font-size: 20px;
                                    }
                                }
                        }
                    }
                    .footer__agreement__addres{
                        width: 1606px;
                        height: 90px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 18px;
                        line-height: 135%;
                        @media (max-width: 1366px) {
                            font-size: 16px;
                        }
                        .addres__number{
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            .addres{
                                max-width: 235px;
                            }
                            .number{
                                opacity: .3;
                                cursor: pointer;
                            }
                        }
                        .agreement__mail{
                            height: 100%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            height: 58px;
                            margin-top: 32px;
                            .mail{
                                opacity: .3;
                                cursor: pointer;
                            }
                        }
                    }
                }
        }
}
</style>