<template>

  <par-title>
    Добро пожаловать на сайт ГУК "Областная специальная библиотека для
    слепых"
  </par-title>
  <split-carousel :corusel_data="sliderItems" />
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
</template>

<script>
import TheNew from "../components/TheNew.vue"
import ParTitle from "../components/UI/ParTitle.vue"
import SplitCarousel from "../components/UI/SplitCarousel.vue"

export default {
  components: { ParTitle, TheNew, SplitCarousel },
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
        flex-basis: 49%
    >div:nth-of-type(3)

        flex-basis: 49%
        margin-left: 20px
.news
    background-color: $box-color
    display: flex
    flex-wrap: nowrap
</style>
