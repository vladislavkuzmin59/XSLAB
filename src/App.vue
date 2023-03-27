<template>
    <router-view></router-view>
</template>

<script>
  export default {
    
  }
</script>
<style lang="scss" scoped>
@import url(@/css/reset.css);
@font-face {
  font-family: "Suisse Int'l";
  src: url(@/assets/fonts/Suisse\ Intl.ttf);
}
  *{
    font-family: "Suisse Int'l";
    color: #212121;
    letter-spacing: -0.01em;
    font-weight: 400;
    input{
      outline: none;
    }
  }
</style>