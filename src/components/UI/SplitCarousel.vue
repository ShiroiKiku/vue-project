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
</style>
