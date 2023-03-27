<template>
    <div class="img__container">
        <img src="@/assets/img/sloganImg-notBlur.png" alt="">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.img__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 1014px;
    margin-top: 32px;
    @media  (max-width: 1366px) {
        height: 650px;
    }
    img{
        position: absolute;
        filter: blur(7px);
        width: 100vw;
    }
}
</style>