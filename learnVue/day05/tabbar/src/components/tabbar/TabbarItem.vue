<template>
    <div class="item" @click="itemClick">
      <div v-if="!isActive"><slot name="icon"></slot></div>
      <div v-else><slot name="icon-active"></slot></div>
      <!-- <div :class="{active: isActive}"><slot name="text"></slot></div> -->
      <div :style="styleColor"><slot name="text"></slot></div>
    </div>
    <!-- <div class="item" slot="home">
      <img src="../../assets/img/tabbar/首页-选中.png" alt="">
      <div>首页</div>
    </div>
    <div class="item" slot="home">
      <img src="../../assets/img/tabbar/首页-选中.png" alt="">
      <div>首页</div>
    </div>
    <div class="item" slot="home">
      <img src="../../assets/img/tabbar/首页-选中.png" alt="">
      <div>首页</div>
    </div> -->
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
      // console.log(this.$route.path);
    },
  },
  computed: {
    isActive() {
      return  this.$route.path === this.path // 动态改变图标颜色
    },
    styleColor() {
      return this.isActive ? {color: this.activeColor} : '' // 动态改变字体颜色
    }
  },
}
</script>

<style scoped>
.item {
  flex: 1;
  text-align: center;
  margin: auto;
}
.item img {
  height: 24px;
  width: 24px;
}
/* .active {
  color: green;
} */
</style>
