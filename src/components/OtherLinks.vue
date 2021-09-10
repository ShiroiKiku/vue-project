<template>
  <div class="other-links">
    <div
      class="other-link"
      v-for="item in 10"
      :key="item"
    >
      <a href="">
        <img
          src="../assets/images/18992963858788213.jpg"
          alt=""
        >
      </a>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.other-links
    background-color: transparent
    box-shadow: none
    display: flex
.other-link
    background-color: $box-color
    box-shadow: 5px 5px 5px rgba(122,122,122,0.5)
    margin: 0 5px
    padding: 5px
    &:first-child
        margin: 0 5px 0 0
    &:last-child
        margin: 0 0 0 5px
    >a
        >img
            width: 100%
            object-fit: cover
            padding: 0
            display: block
            max-width: 100%
            margin-left: auto
            margin-right: auto
</style>