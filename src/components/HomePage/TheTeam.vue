<template>
    <div class="team">
        <h2>Команда. Те, с кем вы пройдете сложный путь в IT</h2>
        <div class="sliders__catalog">
            <div class="catalog__filters">
                <p 
                v-for="item in sliderTypes" 
                :key="item.i" 
                @click="selectedItem=item.data">
                {{item.title}}
                </p>
            </div>
        </div>
        <TheSlider :sliderItem="selectedItem"/>
    </div>
</template>

<script>
import TheSlider from './slider/TheSlider.vue';

    export default {
        data() {
            return {
                selectedItem: this.creators,
                sliderTypes:[
                {
                    title:"Основатели проекта",
                    isActive: true,
                    data: this.creators
                },
                {
                    title:"Преподаватели",
                    isActive: false,
                    data: this.mentors
                },               
                {
                    title:"Вакансии",
                    isActive: false,
                    data: this.jobs   
                },
                {
                    title:"Стажировка",
                    isActive: false,
                    data: this.traineeship   
                },
                ]
            }
        },
        props: {
            mentors: {
                type: Array,
            },
            creators: {
                type: Array,
            },
            jobs:{
                type: Array,
            },
            traineeship:{
                type: Array,
            }
        },
    components: { TheSlider }
}
</script>

<style lang="scss" scoped>
    .team{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 163px;
        h2{
            max-width: 740px;
            font-size: 78px;
            line-height: 110%;
            letter-spacing: -0.05em;
            margin-left: 62px; 
        }
        .sliders__catalog{
            width: 100%;
            height: 58px;

            margin-top: 130px;
            display: flex;
            justify-content: center;
            border-bottom: 1px solid rgba(33, 33, 33, .15);
                .catalog__filters{
                    width: 1584px;
                    height: 28px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 23px;
                    line-height: 110%;
                    cursor: pointer;
                        .border__bottom{
                                border-bottom: 1.25px solid #212121;
                        }
                }
        }
    }
</style>