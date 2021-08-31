<template>
  <footer class="footer">
  
        <div class="footer__row">
            <ul class="footer__list">
                <li>
                    <a href="" class="footer__link">
                        Важные новости
                    </a>
                </li>
                <li>
                    <a href="" class="footer__link">
                        Важные новости
                    </a>
                </li>
                <li>
                    <a href="" class="footer__link">
                        Важные новости
                    </a>
                </li>
                <li>
                    <a href="" class="footer__link">
                        Важные новости
                    </a>
                </li>
                <li>
                    <a href="" class="footer__link">
                        Важные новости
                    </a>
                </li>
            </ul>
        </div>
 
</footer>
</template>

<script>
export default {

}
</script>

<style lang="sass">
$footer-text: #2949ad
$footer-color: #b9c0dc
.footer
    background-color: $footer-color
    

    &__list
        display: flex
        position: relative
    &__row
        display: flex

        justify-content: center
        align-items: center
    a
        color: $footer-text
    li
        overflow: hidden
        padding: 0rem 0.5rem
</style>