<template>
  <par-title>
      Добро пожаловать на сайт ГУК "Областная специальная библиотека для слепых"
</par-title>
<div class="cor-new">
    <div class="slider">
        <img src="../assets/9be12cf070b84745443bec0295eba782.png">
    </div>
    <div class="news" >
        <the-new v-for="item in 4" :key="item"></the-new>
    </div>
</div>

<par-title>
    Новости
</par-title>
<div class="news" >
    <the-new v-for="item in 6" :key="item"></the-new>
</div>

<par-title>
    Дополнительная информация
</par-title>
</template>

<script>
import TheNew from '../components/TheNew.vue'
import ParTitle from '../components/UI/ParTitle.vue'
import TheSlider from '../components/UI/TheSlider.vue'
export default {
  components: { ParTitle, TheNew, TheSlider },

}

</script>

<style lang="sass" scoped>
.cor-new
    display: flex
    flex-direction: row
    // flex-wrap: 
    flex:0 1 300px
    
    >div
        width: 50%
        // &:last-child
        //    max-width: 50%
    
.news
    background-color:$box-color
    display: flex
    flex-wrap: wrap
.slider
    img
        
        aspect-ratio:16/9
        width: 100%
</style>