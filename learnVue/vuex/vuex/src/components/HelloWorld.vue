<template>
  <div class="hello">
    <div @click="addvuex">+</div>
    <div>{{$store.state.counter}}</div>
    <div @click="subvuex">-</div>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
    <app></app>
    <div>{{$store.getters.power}}</div>
  </div>
</template>

<script>
import app from './app'
export default {
  name: 'HelloWorld',
  components: {
    app
  },
  data () {
    return {
      // counter: 1
    }
  },
  methods: {
    addvuex() {
      this.$store.commit('add') //add是mutation里面定义的方法
    },
    subvuex() {
      this.$store.commit('sub')
    },
    addcount (count) {
      this.$store.commit('addCount', count)  //提交方法一
      // this.$store.commit({ //提交方法二
      //   type: 'addCount',
      //   count: count // ！！！这里的count是一个对象 不再是传进来的参数
      // })
    }
  },
}
</script>

<style scoped>
</style>
