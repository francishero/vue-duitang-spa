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

    }
  },

  components: {
    Dtabbar
  }

}
</script>

<style lang="stylus" scoped>
</style>
