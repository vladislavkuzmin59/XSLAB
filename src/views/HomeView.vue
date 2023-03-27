<template>
    <div class="home__container">
      <div class="content">
        <TheHeader />
        <TheSlogan />
        <TheLearning />
        <ThePlatform />
        <TheTeam :mentors="get__mentors" :creators="get__creators" :jobs="get__jobs" :traineeship="get__traineeship"/>
        <TheSubscriptions :subscriptions="get__subscriptions"/>
        <TheHomeCatalog :curses="get__curses"/>
      </div>
      <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/HomePage/TheHeader.vue';
import TheSlogan from '@/components/HomePage/slogan/TheSlogan.vue';
import TheLearning from '@/components/HomePage/TheLearning.vue';
import ThePlatform from '@/components/HomePage/ThePlatform.vue'
import TheTeam from '@/components/HomePage/TheTeam.vue';
import TheSubscriptions from '@/components/HomePage/TheSubscriptions.vue';
import TheFooter from '@/components/HomePage/TheFooter.vue';
import TheHomeCatalog from '@/components/HomePage/TheHomeCatalog.vue';
  export default { 
    computed: {
      get__mentors() {
        return this.$store.state.mentors.mentors
      },
      get__creators() {
        return this.$store.state.mentors.creators
      },
      get__jobs() {
        return this.$store.state.mentors.jobs
      },
      get__traineeship() {
        return this.$store.state.mentors.traineeship
      },
      get__subscriptions() {
        return this.$store.state.subscriptions.subscriptions
      },
      get__curses() {
            return this.$store.state.curses.curses
        },
    },
    components: { TheHeader, TheSlogan, TheLearning, ThePlatform, TheTeam, TheSubscriptions, TheFooter,TheHomeCatalog }
}
</script>

<style lang="scss" scoped>
.home__container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .content{
    flex: 1 0 auto;
  }
}
</style>
