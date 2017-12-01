<template>
  <div class="content">
    <div class="content_head">
      <a href="#">
        <div class="hot_link content_head_block"></div>
      </a>
      <a href="#">
        <div class="new_link content_head_block"></div>
      </a>
    </div>
    <div class="content_bd">
    <div class="Grid">
      <div class="Grid-cell"><a href="#"></a></div>
      <div class="Grid-cell"><a href="#"></a></div>
      <div class="Grid-cell"><a href="#"></a></div>
    </div>
    <div class="Grid">
      <div class="Grid-cell"><a href="#"></a></div>
      <div class="Grid-cell"><a href="#"></a></div>
      <div class="Grid-cell"><a href="#"></a></div>
    </div>
    <div class="Grid">
      <div class="Grid-cell"><a href="#"></a></div>
      <div class="Grid-cell"><a href="#"></a></div>
      <div class="Grid-cell"><a href="#"></a></div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
data() {
    return {

    };
  },
mounted () {

}
}
</script>

<style lang="stylus" scoped>
.content_head
  height 80px
  border 1px solid red
  display flex
  justify-content center
.content_head_block
  flex 1
  width 3.7rem
  height 40px
  display inline-block
  background pink
  margin .4rem
.Grid
  display flex
  justify-content center
.Grid-cell
  flex 1
  width 3rem
  height 2.5rem
  margin .4rem
  background pink




</style>
