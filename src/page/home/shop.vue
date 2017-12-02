<template lang="html">
  <div class="shop">

  <mt-search  cancel-text="取消" placeholder="在商店中搜索..."></mt-search>
  <a href="#"><span class="shop_car"><img src="../../assets/shop-car.png"></span></a>
  <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="shop-swiper">
      <mt-swipe-item v-for="swipeItem in swipeArr"  :key="swipeItem.id"  :style="{backgroundImage:'url(' + swipeItem.swipeUrl + ')'}">
       <div class="shop-swiper-mask"><p class="swipe-desc">{{swipeItem.desc}}</p>
       <p class="swipe-desc_watch">查看详情</p></div>
      </mt-swipe-item>
    </mt-swipe>
  <!-- 图标 -->
  <div class="shop_icon_container">
       <div class="icon_grid" v-for="index in shopArr.length" :key="index.id"><a href="#">
         <img :src="imgArr[index-1]" alt=""><br>
         {{shopArr[index-1]}}</a></div>
  </div>
  <div class="wrapper_three">
    <div class="grid"  v-for="n in 3">
      <div class="grid_hd">新品速递 </div>
        <div class="grid_hd_next">每周三更新</div>
            <img src="../../assets/img/shop_new.png" alt="">
    </div>
  </div>

  </div>
</template>
<script>

export default {
    data() {
      return {
        selected: '商店',
        swipeArr: [],
        shopArr: ['护肤','彩妆','个人护理','配饰包包','文具手账',
        '居家','美食','堆糖制物','畅销单品','全部分类'],
        imgArr: ['/static/shop/s1.png','/static/shop/s2.png','/static/shop/s3.png',
                  '/static/shop/s4.png','/static/shop/s5.png','/static/shop/s6.png',
                  '/static/shop/s7.png','/static/shop/s8.png','/static/shop/s9.png',
                  '/static/shop/s10.png']
      }
    },
    mounted () {
this.axios.get('https://www.easy-mock.com/mock/5a1d88738e6ddb24964d081b/duitang/shop/swipe')
      .then((response) => {
        // console.log(response.data.swipeArr);
        this.swipeArr = response.data.swipeArr

      })
      .catch((error) => {
        console.log(error)
      })

},


}
</script>

<style lang="stylus" scoped>
.shop_car
  position absolute
  right .3rem
  top .2rem
  width .6rem
  height .57rem
  display inline-block
.shop_car>img
  width 100%
  height 100%
.shop-swiper
  text-align center
.shop-swiper-mask
  width 100%
  height 100%
  background-color rgba(230,230,230,.2)
.swipe-desc
  color #fff
  font-size 20px
  padding-top 2rem
.swipe-desc_watch
  margin-top .4rem
  border 1px solid #fff
  width 2rem
  color #fff
  display inline-block
.shop_icon_container
  margin-top .4rem
.icon_grid
  height 2rem
  width 20%
  display inline-block
  text-align center
.icon_grid>a>img
  width 50%
  height 50%
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
  text-align center
.grid_hd
  margin-top .2rem
  font-size 14px
  font-family "微软雅黑"
.grid_hd_next
  margin-top .15rem
  margin-bottom .27rem
  font-size 8px
  color gray
.grid>img
  width 50%
  height 50%
</style>
