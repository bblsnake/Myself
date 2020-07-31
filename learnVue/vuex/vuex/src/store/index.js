import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 10
  },
  mutations: {
    add(state) {
      state.counter++
    },
    sub(state) {
      state.counter--
    },
    addCount(state, count) {
      state.counter += count
      // console.log(count);
    }
  },
  actions: {

  },
  getters: {
    power (state) {
      return state.counter * state.counter
    }
  },
  modules: {

  }
})

export default store;