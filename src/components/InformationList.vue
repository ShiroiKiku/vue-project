<template>
  <div class="information-list">
    <ul>
      <li
        v-for="item in 5"
        :key="item"
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, explicabo!</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.information-list
    flex-basis: 69.3%
    margin-left: 10px

    // background-color: transparent

    // box-shadow: none
    // padding: 0
    // >ul
    //     width: 100%
    //     padding: 0 0 0 5px
    //     margin: 0
    //     >li:first-child
    //         margin: 0 10px 10px 0 !important
    //     >li
    //         background-color: $box-color
    //         width: 100%
    //         margin: 10px 10px 10px 0
    //         padding: 5px 1em 5px 1em
    //         box-shadow: 5px 5px 5px rgba(122,122,122,0.5)
</style>