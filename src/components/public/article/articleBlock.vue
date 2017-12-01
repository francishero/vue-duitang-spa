<template>
<div class="article-block">
  <router-link :to="articleIndex.url">
    <!-- <a href="/discovery/focus"> -->
    <header class="b-header">
      <a class="b-author-link" href="#">
      <img :src="articleIndex.authorPic" alt="作者头像">
      <span class="b-author">
        {{articleIndex.author}}
      </span>
      </a>
    </header>

    <div class="b-content">
      <div class="b-title">{{articleIndex.title}}</div>
      <div class="b-intro">{{articleIndex.intro}}</div>
      <div class="introPic"><img :src="articleIndex.introPic" alt="封面图片"></div>
   </div>
  </router-link>
</div>
</template>

<script>
export default {
 props: ['articleIndex']
}
</script>

<style lang="stylus" scoped>
  .article-block
    height 3.5rem
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
    height 2rem
    position relative
  .b-title
    font-size 20px
    font-weight bolder
    font-family "微软雅黑"
    margin-bottom .3rem
    max-height 57px
    max-width 7rem
    overflow hidden
  .b-intro
    max-width 7rem
    font-size 14px
    overflow hidden
  .introPic
    width 2rem
    height 2rem
    position absolute
    top 0
    right 0
    margin-left  .5rem
  .introPic>img
    width 100%
    height 100%
</style>
