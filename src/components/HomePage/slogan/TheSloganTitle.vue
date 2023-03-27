<template>
    <div class="slogan__title">
        <h1>Поднимаем уровень IT образования в России</h1>
        <div class="slogan__buttons">
            <ButtonHomePage button-type="button-blue">Тарифы обучения</ButtonHomePage>
            <ButtonHomePage button-type="button-white">Наша платформа</ButtonHomePage>
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
.slogan__title{
    width: 1058px;
    height: 331px;
    margin-left: 117px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        h1{
            font-size: 104px;
            line-height: 110%;
            letter-spacing: -5px;
            margin: 0 !important;
        }
        .slogan__buttons{
            width: 565px;
            display: flex;
            justify-content: space-between;
        }
}
</style>