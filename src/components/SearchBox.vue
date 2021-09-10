<template>
  <div class="search-box">
    <!-- <input-simple></input-simple> -->
    <search-box-list />
  </div>
</template>

<script>
import SearchBoxList from './SearchBoxList.vue'
import InputSimple from './UI/InputSimple.vue'
export default {
  components: { SearchBoxList, InputSimple },

}
</script>

<style lang="sass" scoped>
.search-box
  >.input-simple
    margin: 5px
</style>