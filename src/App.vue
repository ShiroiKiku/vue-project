<template>
  <g-header />
  <the-menu />
  <div class="container">
    <router-view></router-view>
  </div>
  <the-footer />
</template>

<script>
import TheMenu from "./components/TheMenu.vue";
import TheFooter from "./components/TheFooter.vue";
import GHeader from './components/GHeader.vue';

export default {
  components: { TheMenu, TheFooter, GHeader },
};
</script>

<style lang="sass">
.container
  width: 95%
  max-width: 1500px
  flex: 1 1 auto
  margin: 0 auto
  display: flex
  flex-wrap: wrap
  padding: 25px 0px
  >div
    flex-basis: 100%
    margin: 10px 0px
    box-shadow: 5px 5px 5px rgba(122,122,122,0.5)
    background-color: $box-color
    padding: 0
</style>
