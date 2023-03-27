<template>
    <div class="slider">
        <TheSliderItems :sliderItem="sliderItem"  :selectedItem="selectedItem"/>
        <div class="persons__avatars">
            <div class="person__avatar"
            v-for="item in sliderItem" 
            :key="item.id"
            @click="(selectedItem = item.i)">
            <input type="checkbox">
            <img :src="require(`@/assets/img/${item.avatar}Mini.png`)" alt="" >
            </div>
        </div>
    </div>
</template>

<script>
import TheSliderItems from './TheSliderItems.vue';

    export default {
        data() {
            return {
                selectedItem: 0
            }
        },
        props: {
            sliderItem: {
                type: Array, 
            },
        },
    components: { TheSliderItems }
}
</script>

<style lang="scss" scoped>
    .slider{
        position: relative;
        display: flex;
        overflow: hidden;
        max-width: 100%;
        height: 950px;
        margin-top: 36px;

            .persons__avatars{
                z-index: 9999;
                position: absolute;
                display: flex;
                width: 455px;
                height: 55px;
                right: 37px;
                bottom: 57px;
                .person__avatar{
                    position: relative;
                    width: 52px;
                    height: 52px;
                    cursor: pointer;
                    border-radius: 100px;
                    box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
                    &:not(:last-child){
                        margin-right: 26px;
                       }
                input{
                    position: absolute;
                    display: none;
                    width: 100%;
                    height: 100%;
                    border-radius: 100px;
                    :checked + .person__avatar::before{
                        border: 1px solid #212121;
                    }
                }
                img{
                    z-index: 9999;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>