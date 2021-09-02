<template>
  <div class="split-carousel">
    <split-carousel-item
      v-for="item in carousel_data"
      :key="item.id"
      :item_data="item"
    />
  </div>
</template>

<script>
import SplitCarouselItem from "./SplitCarouselItem.vue"
export default {
  components: { SplitCarouselItem },
  props: {
    carousel_data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {}
};
</script>
<style lang="sass" scoped>
.cor
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
