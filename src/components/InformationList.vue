<template>
  <div class="information-list">
    <ul>
      <li
        v-for="item in 5"
        :key="item"
      >
        <a href="">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, explicabo!</p>
        </a>

        <hr />
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
  padding: 5px
  flex: auto
  margin-left: 10px
  >ul
    padding: 0 20px
</style>