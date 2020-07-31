<template>
  <div class="nav">
    <div class="img">
      <a href=""></a>
    </div>
    <div class="city">
      <p class="city-curr">南昌<i></i></p>
    </div>
    <div class="login">
      <!-- <i class="iconfont">&#xe639;</i> -->
      <router-link to="login">登录</router-link>  
    </div>
    <div class="header-phone">热线电话  400-060-6085</div>
    <div class="ul">
      <router-link to="../pages/home">首页</router-link>  
      <router-link to="../pages/buyCar">我要买车</router-link>  
      <router-link to="../pages/sellCar">我要卖车</router-link> 
      <router-link to="../pages/service">瓜子服务</router-link>  
      <router-link to="../pages/jinRong">瓜子金融</router-link>  
      <router-link to="../pages/newCar">毛豆新车</router-link>  
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.nav{
  display: block;
  position: absolute;
  top: 0;
  background-color: transparent;
  width: 100%;
  height: 55px;
  margin: 0 auto;
  /* background-color: green; */
  font-size: 14px;
}
.img a{
  background: url("//cli-sta.guazistatic.com/c2c_web/wh-logo.48578367102547ee80527a409862a82c.png");
  background-size: 100% 100%;
  display: block;
  width: 55px;
  height: 55px;
  text-decoration: none!important;
  color: #24d;
  float: left;
  margin-left: 350px;
}
.city{
  border: 1px solid transparent;
  float: left;
  height: 34px;
  padding: 0 15px;
  margin: 10.5px 0 0 14px;
  border-radius: 2px;
  background: transparent;
  padding-bottom: 8.5px;
}
.city-curr{
  color: #fff;
  line-height: 34px;
  font-size: 14px;
  cursor: pointer;
}
p{
    display: block;
}
p:hover{font-weight: 600}
i{
  background: url(//cli-sta.guazistatic.com/c2c_web/Triangle.1f79e749aad1ff66a62c0b434f283a58.png);
  background-size: 100% 100%;
  width: 6px;
  height: 3px;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  margin: 0 0 0 5px;
}
.ul{
  float: right;
  /* width: 700px; */
  height: 42px;
  padding-top: 7px;
}
.ul a{
  list-style: none;
  line-height: 40px;
  margin:0 20px;
  font-style: 14px;
  color: #fff;
  text-decoration: none;
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
}
.ul a:hover{font-weight: 600}
.header-phone{
  color: #fff;
  border-right: 1px solid #fff;
  float: right;
  font-size: 14px;
  line-height: 16px;
  padding: 0 15px 0 0;
  margin-top: 19px;
  margin-left: 30px;
}
.login a{
  background-position: 6px -268px;
  color: #fff;
  line-height: 16px;
  float: right;
  cursor: pointer;
  margin-top: 19px;
  margin-left: 10px;
  margin-right: 350px;
  font-size: 14px;
  padding-left: 24px;
  position: relative;
  padding-bottom: 11px;
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0….png);
  background-size: 451px 300px;
  text-decoration: none;
}
.iconfont{
  color: gray;
  /* background-color: #fff; */
  float: right;
  position: absolute;
}
.login a:hover{font-weight: 600}
</style>