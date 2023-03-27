<template>
    <div class="parthners">
        <div class="parthners__title">
            <h2>Официальные партнеры XSLAB по вопросам трудоустройства выпускников</h2>
            <img src="@/assets/img/parthenrs.png" alt="">
        </div>
        <div class="employment">
            <p>>68% выпускников устраиваются на работу в течение прохождения курса</p>
            <p>средняя зарплата выпускника наших курсов около 48 тысяч рублей</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .parthners{
        width: 1802px;
        height: 357px;
        margin-top: 129px;
        display: flex;
        justify-content: space-between;
        @media  (max-width: 1366px) {
            width: 1294px;
        }
        .parthners__title{
            width: 846px;
            height: 357px;
            font-size: 58px;
            line-height: 130%;
            letter-spacing: -0.03em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width: 1366px) {
                font-size: 50px;
            }
            img{
                width: 316px;
                height: 100px;
                @media (max-width: 1366px) {
                    width: 280px;
                    height: 80px;
                }
            }
        }
        .employment{
            width: 725px;
            height: 90px;
            display: flex;
            justify-content: space-between;
                p{
                    height: 90px;
                    font-size: 23px;
                    line-height: 130%;
                    letter-spacing: -0.02em;
                    max-width: 325px;
                    @media (max-width: 1366px) {
                        font-size: 18px;
                    }
                }
        }
    }
</style>