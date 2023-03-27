<template>
    <div class="catalogContainer">
        <div class="title">
            <img src="@/assets/img/VectorCatalog-left.svg" alt="">
            <h2>Каталог курсов</h2>
            <img src="@/assets/img/VectorCatalog-right.svg" alt="">
        </div>
        <TheCatalog :curses="get__curses"/>
    </div>
</template>

<script>
import TheCatalog from '@/components/catalog/TheCatalog.vue';

    export default {
    components: { TheCatalog },
    methods: {
        getCursByType(type) {
            return this.get__curses.filter(r => r.type === type)
        }
    },
    computed: {
        get__curses() {
            return this.$store.state.curses.curses
        },
    },

}
</script>

<style lang="scss" scoped>
.catalogContainer{
    width: 1848px;
    @media (max-width: 1366px) {
        width: 1294px;
    }
    .title{
        height: 70px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 34px;
        font-size: 58px;
        line-height: 120%;
        letter-spacing: -0.03em;
        margin-bottom: 120px;
        @media (max-width: 1366px) {
            font-size: 50px;
        }
        img{
            @media (max-width: 1366px) {
                width: 300px;
            }
        }
    }
}
</style>