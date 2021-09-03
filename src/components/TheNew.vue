<template>
  <div class="new">
    <a href="">
      <div class="new__img">
        <img
          src="../assets/sereznye-seryj-kot.jpg"
          alt=""
        />
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
      </div>
    </a>
  </div>
</template>

<script></script>

<style lang="sass" scoped>
.new
  margin: 10px
  flex: 1 1 calc( 25% - 20px )
  &__content
    padding: 0 10px
    opacity: 1
    background-color: $box-color
  &__img
    margin: 0
    aspect-ratio: 16/9
    padding: 0
    img
      width: 100%
      object-fit: cover
      padding: 0
      display: block
      max-width: 100%
      margin-left: auto
      margin-right: auto
  &__htext
    p
      text-align: center
  &__title
    text-align: center
    p
      font-weight: 600
</style>
