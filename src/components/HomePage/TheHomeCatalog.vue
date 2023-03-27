<template>
    <div class="catalog__container">
        <div class="title">
            <img src="@/assets/img/catalogTitle.svg" alt="">
            <h2>Осталось найти нужный курс и приступить к работе</h2>
        </div>
        <div class="catalog__content">
             <div class="content__links">
                <p>Каталог курсов</p>
                <p>Платформа</p>
                <p>Преподаватели</p>
                <p>Вакантные места</p>
             </div>
            <TheCatalog :curses="this.curses"/>
        </div>
    </div>
</template>

<script>
import TheCatalog from '../catalog/TheCatalog.vue';

export default {
    data() {
        return {

        };
    },
    props: {
        curses: {
            type: Array,
        },
    },
    components: { TheCatalog }
}
</script>

<style lang="scss" scoped>
.catalog__container{
    width: 1848px;
    height: 1726px;
    margin: 300px auto 97px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1366px) {
        width: 1294px;
    }
        .title{
            display: flex;
            align-items: center;
            margin-left: 82px;
            width: 1183px;
            height: 169px;
            font-size: 78px;
            line-height: 110%;
            letter-spacing: -0.04em;
            @media (max-width: 1366px) {
                font-size: 68px;
            }
                img{
                    margin-right: 120px;
                }
        }
        .catalog__content{
            width: 100%;
            height: 1383px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
                .content__links{
                    width: 100%;
                    height: 51px;
                    border-top: 1px solid rgba(33, 33, 33, .15);
                    display: flex;
                    justify-content: space-between;
                    padding-top: 23px;
                        p{
                            font-size: 23px;
                            line-height: 120%;
                            letter-spacing: -0.03em;
                            &:hover{
                                text-decoration: underline;
                                cursor: pointer;
                            }
                        }
                }
                .catalog{
                    max-height: 1200px;
                }
        }
}
</style>