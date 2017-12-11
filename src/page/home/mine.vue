<template lang="html">
  <div class="mine">
   <mt-header class="mine-header">
    <mt-button slot="left">我</mt-button>
    <mt-button slot="right"><icon name="cog" color="gray"></icon></mt-button>
   </mt-header>
   <div class="mine-container">
     <img src="../../assets/dt_logo.png" alt="">
     <h5>轻松注册，即可永久保存你的所爱<br>
     换了手机也能找得到哦</h5>
     <a href="#" class="button_left">注册</a>
     <a href="#" class="button_right">登录</a>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: '我的'
    };
  }
}
</script>

<style lang="stylus" scoped>
.mine
  width 10rem
  height 18rem
  background-color #f6f6f6
.mine-header
  background-color #fefefe
  color #000
.mine-container
  margin-top 100px
  height 7rem
  width 10rem
  text-align center
.mine-container>img
  margin-bottom 10px
.mine-container>h5
  font-size 16px
  margin-bottom 15px
  color #000
  font-family "微软雅黑"
.mine-container a
  display inline-block
  width 4rem
  height 1rem
  margin .2rem
  text-align center
  line-height 1rem
  font-size 16px
  border-radius 5%
.mine-container .button_left
  background-color #FF595B
  color #fff
.mine-container .button_right
  border 1px solid #F47887
  color #F47887
</style>
