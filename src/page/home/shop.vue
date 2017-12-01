<template lang="html">
  <div class="shop">

  <mt-search  cancel-text="取消" placeholder="在商店中搜索..."></mt-search>
  <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>
       <p class="swipe-desc"></p>
      </mt-swipe-item>
    </mt-swipe>
  <!-- 图标 -->
  <div class="shop_icon_container">
       <div class="icon_grid" v-for="index in shopArr.length" :key="index.id">
         <!-- <img :src="imgArr[index-1]" alt=""><br> -->
         {{shopArr[index-1]}}</div>
  </div>
  <div class="wrapper_three">
    <div class="grid"  v-for="n in 3">
      <div class="grid_hd">
        <div class="grid_hd_next">
          <div class="grid_bd">

          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>
<script>

export default {
   data() {
      return {
        selected: '商店',
        shopArr: ['护肤','彩妆','个人护理','配饰包包','文具手账',
        '居家','美食','堆糖制物','畅销单品','全部分类'],
        imgArr: ['','']
      }
    }

}
</script>

<style lang="stylus" scoped>
.icon_grid
  height 50px
  background-color pink
  width 20%
  display inline-block
  text-align center
.wrapper_three
  width 100%
  height 4.6rem
  display flex
  justify-content space-between
  background-color #f4f4f4
.grid
  margin-top .1rem
  height 4rem
  flex 0 0 32.5%
  background-color #fefefe

</style>
