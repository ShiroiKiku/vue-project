<template>
  <input
    class="the-button"
    type="button"
    value=""
  >
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.the-button
  background-color: $box-color
  color: $text-color
  padding: 10px 30px
  text-align: center
  border: 2.5px solid $footer-color
  border-radius: 6px
  font-size: 1.25rem
  &:hover
    border: 2.5px solid $two-color !important
    background-color: $one-color
</style>