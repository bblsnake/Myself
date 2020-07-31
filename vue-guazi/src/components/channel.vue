<template>
  <div class="index-channel-new-bg active-green">
    <ul class="index-channel-new clearfix">
      <li class="index-channel-1 active" name="ershouche">
        <span class="icon"></span>
      </li>
      <li class="index-channel-2" name="yanxuanche">
        <span class="icon"></span>
      </li>
      <li class="index-channel-3" name="sell">
        <span class="icon"></span>
      </li>
      <li class="index-channel-4" name="jr">
        <span class="icon"></span>
      </li>
    </ul>
    <div class="index-channel-car">
      <div class="index-channel-carBox-prev active">
        <i></i>
      </div>
      <div class="index-channel-carBox index-ershouche-channel active" :class="nextClick">
        <ul class="index-channel-carlist" style="left: 0px;" >
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115174544d28f1534f10bf4826b3072f21f243ebe.png?imageView2/2" alt="">
              <div class="channel-carName">两厢轿车</div>
              <div class="channel-carPrice">0.18万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn1811151746295824e8bab7648f8b0d14d61394972fa0.png?imageView2/2" alt="">
              <div class="channel-carName">三厢轿车</div>
              <div class="channel-carPrice">0.15万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn18111518174315fa9321f36c8d4ff56bcdb3e5d85281.png?imageView2/2" alt="">
              <div class="channel-carName">跑车</div>
              <div class="channel-carPrice">2.38万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn18111518181754b768dafa98bd754201e0a7e774299b.png?imageView2/2" alt="">
              <div class="channel-carName">SUV</div>
              <div class="channel-carPrice">0.50万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn18111518181754b768dafa98bd754201e0a7e774299b.png?imageView2/2" alt="">
              <div class="channel-carName">MPV</div>
              <div class="channel-carPrice">0.72万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn1903211203205c132654095589a10e2866b35ea76e89.png?imageView2/2" alt="">
              <div class="channel-carName">面包车</div>
              <div class="channel-carPrice">0.16万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115182144dd23714992db4b74ab5498346951daaf.png?imageView2/2" alt="">
              <div class="channel-carName">皮卡</div>
              <div class="channel-carPrice">1.30万起</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="index-channel-carBox index-yanxuanche-channel">
        <ul class="index-channel-carlist" style="left: 0px;">
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115182708299d6f5f31f91331488cfaaea89a0007.png?imageView2/2" alt="">
              <div class="channel-carName">跑车</div>
              <div class="channel-carPrice">9.68万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn18111518284074d9b6733ecd02121b5c73ff2855fb9b.png?imageView2/2" alt="">
              <div class="channel-carName">SUV</div>
              <div class="channel-carPrice">2.15万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115183038a030b53c8749241ec9b99d0927b4d8bf.png?imageView2/2" alt="">
              <div class="channel-carName">MPV</div>
              <div class="channel-carPrice">2.50万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn1811151825247ac56493aac3d8714bd381ed8385251f.png?imageView2/2" alt="">
              <div class="channel-carName">两厢轿车</div>
              <div class="channel-carPrice">2.44万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115182640a9f97dda2c103e942773c4ff9588329c.png?imageView2/2" alt="">
              <div class="channel-carName">三厢轿车</div>
              <div class="channel-carPrice">2.38万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn19032112012283e9682e6d99f7071614a429f9632490.png?imageView2/2" alt="">
              <div class="channel-carName">面包车</div>
              <div class="channel-carPrice">2.50万起</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115183858bcb4b38aab8aea80077aeca5b7140f5b.png?imageView2/2" alt="">
              <div class="channel-carName">皮卡</div>
              <div class="channel-carPrice">15.50万起</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="index-channel-carBox index-sell-channel">
        <ul class="index-channel-carlist" style="left: 0px;">
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn18111518525148272f676b2f2e98eb13475b9901a76c.png?imageView2/2" alt="">
              <div class="channel-carName">宝马5系</div>
              <div class="channel-carPrice">成交价21.3万</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115185503faaa25ac2c78a0c08da9938e4b34d645.png?imageView2/2" alt="">
              <div class="channel-carName">本田雅阁</div>
              <div class="channel-carPrice">成交价13.5万</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn18111518560687ecfe2622d5e06c6d01a2a6dd20ddeb.png?imageView2/2" alt="">
              <div class="channel-carName">大众高尔夫</div>
              <div class="channel-carPrice">成交价6.8万</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn1811151913451b02227aa924a6b8c8122fa4aca99b39.png?imageView2/2" alt="">
              <div class="channel-carName">奔驰GLK级</div>
              <div class="channel-carPrice">成交价22.9万</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115191425c6616455f8c9303288008a8e8da138b6.png?imageView2/2" alt="">
              <div class="channel-carName">雪佛兰迈锐宝</div>
              <div class="channel-carPrice">成交价7.3万</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn1811151915145e10f96d1b128a474a5267783a4eae12.png?imageView2/2" alt="">
              <div class="channel-carName">马自达昂克塞拉</div>
              <div class="channel-carPrice">成交价8.66万</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="index-channel-carBox index-jr-channel">
        <ul class="index-channel-carlist" style="left: 0px;">
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn1811151916584ead660ab471cde379611c2c1af33f54.png?imageView2/2" alt="">
              <div class="channel-carName">5万内练手车</div>
              <div class="channel-carPrice">每天只需几十元</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115191718ad814f72b8061226554eb9653c161843.png?imageView2/2" alt="">
              <div class="channel-carName">工薪族最爱</div>
              <div class="channel-carPrice">月供只要1500</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181115191842839fa4a4f94d77120cf4e602b0ecafbd.png?imageView2/2" alt="">
              <div class="channel-carName">SUV家族代步首选</div>
              <div class="channel-carPrice">同首付，买辆宽敞的</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn18111519185812383e73e8109c6a49bd8816bee98938.png?imageView2/2" alt="">
              <div class="channel-carName">准新车</div>
              <div class="channel-carPrice">低首付高品质</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn181227200452df5d498ed1e9137ff44dc12e663db274.png?imageView2/2" alt="">
              <div class="channel-carName">奔驰宝马开回家</div>
              <div class="channel-carPrice">首付不到5万元</div>
            </router-link>
          </li>
          <li class="index-channel-carItem">
            <router-link to="">
              <img class="channel-carImg" src="https://image1.guazistatic.com/qn1811151920537af84bd6a253fb661c771360b6543b12.png?imageView2/2" alt="">
              <div class="channel-carName">车主急售实惠</div>
              <div class="channel-carPrice">买的早不如刚刚好</div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="index-channel-carBox-next active">
        <i class="next" @click="next"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    data() {
      return {
        nextClick: indexChannelCarBox
      }
    },
    next() {
      this.indexChannelCarBox = nextClick
    }
  },
}
</script>

