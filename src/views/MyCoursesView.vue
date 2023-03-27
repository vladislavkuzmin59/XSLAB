<template>
    <div>
        <div class="mycourses__container">
            <TheHeader />
            <div class="title">
                <h2>C возвращением, {{this.name}}</h2>
                <img src="@/assets/img/defaultAvatar.png" alt="">
            </div>
        </div>
        <iframe src="https://www.google.com/" frameborder="0"></iframe>
        <TheCoursesList :myCurses="get__myCourses"/>
    </div>
</template>

<script>
import TheHeader from '@/components/HomePage/TheHeader.vue';
import TheCoursesList from '@/components/MyCourses/TheCoursesList.vue';

export default {
props: {
    name: {
        type: String,
        default: "Дмитрий"
    },
},
computed: {
    get__myCourses() {
        return this.$store.state.myCurses.myCurses 
    }
},
    components: { TheHeader, TheCoursesList }
}
</script>

<style lang="scss" scoped>
.mycourses__container{
    width: 1848px;
    @media (max-width: 1366px) {
        width: 1294px;
    }
    .title{
        margin-top: 34px;
        width: 807px;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
            h2{
                letter-spacing: -0.03em;
                font-size: 58px;
                line-height: 120%;
            }
    }

}
iframe{
    margin-top: 40px;
    width: 100vw;
    height: 860px;
}
</style>