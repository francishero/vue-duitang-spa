<template>
  <div id="index">
    <router-view></router-view>
    <dtabbar></dtabbar>
  </div>
</template>

<script>
import Dtabbar from "../components/public/tabbar.vue"
export default {
  name: 'Index',
  data () {
    return {
      // selected: '首页',
      routes: [ {'name': '每日精选', 'url': '/firstpage/dailyselect'},
      {'name': '美学社', 'url': '/firstpage/beauty'},
      {'name': '悦食记', 'url': '/firstpage/food'},
      {'name': '小生活', 'url': '/firstpage/life'},
      {'name': '书影音', 'url': '/firstpage/bmm'},
      {'name': '趣旅行', 'url': '/firstpage/trip'},
      {'name': '手作绘', 'url': '/firstpage/draw'},
      {'name': '新社团', 'url': '/firstpage/photograph'}]
    }
  },

  components: {
    Dtabbar
  }

}
</script>

<style lang="stylus" scoped>
</style>
