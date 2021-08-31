<template>

<div class="app">
    <the-menu/>
    <div class="container">
        <p>1231</p>
    </div>
   <!-- <router-view></router-view> -->
    <the-footer/>
</div>
  
 
</template>

<script>
import TheMenu from './components/TheMenu.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: { TheMenu, TheFooter },

}
</script>

   
<style lang="sass">
$content-color: #e8ecef
$menu-fc: #1e3a33
$one-color: #d8bebd
$two-color: #b4959b
$footer-color: #b9c0dc
$content-color: #e8ecef
$footer-text: #2949ad
$bor-menu-color: #cfb2b8
$new-con-color: #d6d6ee
$news-hover-color: #ffffff6e
$font-new-box: #080b27
#app 
    font-family: 'Roboto', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    height: 100%
    // text-align: center
    // display: flex
    // flex-direction: column
    // overflow: hidden
    // margin: 0 0
    // padding: 0 0
    // border: 0 0
    // box-sizing: border-box
    // font-weight: 500
   
.app
    text-align: center
    display: flex
    flex-direction: column
    height: 100%
    overflow: hidden
    margin: 0 0
    padding: 0 0
    border: 0 0
    box-sizing: border-box
    font-weight: 500

    

  
    
a
    text-decoration: none
li
    list-style: none

h1, p
    font-family: 'Roboto', sans-serif
//     color: $menu-fc
html, body
    height: 100%
    width: 100%
    margin: 0 0
    padding: 0 0
    border: 0 0
// .wrapper
//     display: flex
//     flex-direction: column
//     min-height: 100%
//     overflow: hidden
.container
    min-width: 100%
   
    flex: 1 1 auto
    margin: 0 auto
// .par-title
//     width: 100%
//     background-color: $new-con-color
//     text-align: center
//     margin: 5px 0
//     p
//         margin: 0
//         padding: 0
//         font-size: 3rem
</style>
