<template>
  <div>
    <h2>路由传参query</h2>
    {{$route.query.name}}
    {{$route.query.age}}
    {{$route.query.height}}
  </div>
</template>

<script>
export default {
  name: 'query' // 用于keepalive里exclude或include组件
}
</script>

<style scoped>

</style>
