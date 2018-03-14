<template lang="html">
  <div class="side-nav">
    <p class="item" v-for="navItem in navArr" 
       :data-url="navItem.url" @click="selecteItem">
       {{navItem.name}}
    </p>
  </div>
</template>
<script>
export default {
  mounted () {
    document.querySelectorAll('.item')[0].classList.add('selected')
  },
  methods: {
    // 显示不同的状态
    selecteItem () {
      let oUrl = event.currentTarget.dataset.url
      this.selected = oUrl
      if(document.querySelector('.selected'))  {
        document.querySelector('.selected').classList.remove('selected')
      }
      event.currentTarget.classList.add('selected')
      this.$emit('switchNav', oUrl)
    }
  },
  data () {
    return {
      selected: '',
      navArr: [{
        name: '推荐',
        url: 'recommend'
      }, {
        name: '情感',
        url: 'emotion'
      }, {
        name: '生活',
        url: 'life'
      },{
        name: '娱乐',
        url: 'happy'
      },{
        name: '明星',
        url: 'star'
      },{
        name: '技术宅',
        url: 'skill'
      },{
        name: '手机控',
        url: 'phone'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.side-nav
  width 2.6667rem
  height 14rem
  overflow-y scroll
  padding-bottom 1.66667rem
  .item
    padding .43333333rem .63333rem
    line-height 0.66667rem
    text-align center
    font-size .4rem
    background-color #ecf0f4
    transition all .2s ease
  .selected
    background-color #fff
    color #FF595B
    transform scale(1.05)
</style>
