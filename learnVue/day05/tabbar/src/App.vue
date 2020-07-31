<template>
  <div id="app">
    <MainTB></MainTB>
    <router-view></router-view>
  </div>
</template>

<script>

import MainTB from '@/components/tabbar/MainTb'
export default {
  name: 'App',
  components: {
    MainTB
  }
}
</script>

<style>
@import url('./assets/css/base.css');
</style>
