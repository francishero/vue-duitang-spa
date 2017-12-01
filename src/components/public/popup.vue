<template>
<div>
<mt-popup v-model="popupVisible" position="right" class="mint-popup" :modal="false">
<div class="popup-close" @click="dpopupMask"><icon name="times"></icon></div>
  <h3>发布新的</h3>
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
  .mint-popup
    width 100%
    height 100%
    background-color #fff
  .popup-close
    width 1rem
    height 1rem
    position absolute
    right 0
    top 0
</style>
