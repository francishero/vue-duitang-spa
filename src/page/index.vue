<template>
  <div id="index">
    <dheader v-on:popupMask="switchMask"></dheader>
    <dpopup :popupVisible="popupVisible" v-on:dpopupMask="switchMask"></dpopup>
    <router-view></router-view>
    <dtabbar></dtabbar>
  </div>
</template>

<script>
import Dheader from "../components/public/head.vue"
import Dpopup from "../components/public/popup.vue"
import Dtabbar from "../components/public/tabbar.vue"
export default {
  name: 'Index',
  data () {
    return {
      // selected: '首页',
      popupVisible: false,
      pageIndex: 1,
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
    Dheader,
    Dtabbar,
    Dpopup
  },
  methods: {
     switchMask () {
      this.popupVisible = !this.popupVisible
    }

  }
}
</script>

<style lang="stylus" scoped>
.navbar
  width 13rem

  font-size 14px
  height 25px
  position fixed
  z-index 100
  top 42px
a:focus
  color red
.red
  color red
</style>
