<template>
    <div class="slogan">
        <TheSloganTitle />
        <TheSloganFeature />
        <TheSloganImg />
    </div>  
</template>

<script>
import TheSloganFeature from './TheSloganFeature.vue';
import TheSloganTitle from './TheSloganTitle.vue';
import TheSloganImg from './TheSloganImg.vue'

    export default {
    components: { TheSloganTitle, TheSloganFeature, TheSloganImg }
}
</script>

<style lang="scss" scoped>
    .slogan{
       margin-top: 54px;
       width: 1848px;
       margin: 0 auto;
       @media  (max-width: 1366px) {
            width: 1294px;
       }
    }
</style>