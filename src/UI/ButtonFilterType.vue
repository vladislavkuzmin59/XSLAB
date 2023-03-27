<template>
<button :class="{selected: buttonStatus}" @click="buttonStatus = !buttonStatus">
    <slot />
</button>
</template>

<script>
    export default {
        data() {
            return {
                buttonStatus: false,
            }
        },
        props: {
            buttonText: {
                type: String, 
            },
        },
    }
</script>

<style lang="scss" scoped>
button{
    width: fit-content !important;
    border: 1px solid rgba(33, 33, 33, 0.1);
    border-radius: 100px;
    padding: 16px 22px;
    background: inherit;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -0.01em;
    &.selected{
        background: #212121;
        color: white;
        border: none;
    }
}
</style>