<template>
<div id="app">
  <HeaderTop/>
<router-view/>
<FooterGuide v-show="$route.meta.showFooter"/>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import HeaderTop from './components/Header/header.vue'
// import {mapActions} from 'vuex'
export default {
  components: {
    FooterGuide,
    HeaderTop
  },
  created () {
    this.$store.dispatch('asyncData')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
