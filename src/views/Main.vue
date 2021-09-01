<template>
  <par-title>
      Добро пожаловать на сайт ГУК "Областная специальная библиотека для слепых"
</par-title>

<div class="slider">
    <img :src="plants.img" >
</div>
<div class="box-news">
    <div class="news" >
        <the-new v-for="item in 2" :key="item"></the-new>
    </div>
    <div class="news" >
        <the-new v-for="item in 2" :key="item"></the-new>
    </div>
</div>
    
<par-title>
    Новости
</par-title>
<div class="news" >
    <the-new v-for="item in 4" :key="item"></the-new>
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
    data(){
        return {
            plants: [
                { name: 'sereznye-seryj-kot', sun: 4, water: 6, care: 5, img: "D:/project/vue-project/public/image/1612298891_13-p-anime-kartinki-na-fioletovom-fone-18.jpg" }
            ]
        }
    }
    // methods: {
    //     getSrc(name) {
    //         var images = require.context('../assets/', false, /\.jpg$/);
    //         return images('./' + name + ".jpg")
    //     }
    // }
  
}
</script>

<style lang="sass" scoped>
.container
    >div:nth-of-type(2)
        flex-basis:49%
    >div:nth-of-type(3)
        flex-basis:49%
        margin-left: 20px
   
// .cor-new
//     display: flex
//     flex-direction: row
//     // flex-wrap: 
//     flex:0 1 300px
//     background-color: #fff
//     >div
//         width: 40%
//         // &:last-child
//         //    max-width: 50%
.box-news
    
.news
    background-color:$box-color
    display: flex
    flex-wrap: nowrap
.slider
    
    padding: 5px
    img
        display: block
        max-width: 100%
        margin-left: auto
        margin-right: auto
        aspect-ratio:16/10
        width: 100%
        vertical-align:middle
</style>