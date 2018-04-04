<template>
<div class="article-block" @click="loadIt">
  <router-link :to="articleIndex.url">
    <header class="b-header">
      <a class="b-author-link" href="#">
      <img v-lazy="articleIndex.authorPic" alt="作者头像">
      <span class="b-author">
        {{articleIndex.author}}
      </span>
      </a>
    </header>

    <div class="b-content">
      <div class="b-title">{{articleIndex.title}}</div>
      <div class="b-intro">{{articleIndex.intro}}</div>
      <div class="introPic"><img v-lazy="articleIndex.introPic" alt="封面图片"></div>
      <div class="b-like"><icon name="eye" width="13px"></icon>&nbsp;<span>{{articleIndex.browser}}</span>&nbsp;&nbsp;&nbsp;<icon name="star" width="12px"></icon>&nbsp;<span>{{articleIndex.browser}}</span></div>
   </div>
  </router-link>
</div>
</template>

<script>
export default {
 props: ['articleIndex'],
 methods: {
   loadIt () {

     this.$indicator.open('加载中...');
     let that = this;
     setTimeout(function(){
       that.$indicator.close();
     },500)


  }
 }
}
</script>

<style lang="stylus" scoped>
  .article-block
    height 3.8rem
    padding .3rem
    border-bottom .2rem solid #f4f4f4
    overflow hidden
  .b-header
    position relative
    height 1rem
  .b-author-link>img
    border-radius 50%
    width .6rem
    height .6rem
    margin-right .3rem
  
    
  .b-author
    position absolute
    top 0
    font-size 14px
  .b-content
    height 2.3rem
    position relative
  .b-title
    font-size 16px
    font-weight bold
    font-family "微软雅黑"
    margin-bottom .3rem
    max-height 57px
    max-width 7rem
    overflow hidden
  .b-intro
    max-width 6.7rem
    font-size 14px
    overflow hidden
  .introPic
    width 2.2rem
    height 2.2rem
    position absolute
    top 0
    right 0
    margin-left  .3rem
  .introPic>img
    width 100%
    height 100%
  .b-like
    width 4rem
    height .7rem
    margin-top .35rem
    font-size 8px
    opacity .8
  .b-like>span
    margin-top .2rem
</style>
