<template>
    <div class="slogan__feature">
        <div class="feature">
            <h3>Современно</h3>
            <h4>Топовые лекторы</h4>
        </div>
        <div class="feature">
            <h3>Безопасно</h3>
            <h4>Госдеп не пройдет</h4>
        </div>
        <div class="feature">
            <h3>Уютно</h3>
            <h4>Атмосферные занятия</h4>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .slogan__feature{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 180px;
        border-bottom: 1px solid rgba(33, 33, 33, .1);
            .feature{
                display: flex;
                height: 43px;
                h3{
                    font-size: 23px;
                    line-height: 100%;
                    margin-right: 16px;
                }
                h4{
                    font-size: 14px;
                    line-height: 100%;
                    opacity: 0.3;
                }
            }
    }
</style>