<template>
    <button :class="buttonType">
        <slot />
    </button>
</template>

<script>
    export default {
        props: {
            buttonType: {
                type: String,
            },
        },
    }
</script>

<style lang="scss" scoped>
    button{
        height: 62px;
        width: fit-content;
        border-radius: 100px;
        font-size: 23px;
        line-height: 115%;
        cursor: pointer;
        padding: 18px 42px;
        @media (max-width: 1366px) {
            font-size: 20px;
        }
        &.button-blue{
            background: #0500FF;
            color: white;
            border: none;
        }
        &.button-white{
            background: inherit;
            border: 1px solid #212121;
        }
    }
</style>