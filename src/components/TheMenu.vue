<template>
  <nav class="menu" >
    
    <ul class="menu__list">
        <li>
            <a href="" class="menu__link">Главная</a>
        </li>
        <li>
            <a href="" class="menu__link" >Новости</a>
            <ul class="sub-menu__list" >
                <li>
                    <a href="" class="sub-menu__link">Важные новости</a>
                </li>
                <li>
                    <a href="" class="sub-menu__link">Выставки</a>
                </li>
                <li>
                    <a href="" class="sub-menu__link">Мероприятия</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="" class="menu__link">О библиотеке</a>
            <ul class="sub-menu__list">
                <li>
                    <a href="" class="sub-menu__link">Контакты</a>
                </li>
                <li>
                    <a href="" class="sub-menu__link">Связь с нами</a>
                </li>
                <li>
                    <a href="" class="sub-menu__link">СМИ о нас</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="" class="menu__link">Тифлобиблиографический отдел</a>
            <ul class="sub-menu__list">
                <li>
                    <a href="" class="sub-menu__link">Библиограф рекомендует</a>
                    </li>
                    <li>
                    <a href="" class="sub-menu__link">Мобильный помощник</a>
                    </li>
                    <li>
                    <a href="" class="sub-menu__link">Специалистам</a>
                    </li>
            </ul>
        </li>
        <li>
            <a href="" class="menu__link">Новые поступления</a>
        </li>
        <li>
            <a href="" class="menu__link">Доступная среда</a>
            <ul class="sub-menu__list">
                <li>
                    <a href="" class="sub-menu__link">Приказы по утверждению Порядков доступности</a>
                    </li>
                    <li>
                    <a href="" class="sub-menu__link">Условия доступности инвалидов</a>
                    </li>
                    <li>
                    <a href="" class="sub-menu__link">Методическое обеспечение в области предоставления услуг людям
    с физическими ограничениями здоровья и формирования доступной среды</a>
                    </li>
                    <li>
                    <a href="" class="sub-menu__link">КАЛЕНДАРНЫЙ ПЛАН ИНФОРМАЦИОННО-МЕТОДИЧЕСКИХ МЕРОПРИЯТИЙ</a>
                    </li>
            </ul>
        </li>
        <li>
            <a href="" class="menu__link">Из жизни незрячих</a>
        </li>
        <li>
            <a href="" class="menu__link">Цифровая библиотека</a>
        </li>
        <li>
            <a href="" class="menu__link">FAQ</a>
        </li>
    </ul>
 
</nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style  lang="sass">
.menu
    border-bottom: 2px solid $bor-menu-color
    color: $menu-fc
    background-color: $one-color
    height: 3rem
    a
        color: $menu-fc
    &__list
        padding: 0
        height: 3rem
        display: flex
        margin: 0
        justify-content: center
        align-items: center
        &:hover
        >li
            padding: 0 0.5rem
            height: 3rem
            display: flex
            justify-content: center
            &:hover
                background-color: $two-color
                .sub-menu
                    &__list
                        display: block
    &__link
        line-height: 3rem
    li
        position: relative
.sub-menu
    &__list
        display: none
        position: absolute
        top: 20px
        padding: 1.9rem 0px 0px 0px
        >li
            border-width: 0px 2px
            border-style: solid
            border-color: $bor-menu-color
            padding: 0.5rem
            background-color: $one-color
            text-align: left
            &:hover
                background-color: $two-color
            // &:first-child
            //     border-width: 2px 2px 0px
            &:last-child
                border-width: 0px 2px 2px
    &__link
        padding: 0
</style>
