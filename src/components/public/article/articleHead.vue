<template>
<div class="article-head">
   <mt-header fixed title="文章详情">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  <mt-button icon="more" slot="right"></mt-button>
   </mt-header>
   </div>

</template>

<script>
export default {


}
</script>

<style lang="stylus" scoped>
.mint-header
  background #fefefe
  color #000
  font-family "微软雅黑"
  border-bottom .01rem solid rgba(245,245,247,1)



</style>
