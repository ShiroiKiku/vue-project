<template>
  <par-title>
      Добро пожаловать на сайт ГУК "Областная специальная библиотека для слепых"
</par-title>
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
export default {
  components: { ParTitle, TheNew },

}
</script>

<style lang="sass" scoped>
.news
    // margin: 10px 0
    background-color: $new-con-color
    display: flex
    flex-wrap: wrap
    
</style>