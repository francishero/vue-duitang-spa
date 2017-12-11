<template>
  <div class="beauty">
    <!-- 下拉刷新 -->
    <mt-loadmore class="mt-loadmore1" top-pull-text="加载更多" top-drop-text="释放加载"
      :top-method="loadTop"  @top-status-change="handleTopChange" ref="loadmore">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="swipeItem in swipeArr"  :key="swipeItem.id"  :style="{backgroundImage:'url(' + swipeItem.swipeUrl + ')'}">
       <p class="swipe-desc">{{swipeItem.desc}}</p>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 文章列表 -->
    <div class="article-list">
    <article-block  v-for="articleIndex in articles" :articleIndex="articleIndex" :key="articleIndex.id">
    </article-block>
    <!-- 底部无限加载 -->
    <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
    </p>
    </div>
    </mt-loadmore>
  </div>
</template>

<script>
import articleBlock from '../public/article/articleBlock'
export default {
mounted () {
this.axios.get('https://www.easy-mock.com/mock/5a1d88738e6ddb24964d081b/duitang/swipe2')
      .then((response) => {
        // console.log(response.data.swipeArr);
        this.swipeArr = response.data.swipeArr

      })
      .catch((error) => {
        console.log(error)
      })
this.axios.get('https://www.easy-mock.com/mock/5a1d88738e6ddb24964d081b/duitang/articles')
      .then((response) => {
        this.articles = response.data.articles
        // console.log(this.articles)
      })
      .catch((error) => {
        console.log(error)
      })
},
data() {
    return {
      swipeArr: [],
      articles: [],
      loading: false,
      allLoaded: false,
    };
  },
components: {
  "article-block": articleBlock
},
 methods: {
  //  下拉加载
    loadTop (id) {
      let oList = document.querySelector('.dailyselect')
      this.axios.get('https://www.easy-mock.com/mock/5a1d88738e6ddb24964d081b/duitang/newArticles')
      .then((response) => {
        // console.log(response.data.newArticles)
        // 头部增加一篇新文章
        this.articles.unshift(response.data.newArticles[0])
        oList.scrollTop = 0
        //  console.log(this.$refs.loadmore)
        this.$refs.loadmore.onTopLoaded(id)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
     handleTopChange () {

    }

}}
</script>

<style lang="stylus" scoped>
  .beauty
    margin-bottom 50px
    height 20rem
    overflow-y scroll
  .swipe-desc
    width 100%
    height 1.1rem
    color #fefefe
    font-size 26px
    text-align center
    position absolute
    bottom 0
    background-color #5d5e65
    opacity .7
  .page-infinite-loading
    position absolute
    bottom 1.6rem
    margin-left 4.6rem

</style>
