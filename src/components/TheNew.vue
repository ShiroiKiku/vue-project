<template>
<div class="new">
    <div class="new__img" >
        <img src="../assets/sereznye-seryj-kot.jpg" alt="">
    </div>
    <div class="new__content">
        <div class="new__title">
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div class="new__htext">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam molestiae esse dolores ratione voluptas voluptate officiis quo explicabo temporibus corporis.</p>   
        </div>

        <input type="button" class="new__btn" value="Просмотреть">
    </div>
</div>
</template>

<script>


</script>

<style lang="sass" scoped>
.new

    position: relative
    margin: 7px

    flex: 1 0 30%
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
        aspect-ratio:16/9
        padding: 0
        img
            width: 100%
            height: 100%

            object-fit: cover
            padding: 0
    &__title
        p
            font-weight: 600
    p
        color: $font-new-box
</style>