<template>
    <div class="title__container">
        <div class="course__title">
            <h1>Курс для программистов</h1>
            <div class="cousre__theme">
                <p>Основы JavaScript</p>
                <img src="@/assets/img/Star1.png" alt="" class="star__one">
                <img src="@/assets/img/Star2.png" alt="" class="star__two">
            </div>
        </div>
        <p class="claim">Необходима подписка Sunlight</p>
        <div class="links">
            <p>Преимущества</p>
            <p>Программа курса</p>
            <p>Преподаватели</p>
        </div>
        <img src="@/assets/img/wallpaper.png" alt="" class="wallpaper">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .title__container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 70px;
        width: 100%;
        height: 1568px;
        .course__title{
            width: 1198ox;
            height: 194px;
            display: flex;
            flex-direction: column;
            align-items: center;
        .cousre__theme{
            margin-top: -15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: rgba(5, 0, 255, 1);
            transform: matrix(1, -0.03, 0.03, 1, 0, 0);
            width: 460px;
            height: 100px;
            color: white;
            font-size: 45px;
            line-height: 115%;
            letter-spacing: -0.05em;
            border-radius: 150px;
            img{
                position: absolute;
            }
            .star__one{
                left:0;
                top: -2px;
            }
            .star__two{
                right: 0;
                bottom: 0;
            }
            }
        h1{
            font-size: 108px;
            line-height: 100%;
            letter-spacing: -0.05em;  
        }
    }
    .claim{
        opacity: .3;
        margin-top: 126px;
        font-size: 23px;
        line-height: 125%;
    }
    .links{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 80px;
        width: 1400px;
        height: 23px;
        letter-spacing: -0.02em;
        font-size: 23px;
        line-height: 100%;
        cursor: pointer;
        @media  (max-width: 1366px) {
        width: 1300px;
        }
    }
    .wallpaper{
        margin-top: 36px;
        width: 100vw;
    }
}
</style>