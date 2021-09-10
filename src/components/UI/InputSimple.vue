<template>
  <div class="input-simple">
    <input
      type="text"
      placeholder=""
    >
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.input-simple
  flex-basis: 100%
  display: block
  >input
    width: 100%
    height: 2rem
    padding: 0 10px
    text-decoration: underline
    font-family: 'Roboto', sans-serif
    font-weight: 600
    color: $text-color
    border-radius: 4px
    border-color: $input-color
    background-color: $box-color
</style>