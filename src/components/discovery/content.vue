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
      <div class="Grid-cell" v-for="n in 9" :key="n.id" >
        <a href="#"><img :src="url[n-1]" alt=""></a>
        {{contentDesc[n-1]}}
      </div>
    </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      contentDesc: ['视频','堆糖class','头像定制','美容美妆','美发造型','时尚街拍','美食菜谱','手工DIY','插画绘画'],
      url: ['/static/contentImg/c1.png','/static/contentImg/c2.png','/static/contentImg/c3.png',
            '/static/contentImg/c4.png','/static/contentImg/c5.png','/static/contentImg/c6.png',
            '/static/contentImg/c7.png','/static/contentImg/c8.png','/static/contentImg/c9.png']
    };
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>
.content
  height 20rem
  background-color #f4f4f4
.content_head
  height 80px
  border 1px solid red
  display flex
  background-color #fefefe
  justify-content center
  margin-bottom .5rem
.content_head_block
  flex 1
  width 3.7rem
  height 40px
  display inline-block
  background pink
  margin .4rem
.Grid
  display flex
  width 10rem
  flex-wrap wrap
  padding-top .5rem
  background-color #fefefe
  justify-content center
.Grid-cell
  flex 0 0 25%
  height 2.4rem
  margin .4rem
  padding-bottom .4rem
.Grid-cell a>img
  width 100%
  height 100%
  border-radius 10%
</style>
