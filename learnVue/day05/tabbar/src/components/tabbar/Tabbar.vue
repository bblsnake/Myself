<template>
  <div>
    <div id="tabbar">
      <!-- <router-link class="item" to="">首页</router-link>
      <router-link class="item" to="">分类</router-link>
      <router-link class="item" to="">购物车</router-link>
      <router-link class="item" to="">我的</router-link> -->
      <slot></slot>
      
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#tabbar {
  position: fixed;
  display: flex;
  background-color: #f2f2f2;
  height: 49px;
  left: 0;right: 0;
  bottom: 0;
  font-size: 10px;
  box-shadow: 0 -1px 5px gray;
}
</style>
