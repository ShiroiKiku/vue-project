<template>
  <div class="g-header">
    <div class="g-header__content">
      <div class="g-header__logo">
        <img
          src="../assets/images/icons/sarspeclib_logo_4_0_2.png"
          alt=""
        >
      </div>
      <div class="g-header__text">
        <h3>Добро пожаловать на сайт </h3>
        <h2>ГУК "Областная специальная библиотека для слепых"</h2>
      </div>
      <div class="g-header__search">
        <h3>Поиск по сайту</h3>
        <input
          type="text"
          placeholder="Введите запрос"
        >
      </div>
      <div class="g-header__some">
        <div class="some-img">
          <a href="">
            <img
              src="../assets/images/icons/youtube-svgrepo-com.svg"
              alt=""
            >
          </a>
        </div>

        <div class="some-img">
          <a href="">
            <img
              src="../assets/images/icons/vk-svgrepo-com.svg"
              alt=""
            >
          </a>
        </div>
        <div class="some-img">
          <a href="">
            <img
              src="../assets/images/icons/odnoklassniki-logo-svgrepo-com.svg"
              alt=""
            >
          </a>
        </div>
        <div class="some-img">
          <a href="">
            <img
              src="../assets/images/icons/instagram-svgrepo-com.svg"
              alt=""
            >
          </a>
        </div>
        <div class="some-img">
          <a href="">
            <img
              src="../assets/images/icons/facebook-svgrepo-com.svg"
              alt=""
            >
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="sass" scoped>
.g-header
  color: $text-color
  border-bottom: 2px solid $bor-menu-color
  background-color: $g-header-color

  display: flex
  justify-content: center

  &__content
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    max-width: 1500px
    >div
      margin: 0 5px
  &__text
    >h2
      padding: 0
      margin: 5px 0 0 0
    >h3
      padding: 0
      margin: 0 0 5px 0
  >div
    padding: 5px 0
    text-align: center
    margin: 0px 15px
  &__logo

    height: 5rem
    >img
      height: 100%
  &__search

    >h3
      margin: 0
    >input
      background-color: $box-color
      color: $text-color
      margin-top: 5px
      width: 20rem
      height: 1.4rem
      text-align: center
      border: 2.5px solid $two-color
      border-radius: 6px
      &:hover
        border: 2.5px solid $one-color !important

  &__some
    display: flex
  &__icon

.some-img
  padding: 5px
  width: 3rem
  margin: 0
  img
    width: 100%

.some-img

  filter: opacity(25%)
</style>