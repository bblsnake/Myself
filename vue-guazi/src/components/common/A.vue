<template>
  <div class="index-dd-all">
    <i class="jiantou-icon"></i>
    <ul>
      <li>
        <label for="">A</label>
        <p>
          <router-link to="">奥迪</router-link>
          <router-link to="">奥迪</router-link>
          <router-link to="">奥迪</router-link>
          <router-link to="">奥迪</router-link>
          <router-link to="">奥迪</router-link>
          <router-link to="">奥迪</router-link>
          <router-link to="">奥迪</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../../style/allStyle';
.index-dd-all {
  font-size: 14px;
  width: 1200px;
  position: absolute;
  top: 166px;
  background: #fff;
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: none;
}
.index-dd-all i {
  width: 12.5px;
  height: 6px;
  background: url(//cli-sta.guazistatic.com/c2c_web/sanjiao.a4a76d068744ee125bfd70766bf84b60.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: -15px;
  left: 638px;
  border-top: 10px solid transparent;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
}
.index-dd-all ul {
  width: 350px;
  padding: 35px 0 0 40px;
  float: left;
}
.index-dd-all li {
  overflow: hidden;
  padding-bottom: 11px;
}
.index-dd-all label {
  float: left;
  width: 24px;
  height: 24px;
  line-height: 24px;
  color: #22ab38;
  font-size: 14px;
  font-weight: 700;
}
.index-dd-all p {
  float: left;
  width: 326px;
}
.index-dd-all a {
  float: left;
  height: 24px;
  line-height: 24px;
  margin-right: 15px;
  font-size: 14px;
  color: #495056;
  padding-bottom: 3px;
}
</style>