<template>
  <div id="app">
      <router-view></router-view>
      <tab-bar></tab-bar>
  </div>
</template>

<script>

import TabBar from 'components/common/tabber/Tabbar';
import router from './router/router.js'
export default {
  name: 'App',
  router,
  components: {
    TabBar
  }
}
</script>

<style>
@import 'assets/css/base.css'
</style>
