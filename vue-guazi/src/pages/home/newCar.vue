<template>
  <div class="index-channel-operate">
    <div class="channel-operate-title w1200">
      <h3>毛豆新车</h3>
    </div>
    <div class="channel-operate-list w1200">
      <li class="operate-item-right">
        <router-link to="">
          <img src="https://image1.guazistatic.com/qn1812271703149280569415649c5b9192439686a4fa1e.png?imageView2/2" alt="月供 1800起">
          <div class="operate-item-text">
            <p>爆款SUV</p>
            <span>月供 1800起</span>
          </div>
        </router-link>
      </li>
      <li class="operate-item-left">
        <router-link to="">
          <img src="https://image1.guazistatic.com/qn18110911494912993054599665c121867e8d33faa46a.png?imageView2/2" alt="0-1成首付买新车">
        </router-link>
      </li>
      <li class="operate-item-center-left">
        <router-link to="">
          <img src="https://image1.guazistatic.com/qn1812272001563867bdf5e6e568c32baa88c7922d1b02.png?imageView2/2" alt="质优价低">
          <div class="operate-item-text">
            <p>1万开新车</p>
            <span>质优价低</span>
          </div>
        </router-link>
      </li>
      <li class="operate-item-center-top">
        <router-link to="">
          <img src="https://image1.guazistatic.com/qn181227170248e4a541c2ee17d80371666f75aef55354.png?imageView2/2" alt="国民好车">
          <div class="operate-item-text">
            <p>大众专场</p>
            <span>国民好车</span>
          </div>
        </router-link>
      </li>
      <li class="operate-item-center-bottom">
        <router-link to="">
          <img src="https://image1.guazistatic.com/qn181227200220af31a7a8c79ef8208aa961c7bb5839b8.png?imageView2/2" alt="分期无忧负担小">
          <div class="operate-item-text">
            <p>月供2000起</p>
            <span>分期无忧负担小</span>
          </div>
        </router-link>
      </li>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import '../../style/allStyle';
.index-channel-operate {
  padding-bottom: 52px;
}
.w1200 {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.channel-operate-title {
  padding: 52.5px 0 26px;
  height: 30px;
}
.channel-operate-title h3 {
  float: left;
  font-weight: unset;
  font-size: 28px;
  line-height: 28px;
  color: #000;
}
.channel-operate-list {
  height: 346px;
}
.operate-item-center-bottom, 
.operate-item-center-left, 
.operate-item-center-top, 
.operate-item-left, 
.operate-item-right {
    float: left;
    width: 227px;
    height: 346px;
    background-color: #fff;
}
.operate-item-right {
  float: right;
}
.operate-item-center-bottom.active a, 
.operate-item-center-top.active a, 
.operate-item-right a {
    background-position: 50%;
    background-color: #f5f5f7;
}
.operate-item-center-bottom a, 
.operate-item-center-left a, 
.operate-item-center-top a, 
.operate-item-left a, 
.operate-item-right a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    transition: box-shadow .4s;
    overflow: hidden;
}
.operate-item-right img {
    width: 150px;
    height: 158px;
    margin: 30px 0 0 30px;
}
.operate-item-left img {
    display: block;
    width: 227px;
    height: 346px;
}
.operate-item-right .operate-item-text {
    display: block;
    text-align: center;
    margin-top: 20px;
}
.operate-item-text {
    /* display: none; */
    font-size: 16px;
}
.operate-item-text p {
    margin-bottom: 10px;
    color: #495056;
}
.operate-item-text span {
    color: #f76367;
}
.operate-item-center-left {
    margin-left: 16px;
}
.operate-item-center-left a {
    background-position: 50%;
    background-color: #f5f5f7;
}
.operate-item-center-left img {
    width: 227px;
    height: 94px;
    margin-top: 85px;
}
.operate-item-center-bottom img, .operate-item-center-left img, .operate-item-center-top.active img {
    display: block;
}
/* .operate-item-center-bottom img, .operate-item-center-left img, .operate-item-center-top img {
    display: none;
} */
.operate-item-center-bottom, .operate-item-center-top {
    width: 470px;
    height: 165px;
    margin-left: 16px;
}
.operate-item-center-bottom img, .operate-item-center-top img {
    float: left;
    width: 263px;
    height: 89px;
    margin-top: 38px;
}
.operate-item-center-bottom {
    margin-top: 16px;
}
.operate-item-center-left .operate-item-text {
    display: block;
    padding-top: 35px;
    text-align: center;
}
.operate-item-center-bottom a, .operate-item-center-top a, .operate-item-right a {
    background-position: 50%;
    background-color: #f5f5f7;
}
.operate-item-center-bottom .operate-item-text, .operate-item-center-top .operate-item-text {
    display: block;
    float: left;
    padding-top: 54px;
}
</style>