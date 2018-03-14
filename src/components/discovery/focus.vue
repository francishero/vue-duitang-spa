<template lang="html">
<div class="focus">
  
     <ul class="clubs">
          <li class="clubs__item" v-for="club in clubsArr" :key="club.id">
            <img :src="club.photo.path" alt="">
            <h3>{{club.name}}</h3>
            <p>成员{{club.member_count}}</p>
          </li>
        </ul>
 
</div>
</template>
<script>
export default {
  data() {
    return {
          clubsArr: this.$store.state.clubs
       
    };
  }
}
</script>

<style lang="stylus" scoped>
.clubs
    width 100%
.clubs__item
   width 100%
   position relative
   border-bottom .5px solid gainsboro
img
    width 1.2rem
    height 1.2rem
    margin .5rem
    border-radius 999px
h3
    font-size .4rem
    color #333
    position absolute
    top .45rem
    left 1.99rem
p
    font-size .2rem
    color #8e8e8f
    position absolute
    top 1.1rem
    left 1.99rem
</style>
