<template>
  <par-title>
    Добро пожаловать на сайт ГУК "Областная специальная библиотека для
    слепых"
  </par-title>

  <slider :item_data="sliderItems" />

  <search-box />

  <par-title> Новости </par-title>

  <the-new
    v-for="item in 8"
    :key="item"
  ></the-new>

  <par-title> Дополнительная информация </par-title>

  <information-image />

  <information-list />
</template>

<script>
import InformationImage from '../components/InformationImage.vue'
import InformationList from '../components/InformationList.vue'
import SearchBox from '../components/SearchBox.vue'
import TheNew from "../components/TheNew.vue"
import ParTitle from "../components/UI/ParTitle.vue"
import Slider from '../components/UI/Slider.vue'

export default {
  components: { ParTitle, TheNew, Slider, InformationImage, InformationList, SearchBox },
  data() {
    return {
      sliderItems: [
        {
          id: 1,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, provident.",
          img: "606036.jpg",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, provident.",
          img: "1612155318_11-p-foto-anime-fioletovii-fon-13.png",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, provident.",
          img: "1612298891_13-p-anime-kartinki-na-fioletovom-fone-18.jpg",
        },
        {
          id: 4,
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, provident.",
          img: "Shinobu-Kocho-from-Kimetsu-no-Yaiba-Anime-Wallpaper-4k-Ultra-.jpg",
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.slider
  flex-basis: 50%
.search-box
  margin-left: 10px
  flex-basis: calc(50% - 20px )
</style>
