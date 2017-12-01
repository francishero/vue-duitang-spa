<template>
<div class="article-desc">
  <article class="article-container">
     <header class="article-header">
  <h1 class="article-title">{{article.title}}</h1>
  <a class="author-link" href="#">
    <img :src="article.authorPic">
    <h3 class="author-name">
      {{article.author}}</h3>
    <span class="time-browser">{{article.time}} · 浏览{{article.browser}}</span>
  </a>
  </header>
  <div class="article-content">{{article.content}}</div>
  </article>
</div>

</template>

<script>
export default {
 props: ['article']
}
</script>

<style lang="stylus" scoped>
  .article-desc
    margin-top 15px
    padding .7rem
  .article-title
    font-size 26px
    font-weight bolder
    margin-bottom .17rem
  .author-link
    display block
    width 100%
    height 40px
    position relative
    font-size 14px
  .author-link>img
    border-radius 50%
    width 1rem
    height 1rem
  .author-name
    position absolute
    left 1.2rem
    top 0
    font-weight bolder
  .time-browser
    font-size 12px
    margin-left .1rem
  .article-content
    margin-top 10px
    font-size 16px
</style>
