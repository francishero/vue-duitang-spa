<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
/* 自定义导航 */
.swiper-pagination-bullet-custom {
    width: 3rem;
    height: 30px;
    background: #fefefe;
    border-radius: 0;
 }
 .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #FE5858;
    border-bottom: .01rem solid #FE5858
 }
 .swiper-slide {
   text-align: center
 }
</style>
