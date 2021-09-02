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
</style>