<template>

<!-- <div class="app"> -->
    <the-menu/>
    <div class="container">
        <router-view></router-view>
    </div>
    <the-footer/>
<!-- </div> -->
  
 
</template>

<script>
import TheMenu from './components/TheMenu.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: { TheMenu, TheFooter },

}
</script>

   
<style lang="sass">
.container
    width: 90%
    max-width: 1700px
    flex: 1 1 auto
    margin: 0 auto

</style>
