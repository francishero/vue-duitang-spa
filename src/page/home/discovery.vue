<template lang="html">
  <div class="discovery">
    <!-- 头部 -->
    <div class="discovery_header">
    <mt-search  cancel-text="取消" placeholder="搜索感兴趣的内容"></mt-search>
    <a href="#"><span class="qr_code"><img src="../../assets/qr.png"></span></a>
    </div>
    <!-- navbar -->
  <mt-navbar v-model="selected">
    <mt-tab-item id="1">社区</mt-tab-item>
    <mt-tab-item id="2">内容</mt-tab-item>
    <mt-tab-item id="3">关注</mt-tab-item>
  </mt-navbar>
   
   <!-- tab-container -->
<mt-tab-container class="tab_container" v-model="selected">
  <mt-tab-container-item id="1">
    <discovery-community></discovery-community>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <discovery-content></discovery-content>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <discovery-focus></discovery-focus> 
  </mt-tab-container-item>
</mt-tab-container>


  </div>
</template>
<script>
import Content from '../../components/discovery/content'
import Community from '../../components/discovery/community'
import Focus from '../../components/discovery/focus'
export default {
  components: {
    'discovery-content': Content,
    'discovery-community': Community,
    'discovery-focus': Focus
  },
   data() {
      return {
        selected: '1',
        
       
      }
    },
    computed: {
     
    },
     mounted() {
    }

}
</script>

<style lang="stylus" scoped>
.discovery
  margin-bottom 40px
.discovery_header
  position fixed
  top 0
  z-index 1000
.qr_code
  position fixed
  right .3rem
  top .24rem
  width .6rem
  height .6rem
  background-color #fefefe
  z-index 1000
  display inline-block
.qr_code>img
  width 100%
  height 100%
.mint-navbar
 margin-top 37px
.mint-navbar .mint-tab-item.is-selected
  margin-bottom 0
  border-bottom 3px solid #FF595B
  color #FF595B
</style>
