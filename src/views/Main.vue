<template>
  <slider :item_data="sliderItems" />

  <par-title> Новости </par-title>

  <the-new
    v-for="item in 8"
    :key="item"
  ></the-new>

  <par-title> Дополнительная информация </par-title>

  <information-image />

  <information-list />
  <other-links />

  <a
    class="a-btn"
    href=""
  >
    <the-button value="Оценка качества услуг" />
  </a>
  <a
    class="a-btn"
    href=""
  >
    <the-button value="Задать вопрос" />
  </a>

</template>

<script>
import InformationImage from '../components/InformationImage.vue'
import InformationList from '../components/InformationList.vue'
import OtherLinks from '../components/OtherLinks.vue'
import TheNew from "../components/TheNew.vue"
import ParTitle from "../components/UI/ParTitle.vue"
import Slider from '../components/UI/Slider.vue'
import TheButton from '../components/UI/TheButton.vue'

export default {
  components: { ParTitle, TheNew, Slider, InformationImage, InformationList, OtherLinks, TheButton },
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
.a-btn
  margin: 5px
</style>
