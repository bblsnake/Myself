<template>
  <div class="app">
    <label for="">请输入您的姓名:</label>
    <input type="text" style="height: 60px;"  v-model="test">
    <!-- <router-link to="/hello">
    </router-link> -->
    <button @click="change" >确定</button> 

    <!-- <div>{{test}}</div> -->
    <!-- <HelloWorld v-show="show" :test="test"></HelloWorld> -->
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
export default {
  name: 'Home',
  components: { 
    HelloWorld
  },
  data() {
    return {
      test: '123',
      show: false
    }
  },
  methods: {
    change() {
      // show = !this.show
      this.$router.push('/hello')
    }
  },
}
</script>

<style scoped>
.app {
  display: flex;
  font-size: 60px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  line-height: 100vh;
}
button {
  background-color: #3385ff;
  font-size: 44px;
  top: 2000px;
}
</style>
