
<template>
<div class="article">
   <articleHead></articleHead>
   <articleDesc :article="article"></articleDesc>
</div>

</template>

<script>
import articleHead from '../../components/public/article/articleHead'
import articleDesc from '../../components/public/article/articleDesc'
export default {

 data () {
   return {
    article: {},
    loading: true

   }
 },
 components: {
   articleHead,
   articleDesc
 },
 mounted () {

    // console.log(this.$route.params.id)
this.axios.get('https://www.easy-mock.com/mock/5a1d88738e6ddb24964d081b/duitang/articleDesc/' + this.$route.params.id)
      .then((response) => {
        this.article = response.data.articleDesc
        // console.log(this.articleDesc)
      })
      .catch((error) => {
        console.log(error)
      })

}
}
</script>

<style lang="stylus" scoped>




</style>
