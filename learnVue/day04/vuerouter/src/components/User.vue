<template>
  <div>
    <h2>我是user</h2>
    <!-- <h2>{{$route.params.id}}</h2> -->
    <h2>{{userid}}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    userid() {
      return this.$route.params.id
    }
  },
}
</script>

<style scoped>

</style>
