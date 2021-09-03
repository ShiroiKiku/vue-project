<template>
  <div class="slider">
    <img
      :src="require('../../assets/images/'+item_data[slideItemNum].img).default"
      alt="asdad;kamdjadljaduadandnsanda3"
    >
    <input
      type="button"
      class="slider__btn slider__btn_right"
      value=""
      @click="swipeSliderRight"
    >
    <input
      type="button"
      class="slider__btn slider__btn_left"
      value=""
      @click="swipeSliderLeft"
    >
  </div>
</template>

<script>

export default {

  props: {
    item_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      slideItemNum: 0
    }
  },
  methods: {
    swipeSliderRight() {
      if (this.slideItemNum < (this.item_data.length - 1)) {
        this.slideItemNum++
      }
      else this.slideItemNum = 0
    },
    swipeSliderLeft() {
      if (this.slideItemNum === 0) {
        this.slideItemNum = this.item_data.length - 1
      }
      else
        this.slideItemNum--
    }
  },
  mounted() {

    setInterval(this.swipeSliderRight, 5000)


  }
}


</script>
<style lang="sass" scoped>
.slider
  position: relative
  padding: 5px
  overflow: hidden
  >img

    display: block
    max-width: 100%
    margin-left: auto
    margin-right: auto
    aspect-ratio: 16/9
    width: 100%
    vertical-align: middle
  &__btn
    margin: 5px
    border: 0
    outline: 0
    outline-offset: 0
    background-color: transparent
    position: absolute
    color: dark
    font-size: 4rem
    width: 10%
    height: 100%
    top: 0
    &:hover
      background-color: black
      opacity: 0.2
    &_right
      right: 0
    &_left
      left: 0
// .on-image
//   animation: on-image 4s ease-in infinite
// .out-image
//   animation: out-image 4s ease-in infinite
// @keyframes out-image
//   from
//     transform: translateX(100%)

//   to
//     transform: translateX(0)
// @keyframes on-image
//   from
//     transform: translateX(0)

//   to
//     transform: translateX(100%)
</style>
