<template>
  <div class="community">
  <div class="community_hd">
    <router-link to="/all" class="circles-left">
    <div class="community_hd_club">
      发现感兴趣的Club &gt;
    </div>
    </router-link>
     
  </div>
  <div class="community_bd">
    <div class="dt_test">
    <h5 class="dt_test_title">堆糖实验室
      <span class="button_watchall">查看全部活动 &gt;</span>
    </h5>
      <div class="dt_test_block">
        <h3 class="dt_test_hd">
          <span class="test_hd_front">试用</span>
        这是标题标题
        </h3>
          <div class="dt_test_bd">
            <img src="../../assets/img/dt_test/t1.jpeg" alt="">
          </div>
          <div class="dt_test_ft">
            <div class="test_ft_left">堆糖试用申请</div>
            <div class="test_ft_right">4941人参与</div>
          </div>
      </div>
      <div class="dt_test_block">
        <h3 class="dt_test_hd">
          <span class="test_hd_front">试用</span>
        这是标题标题
        </h3>
          <div class="dt_test_bd">
            <img src="../../assets/img/dt_test/t2.jpeg" alt="">
          </div>
          <div class="dt_test_ft">
            <div class="test_ft_left">堆糖试用申请</div>
            <div class="test_ft_right">4941人参与</div>
          </div>
      </div>
    </div>
    <div class="dt_topic"></div>
  </div>
  </div>
</template>

<script>

export default {
data() {
    return {
       
    };
  }
}
</script>

<style lang="stylus" scoped>
.community_hd
  height 70px
  display flex
  justify-content center
  align-items center
.community_hd_club
  background-color #6FD093
  font-size 14px
  color #fefefe
  line-height 38px
  width 4rem
  height 38px
  text-align center
.dt_test_title
  position relative
  background-color #f4f4f4
  font-size 12px
  height 26px
  padding-left .3rem
  line-height 24px
  text-align left
.button_watchall
  position absolute
  right .3rem
  top 3px
  height 18px
  width 2.3rem
  font-size 10px
  line-height 18px
  text-align center
  color #fe5858
  font-family "微软雅黑"
  background-color #fefefe
  border .5px solid #fe5858
  border-radius 38%
.dt_test_block
  height 7rem
  border-bottom .5px solid #f4f4f4
.dt_test_hd
  position relative
  height 26px
  font-size 16px
  margin-top .3rem
  margin-left 1.2rem
  text-align left
.test_hd_front
  position absolute
  top 0
  left -1.2rem
  width .65rem
  height .4rem
  text-align center
  line-height .4rem
  background-color #F39854
  color #fefefe
  font-size 8px
  margin-left .3rem
.dt_test_bd
  height 5rem
.dt_test_bd>img
  width 100%
  height 100%
.dt_test_ft
  position relative
  height 1.2rem
  font-size 10px
  color gray
.test_ft_left
  position absolute
  left .2rem
.test_ft_right
  position absolute
  right .2rem

</style>
