<template lang="html">
  <div class="firstpage">
    <!-- 头部 -->
  <d-header v-on:popupMask="switchMask"></d-header>
  <d-popup :popupVisible="popupVisible" v-on:dpopupMask="switchMask"></d-popup>

    <!-- 导航 -->
    <swiper :options="swiperOption3" ref="mySwiper3">
      <swiper-slide @click.native.prevent="active = 'tab-container1'"
      v-if="active === 'tab-container1'" :class="{tabDo: true}" >每日精选</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container1'"
      v-if="active != 'tab-container1'" :class="{tabDo: false}" >每日精选</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container2'"
       v-if="active === 'tab-container2'" :class="{tabDo: true}" >美学社</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container2'"
       v-if="active != 'tab-container2'" :class="{tabDo: false}" >美学社</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container3'"
       v-if="active === 'tab-container3'" :class="{tabDo: true}" >悦食记</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container3'"
       v-if="active != 'tab-container3'" :class="{tabDo: false}" >悦食记</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container4'"
      v-if="active === 'tab-container4'" :class="{tabDo: true}" >小生活</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container4'"
      v-if="active != 'tab-container4'" :class="{tabDo: false}" >小生活</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container5'"
      v-if="active === 'tab-container5'" :class="{tabDo: true}" >书影音</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container5'"
      v-if="active != 'tab-container5'" :class="{tabDo: false}" >书影音</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container7'"
      v-if="active === 'tab-container7'" :class="{tabDo: true}" >趣旅行</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container7'"
      v-if="active != 'tab-container7'" :class="{tabDo: false}" >趣旅行</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container8'"
      v-if="active === 'tab-container8'" :class="{tabDo: true}" >手作绘</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container8'"
      v-if="active != 'tab-container8'" :class="{tabDo: false}" >手作绘</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container9'"
      v-if="active === 'tab-container9'" :class="{tabDo: true}" >新摄团</swiper-slide>
      <swiper-slide @click.native.prevent="active = 'tab-container9'"
      v-if="active != 'tab-container9'" :class="{tabDo: false}" >新摄团</swiper-slide>
   </swiper>

    <!-- 分页 -->
    <div class="page-tab-container">
     <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1"><daily-select></daily-select>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2"><beauty></beauty>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3"><food></food>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4"><life></life>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5"><bmm></bmm>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container7"><trip></trip>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container8"><draw></draw>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container9"><photograph></photograph>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import Dheader from "../../components/public/head.vue"
import Dpopup from "../../components/public/popup.vue"
import Dailyselect from '../../components/firstpage/dailyselect'
import Beauty from '../../components/firstpage/beauty'
import Food from '../../components/firstpage/food'
import Life from '../../components/firstpage/life'
import Bmm from '../../components/firstpage/bmm'
import Trip from '../../components/firstpage/trip'
import Draw from '../../components/firstpage/draw'
import Photograph from '../../components/firstpage/photograph'
export default {
   components: {
     'd-header': Dheader,
     'd-popup': Dpopup,
    'daily-select':Dailyselect,
    'beauty': Beauty,
    'food': Food,
    'life': Life,
    'bmm': Bmm,
    'trip': Trip,
    'draw': Draw,
    'photograph': Photograph
  },
  data() {
    return {
      selected: '首页',
      active: '',
      popupVisible: false,
       swiperOption3: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // initialSlide :1,
          slidesPerView : 5,
          spaceBetween : 10,
          slideToClickedSlide: true,
          direction : 'horizontal',
          // autoHeight:true,
        }
    };
  },
  mounted () {
    this.active = 'tab-container1';

  },
  methods: {
     switchMask () {
      this.popupVisible = !this.popupVisible
  }
  }


}
</script>

<style lang="stylus">
.firstpage
  margin-top 42px
.tabDo
  color: red
  border-bottom .5px solid red
</style>
