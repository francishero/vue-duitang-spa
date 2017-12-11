<template>
<div class="popup">
<mt-popup v-model="popupVisible" position="right" class="mint-popup" :modal="false">
<div class="popup-close" @click="dpopupMask">
  <icon name="times"></icon>
</div>
<div class="publish">发布新的</div>
  <div class="publish_items">
    <div class="publish_item"><a href="#"><img src="../../assets/img/publish_photo.png" alt=""></a><br>图片</div>
    <div class="publish_item"><a href="#"><img src="../../assets/img/publish_article.png" alt=""></a><br>文章</div>
  </div>
</mt-popup>



</div>
</template>
<script>

export default {

  props: ['popupVisible'],
  methods: {
    dpopupMask () {
      //触发事件
     this.$emit('dpopupMask')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .popup
    width 100%
    height 100%
  .mint-popup
    width 100%
    height 100%
    background-color #fff
  .popup-close
    position absolute
    right .3rem
    top .3rem
    color gray
  .publish
    margin-top 150px
    margin-bottom 40px
    height 50px
    font-size 24px
    text-align center
    font-family "微软雅黑"
  .publish_items
    display flex
    justify-content center
  .publish_item
    flex 1
    text-align center
    border-radius 50%
    font-size 14px
    font-family "微软雅黑"
  .publish_item>img
    width 90px
    height 90px
    border-radius 50%
    display inline-block
    margin-bottom .2rem
</style>
