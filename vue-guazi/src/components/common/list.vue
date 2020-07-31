<template>
  <div class="list">
    <ul>
      <li>
        <a href="">
          <img src="@/assets/logo.png" alt="">
          <div class="car-info">
            <h2 class="t">荣威550 2010款 550 1.8L 手动启悦贺岁版</h2>
            <div class="t-i">2011年<span class="icon-pad">|</span>3.0万公里
              <span class="icon-pad">|</span>到店服务
              <!-- <span class="icon-pad">|</span>店内直卖 -->
            </div>
            <div class="t-price">
              <p>3.05<span>万</span></p>
              <i class="i-red">急售</i>
              <!-- <i class="i-blue">严选车</i> -->
              <!-- <i class="i-green">准新车</i> -->
              <em class="line-through">13.76万</em>
            </div>
          </div>
          <!-- <em class="icon-sale">急降<br><span>2880</span>元</em> -->
          <em class="icon-new">新上架</em>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '../../style/allStyle.css';
.list{
  display: block;
  font: 12px/1.5 PingFang SC,Microsoft YaHei,arial,helvetica,sans-serif;
}
ul li{
  list-style: none;
}
ul{
  margin-left: -20px;
}
li{
  margin-left: 20px;
  margin-bottom: 19px;
  background: #fff;
  float: left;
}
li:hover{
  box-shadow: 0 0 2px#999;
}
a{
    width: 285px;
    height: 319px;
    padding: 0;
    background-color: #fff;
    border: none;
    display: block;
    position: relative;
    transition: box-shadow .4s;
    text-decoration: none!important;
    color: #24d;
}
img{
    border: none;
    display: block;
    width: 285px;
    height: 193px;
}
.car-info{
    width: 100%;
    height: 126px;
    border: 1px solid rgba(0,0,0,.05);
    box-sizing: border-box;
    padding-bottom: 25px;
    position: relative;
}
.t{
    padding: 20px 20px 6px;
    font-size: 17px;
    color: #495056;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.t-i{
    padding-left: 20px;
    padding-right: 20px;
    color: #a5abb2;
    font-size: 14px;
    padding-bottom: 2px;
}
.icon-pad{
  display: inline-block;
  font-size: 12px;
  width: 14px;
  text-align: center;
  vertical-align: top;
  line-height: 20px;
}
.t-price{
  padding-left: 20px;
  padding-right: 20px;
  height: 30px;
  font-size: 20px;
  color: #fa5428;
  overflow: hidden;
}
.t-price p {
  display: block;
  float: left;
  line-height: 30px;
}
.t-price span {
  font-size: 14px;
}
.t-price i {
    float: right;
    width: 46px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    font-size: 12px;
    margin: 5px 0 0 5px;
    font-style: normal;
}
.i-red{
  color: #f88368;
  background: #ffeae5;
}
.i-blue{
  color: #d7a844;
  background: #fcf2d5;
}
.i-green{
  color: #3fc56e;
  background: #e8f6ed;
}
.line-through{
  text-decoration: line-through;
}
.t-price em{
  float: left;
  margin-top: 7px;
  margin-left: 10px;
  color: #a5abb2;
  font-size: 14px;
}
em{
  font-style: normal;
}
.icon-sale, .icon-new{
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon_@2x_s.5dfd8e0395d1a3188c98507b746b6df4.png);
  background-size: 451px 300px;
  position: absolute;
  display: block;
  width: 60px;
  text-align: center;
  color: #fff;
  top: -5px;
  left: 11px;
  font-size: 12px;
}
.icon-sale{
  background-position: -100px -100px;
  height: 40px;
  line-height: 17px;
  padding: 7px 0 10px;
}
.icon-new{
    background-position: -36px -100px;
    line-height: 48px;
    padding: 7px 0 10px;
}
</style>