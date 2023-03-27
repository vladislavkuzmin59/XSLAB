<template>
    <div class="slider__items" :style="{'margin-left':'-' + (100 * selectedItem) + '%'}">
        <div class="slider__item" 
        v-for="item in sliderItem" 
        :key="item.id">
            <img :src="require(`@/assets/img/${item.avatar}.png`)" alt="">
            <div class="person__data">
                <h2>{{item.name}}</h2>
                <p>{{item.position}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            sliderItem: {
                type: Array, 
            },
            selectedItem: {
                type: Number,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .slider__items{
        position: relative;
        display: flex;
        transition: all 1s ease;
        .slider__item{
            width: 100vw;
            height: 950px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            .person__data{
                position: absolute;
                bottom: 46px;
                left: 36px;
                color: white;
                h2{
                    font-size: 58px;
                    line-height: 110%;
                    letter-spacing: -0.03em;
                }
                p{
                    font-size: 23px;
                    line-height: 140%;
                }
            }
        }
    }
</style>