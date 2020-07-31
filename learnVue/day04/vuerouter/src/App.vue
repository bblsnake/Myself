<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/home" tag="button" replace>home</router-link>
    <router-link to="/about">about</router-link>
    <!-- <div @click="btnhome">home</div>
    <div @click="btnabout">about</div> 通过代码改变路由  -->
    
    <!-- <router-link :to="'/user/'+userId">user</router-link>
    <router-link :to="{path: '/query', query:{name: 'ljy', age: 24, height: 180}}">
    路由传参</router-link> -->
    <button @click="btnUser">user</button>
    <button @click="btnQuery">路由传参</button>
    <keep-alive exclude="query"> 
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'ljy' 
    }
  },
  methods: {
    btnhome() {
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    btnabout() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    btnUser() {
      this.$router.push('/user/' + this.userId)
    },
    btnQuery() {
      this.$router.push({
        path: '/query',
        query: {name: 'ljy', age: 18, height: 180}
      })
    }
  },
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.active {
  color: red;
}
</style>
