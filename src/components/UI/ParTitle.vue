<template>
    <div class="par-title">
        <p>
            <slot></slot>
        </p>
    </div>
</template>
<style lang="sass">
.par-title
    width: 100%
    background-color: $box-color
    text-align: center
    
    p
        margin: 0
        padding: 0.5rem
        font-size: 2rem
        
</style>