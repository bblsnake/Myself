<template>
  <div>
    <Tabbar>
      <TabbarItem path='/home' activeColor='blue'> 
        <img slot="icon" src="@/assets/img/tabbar/首页-选中.png" />
        <img slot="icon-active" src="@/assets/img/tabbar/首页-选中 (1).png" />
        <div slot="text">首页</div>
      </TabbarItem>
      <TabbarItem path='/fenlei' activeColor='blue'>
        <img slot="icon" src="@/assets/img/tabbar/分类-选中.png" />
        <img slot="icon-active" src="@/assets/img/tabbar/分类-选中 (1).png" />
        <div slot="text">分类</div>
      </TabbarItem>
      <TabbarItem path='/cart'>
        <img slot="icon" src="@/assets/img/tabbar/购物车.png" />
        <img slot="icon-active" src="@/assets/img/tabbar/购物车(1).png" />
        <div slot="text">购物车</div>
      </TabbarItem>
      <TabbarItem path='/myself'>
        <img slot="icon" src="@/assets/img/tabbar/我 的 .png" />
        <img slot="icon-active" src="@/assets/img/tabbar/我 的 (1).png" />
        <div slot="text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/Tabbar'
import TabbarItem from '@/components/tabbar/TabbarItem'
export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