<style scoped>
@import '../style/allstyle.css';
.index-channel-new-bg {
  height: 100%;
  margin-top: 316px;
  background: #fff;
}
.index-channel-new {
  width: 1200px;
  height: 225px;
  position: absolute;
  top: 554px;
  right: 0;left: 0;
  margin: auto;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.active-green .index-channel-new .index-channel-1.active {
  background: url(//cli-sta.guazistatic.com/c2c_web/ershou.5b609a564a8686c63a02793d97cbc552.jpg);
  background-size: 100% 100%;
  animation: bounce .3s ease;
}
.index-channel-new li {
  width: 300px;
  height: 225px;
  float: left;
  position: relative;
}
.active-green li:first-child .icon, .active-orange li:nth-child(2) .icon,
.active-red li:nth-child(3) .icon, .active-turquise li:nth-child(4) .icon,
  .active .icon {
  display: inline-block;
}
.index-channel-new .index-channel-1 .icon {
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon-green.8a53822f90031dd1735dc21761dee88e.png);
}
.index-channel-new .icon {
    display: none;
    width: 20.5px;
    height: 10.5px;
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    bottom: -10.5px;
    margin-left: -10px;
}
.index-channel-new .index-channel-2 {
  background: url(//cli-sta.guazistatic.com/c2c_web/yanxuan2.5ad2f9dcd798ee4f9b9469875327a0a2.png);
  background-size: 100% 100%;
}
.index-channel-new .index-channel-2 .icon {
  background-image: url(//cli-sta.guazistatic.com/c2c_web/icon-orange.51903464d913d05af169037192a9a7a3.png);
}
.index-channel-new .index-channel-3 {
    background: url(//cli-sta.guazistatic.com/c2c_web/maiche2.8741e6b8d150855cd0914bc5bbd40232.jpg);
    background-size: 100% 100%;
}
.index-channel-new .index-channel-3 .icon {
    background-image: url(//cli-sta.guazistatic.com/c2c_web/icon-red.ecb6a2ab68f94c146d18af307dde200c.png);
}
.index-channel-new .index-channel-4 {
    background: url(//cli-sta.guazistatic.com/c2c_web/jinrong2.cbeaf4a85c95d8b9fb2b05fa526e0c4f.png);
    background-size: 100% 100%;
}
.index-channel-new .index-channel-4 .icon {
    background-image: url(//cli-sta.guazistatic.com/c2c_web/icon-turquise.c19efab2e6c9a00303867b4dbcd5f607.png);
}
.index-channel-car {
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}
.index-channel-car .active {
  display: block;
}
.index-channel-carBox-next, .index-channel-carBox-prev {
  width: 31px;
  float: left;
  height: 178.5px;
  padding-top: 172.5px;
}
.index-channel-carBox-prev.active i {
  background: url(//cli-sta.guazistatic.com/c2c_web/no-prev.572ceac5e2b3e478a55f53d21b6640bc.png) no-repeat;
  background-size: 100% 100%;
}
.index-channel-carBox-prev i {
    width: 28px;
    height: 28px;
    display: block;
    margin-top: 21px;
    cursor: pointer;
}
.index-channel-carBox-prev i:hover {
    background: url(//cli-sta.guazistatic.com/c2c_web/hover-prev.9bdb3c68fe7a8684f49e7a32be2b05d9.png) no-repeat;
    background-size: 100% 100%;
}
.index-channel-carBox {
    width: 1138px;
    height: 178.5px;
    margin: 0 auto;
    padding-top: 172.5px;
    overflow: hidden;
    float: left;
    display: none;
}
.nextClick {
  width: 1138px;
  height: 178.5px;
  margin: 0 auto;
  padding-top: 172.5px;
  overflow: hidden;
  float: left;
  display: none;
  transform: rotateX(-160px);
}
.index-channel-carBox .index-channel-carlist {
    height: 100%;
    display: inline-flex;
    transition: all .6s;
    /* -moz-transition: all .6s; */
    /* -webkit-transition: all .6s;  */
    /* -o-transition: all .6s; */
    position: relative;
    /* left: 0; */
}
.index-channel-carBox .index-channel-carItem {
    display: inline-flex;
    width: 160px;
    height: 100%;
    margin-right: 36px;
}
.index-channel-carBox .channel-carImg {
    width: 100%;
    height: 70px;
    display: block;
}
.index-channel-carBox .channel-carName {
    width: 100%;
    font-size: 14px;
    color: #181818;
    margin-top: 18px;
    line-height: 14px;
    text-align: center;
}
.active-red .index-channel-carBox .channel-carPrice {
    color: #ff3f00;
}
.index-channel-carBox .channel-carPrice {
    font-size: 14px;
    color: #fa5428;
    line-height: 14px;
    margin-top: 10px;
    text-align: center;
}
.index-channel-carBox-next {
    float: right;
}
.index-channel-carBox-next.active i {
    background: url(//cli-sta.guazistatic.com/c2c_web/no-next.81855256cb96ea1aad530708a487f4c8.png) no-repeat;
    background-size: 100% 100%;
}
.next {
    width: 28px;
    height: 28px;
    display: block;
    margin: 0 auto;
    margin-top: 27px;
    float: right;
    cursor: pointer;
}
.index-channel-carBox-next i:hover {
    background: url(//cli-sta.guazistatic.com/c2c_web/hover-next.52bc251de0971b5bfc4ab7f6962cf95e.png) no-repeat;
    background-size: 100% 100%;
}
/* .nexti {
  width: 28px;
  height: 28px;
  display: block;
  margin: 0 auto;
  margin-top: 27px;
  float: right;
  cursor: pointer;
  transform: translateX(-160px);
} */
</style>