<template>
    <div class="structure__container">
        <div class="structure__title">
            <h2>Структура курса</h2>
            <img src="@/assets/img/structure.png" alt="">
        </div>
        <div class="structure">
            <div class="item1">Основы JavaScript</div>
            <div class="item2">Теоритический блок</div>
            <div class="item3">Закрепление полученных знаний</div>
            <div class="item4">Готовим проект в портфолио</div>
            <div class="item5">Фидбэк и направление!</div>
            <div class="item6">Отработка на тренажере</div>
            <div class="item7">Ищем работу для вас</div>
            <div class="item8">Устраиваем на работу</div>
        </div>    
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .structure__container{
        margin-top: 336px;
        width: 1847px;
        height: 541px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (max-width: 1366px) {
            width: 1294px;
        }
            .structure__title{
                width: 945px;
                height: 104px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 450;
                font-size: 104px;
                line-height: 100%;
                letter-spacing: -0.04em;
                    img{
                        width: 116px;
                        height: 72px;;
                    }
            }
            .structure{
                width: 100%;
                height: 327px;
                display: grid;
                grid-template-columns: .67fr .72fr 1.2fr .94fr .80fr;
                grid-template-rows: repeat(3, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
                div{
                    height: 109px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 400;
                    font-size: 23px;
                    line-height: 125%;
                    letter-spacing: -0.02em;
                    border: solid 1px #DEDEDE;
                    border-radius: 32px;
                    @media (max-width: 1366px) {
                    font-size: 18px;
                    }
                }
                .item1 {
                     grid-area: 1 / 1 / 2 / 2; 
                    }
                .item2 {
                     grid-area: 1 / 2 / 2 / 3;
                     }
                .item3 { 
                     grid-area: 1 / 3 / 2 / 4; 
                    }
                .item4 {
                    border: dashed 1px rgba(222, 222, 222, 1);
                    grid-area: 1 / 4 / 2 / 5; 
                }
                .item5 {
                     grid-area: 1 / 5 / 2 / 6; 
                    }
                .item6 { 
                    grid-area: 2 / 3 / 3 / 4; 
                    border: solid 1px rgba(5, 0, 255, 1)
                }
                .item7 {
                    border: solid 1px rgba(5, 0, 255, 1);
                    grid-area: 2 / 4 / 3 / 5; 
                    }
                .item8 {
                    color: white;
                    background: rgba(5, 0, 255, 1);
                    grid-area: 3 / 4 / 4 / 5; 
                    }
            }
    }
</style>