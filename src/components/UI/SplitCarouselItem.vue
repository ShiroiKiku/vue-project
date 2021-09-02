<template>
  <div class="split-carousel-item">
    <img
      :src="require('../../assets/images/'+item_data.img).default"
      alt="asdad;kamdjadljaduadandnsanda3"
    >
  </div>
</template>

<script>
export default {

  props: {
    item_data: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {}
  },
  computed: {}
}
</script>

<style lang="sass" scoped>
.split-carousel-item
  padding: 5px
  >img
    display: block
    max-width: 100%
    margin-left: auto
    margin-right: auto
    aspect-ratio: 16/10
    width: 100%
    vertical-align: middle
</style>