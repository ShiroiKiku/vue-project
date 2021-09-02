<template>

  <par-title>
    Добро пожаловать на сайт ГУК "Областная специальная библиотека для
    слепых"
  </par-title>
  <slider :item_data="sliderItems" />
  <!-- <split-carousel :carousel_data="sliderItems" /> -->
  <div class="box-news">
    <div class="news">
      <the-new
        v-for="item in 2"
        :key="item"
      ></the-new>
    </div>
    <div class="news">
      <the-new
        v-for="item in 2"
        :key="item"
      ></the-new>
    </div>
  </div>

  <par-title> Новости </par-title>
  <div class="news">
    <the-new
      v-for="item in 4"
      :key="item"
    ></the-new>
  </div>

  <par-title> Дополнительная информация </par-title>
  <information-image />
  <information-list />
</template>

<script>
import InformationImage from '../components/InformationImage.vue'
import InformationList from '../components/InformationList.vue'
import TheNew from "../components/TheNew.vue"
import ParTitle from "../components/UI/ParTitle.vue"
import Slider from '../components/UI/Slider.vue'
import SplitCarousel from "../components/UI/SplitCarousel.vue"

export default {
  components: { ParTitle, TheNew, SplitCarousel, Slider, InformationImage, InformationList },
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
.container
  >div:nth-of-type(2)
    flex-basis: 48.995%
    margin: 5px 10px 5px 0
  >div:nth-of-type(3)
    flex-basis: 48.995%
    margin: 5px 0 5px 10px
.news
  background-color: $box-color
  display: flex
  flex-wrap: nowrap
</style>
