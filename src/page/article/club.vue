<template>
  <div class="club">
<mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n.id"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    jj
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    kk
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>

export default {
data() {
    return {
      selected: 1
    };
  },
  mounted () {
    this.selected = 2;

  }
}
</script>

<style lang="stylus" scoped>

</style>
