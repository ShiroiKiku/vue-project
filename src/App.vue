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
    width: 85%
    max-width: 1700px
    flex: 1 1 auto
    margin: 0 auto
    display: flex
    flex-wrap: wrap
    >div
        flex-basis:100%
        margin: 10px 0px
        box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5)
        background-color: $box-color

</style>
