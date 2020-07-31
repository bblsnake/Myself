<template>
  <div id="app">
    <div class="index-header">
      <!-- <i-nav /> -->
      <!-- <list/> -->
      
      <!-- <buySell/> -->
      <!-- <search></search> -->
      <i-footer />
      <!-- <A /> -->
      <!-- <channel /> -->
      <!-- <service /> -->
      <!-- <allBrand /> -->
      <!-- <newCar /> -->
      <!-- <problem /> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import nav from "./components/common/nav";
import list from "./components/common/list";
import search from "./components/search";
import buySell from "./components/buySell";
import footer from "./components/common/footer";
import A from "./components/common/A";
import channel from "./components/channel";
import service from "./pages/service";
import allBrand from "./components/allBrand";
import newCar from "./pages/home/newCar";
import problem from "./pages/home/problem";
export default {
  name: "App",
  components: {
    "i-nav":nav,
    list,
    search,
    buySell,
    "i-footer": footer,
    channel,
    A,
    service,
    allBrand,
    newCar,
    problem
  }
};
</script>

<style>
.index-header {
    position: relative;
    background: url("https://image.guazistatic.com/gz01190923/17/53/9c2d7bfaed19709bbbb9cb305e1ddffe.jpg") #07370d no-repeat;
    background-size: 1920px 100%;
    background-position: 50%;
    height: 340.5px;
    width: 100%;
    margin: 0 auto;
}
</style>
