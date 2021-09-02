<template>
  <div class="new">
    <div class="new__img">
      <img src="../assets/sereznye-seryj-kot.jpg" alt="" />
    </div>
    <div class="new__content">
      <div class="new__title">
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div class="new__htext">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          molestiae esse dolores ratione voluptas voluptate officiis quo
          explicabo temporibus corporis.
        </p>
      </div>

      <input type="button" class="new__btn" value="Просмотреть" />
    </div>
  </div>
</template>

<script></script>

<style lang="sass" scoped>

.new
    margin: 5px
    position: relative
    // margin: 7px
    flex: 1 1 31%

    &:hover
        .new__content
            opacity: 1
            transition: 1s

    &__content
        padding: 10px
        opacity: 0
        background-color: $news-hover-color
        position: absolute
        bottom: 0

    &__img
        margin: 0
        aspect-ratio:16/9
        padding: 0
        img
            width: 100%
            object-fit: cover
            padding: 0
            display: block
            max-width: 100%
            margin-left: auto
            margin-right: auto
    &__title
        p
            font-weight: 600
</style>
