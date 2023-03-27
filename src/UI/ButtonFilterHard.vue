<template>
   <button :class="{active: isSelected}" @click="isSelected = !isSelected">
    <slot />
   </button>
</template>

<script>
    export default {
        data() {
            return {
                isSelected: false,
            }
        },
    }
</script>

<style lang="scss" scoped>
    button{
        width: fit-content !important;
        background: inherit;
        padding: 16px 22px;
        border: 1px solid rgba(33, 33, 33, 0.1);
        font-size: 18px;
        line-height: 120%;
        letter-spacing: -0.01em;
        border-radius: 100px;
            &.active{
                background: #0500FF;
                color: white;
                border: none;
            }
    }
</style>