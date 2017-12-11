<template>
<div id="head">
  <div class="searchHead">
    <mt-search  cancel-text="取消" placeholder="搜索感兴趣的内容"></mt-search>
    <div  class="head__add" @click="popupMask">+</div></div>
  </div>
</template>
<script>

export default {
  methods: {
    popupMask () {
      this.$emit('popupMask')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .searchHead
    width 100%
    height 42px
    top 0
    right 0
    left 0
    z-index 100
    background #fefefe
    position fixed
  .head__add
    width .7rem
    position absolute
    right .28rem
    top -.1rem
    color #FE5858
    font-size 44px




</style>
