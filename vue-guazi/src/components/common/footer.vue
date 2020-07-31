<template>
  <div class="footer">
    <div class="company-info clearfix">
      <div class="instructions-guazi-name">瓜子®/瓜子二手车®等带有®标记的内容均是车好多旧机动车经纪（北京）有限公司的注册商标。</div>
      <div class="footer-logo"></div>
      <div class="phone-email">
        <P>咨询电话：<i>400-060-6085</i><span>(周一至周五 9:00-21:00)</span><br>
        服务监督热线：<i>400-066-8780</i><span>(周一至周五 9:00-21:00)</span>
        </P>
        <p>互联网违法或不良信息举报联系方式:<br>
        邮箱：<i>jubao@guazi.com</i>&nbsp;&nbsp;电话：<i>010-89191670</i></p>
      </div>
      <div class="ewm-box">
        <img src="https://image1.guazistatic.com/qn1909231407351f42a7e2be00ae422dc6c1e57ae92571.png" 
        alt="" class="gz-ewm">
        <p class="ewm-tit">关注微信</p>
      </div>
      <div class="ewm-box">
        <span class="bg-old-ewm"></span>
        <p class="ewm-tit">下载APP</p>
        <span class="ewm-tit-tip">瓜分十亿红包</span>
      </div>
      <div class="basic-info">
        <div class="info-link">
          <router-link to="">关于瓜子</router-link>
          <router-link to="">集团介绍</router-link>
          <router-link to="">加入我们</router-link>
          <router-link to="">联系我们</router-link>
          <router-link to="">服务保障</router-link>
          <router-link to="">隐私声明</router-link>
          <router-link to="">服务条款</router-link>
          <router-link to="">营业执照</router-link>
          <router-link to="">环评公示</router-link>
        </div>
        <p class="arc-info">Copyright 2019 www.guazi.com All Rights Reserved</p>
        <p class="arc-info">京ICP备15053955号  ICP证151071号 </p>
        <div class="protect clearfix">
          <router-link to="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502037713"
           class="police">京公网安备11010502037713号</router-link>
        </div>
      </div>
    </div>
    <div @click="show(index)" :class="(cur == index) ? 'friendly-active' :'friendly-link'" 
     v-for="(item, index) in footerJSON" :key="index">
      <p class="link-tit">{{item.linktit}}</p>
      <span class="open-box" v-if="show"></span>
      <span class="close-box" else></span>
        <router-link to="">{{item.linkcar}}</router-link>
    </div>
    <p style="text-align:center;line-height:20px;font-size:12px;color:#666;
     padding-top:20px;">车好多旧机动车经纪（北京）有限公司&emsp;&emsp;&emsp;
    北京市顺义区南法信镇政府西侧(北京市旧机动车交易市场有限公司顺义分市场院内A区01号)&emsp;&emsp;&emsp;   
    010-57317000</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      footerJSON: [],
      linkcar: [],
      cur: -1,
      show: true
    }
  },
  created() {
    axios.get('../../../static/data/footer.json').then((response) => {
      this.footerJSON = response.data.data
      // for (let i = 0; i <= response.data.data.length; i++){
      //   this.linkcar = response.data.data[i].linkcar.split('|');
      //   // this.footerJSON.push(linkcar)
      // }
      // console.log(response);
    }).catch((error) => {
      alert('网络错误， 请重试!');
    })
  },
  methods: {
    show(index) {
      this.show = false
      this.cur = index;
    }
  },
}
</script>

<style scoped>
@import '../../style/allStyle';
.footer {
  padding: 50px 0 30px;
  background: #2a2c37;
}
.company-info {
  width: 1190px;
  height: 90px;
  margin: 0 auto;
  color: #b8b8b8;
  padding-bottom: 70px;
  position: relative;
}
.friendly-link, .instructions-guazi-name {
  height: 28px;
  line-height: 28px;
  margin: 0 auto;
}
.instructions-guazi-name {
  width: 1190px;
  color: #666;
  font-size: 12px;
  position: absolute;
  left: 0;
  bottom: 0;
}
.footer-logo {
  width: 102px;
  height: 102px;
  background-repeat: no-repeat;
  background-image: url("https://image.guazistatic.com/gz01190923/15/39/f3eebb2bedbd15fc6fb8e3226bf35e44.png");
  background-size: 100% 100%;
  float: left;
  margin-left: 40px;
}
.phone-email {
  float: left;
  width: 378px;
  padding-left: 30px;
}
.phone-email p {
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 16px;
}
.phone-email p i {
  padding-right: 18px;
}
.phone-email p span {
  display: inline-block;
  font-size: 12px;
}
.ewm-box {
  float: left;
  width: 85px;
  height: 105px;
  margin-top: 4px;
  margin-right: 30px;
  text-align: center;
  display: block;
}
.bg-old-ewm, .ewm-box img {
  display: block;
  width: 85px;
  height: 85px;
}
.ewm-box .ewm-tit {
  line-height: 22px;
  font-size: 14px;
}
.bg-old-ewm, .bg-new-ewm {
  background-size: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
}
.bg-old-ewm {
  background-image: url(//cli-sta.guazistatic.com/c2c_web/footer-app.5e5c77f77cb804c3d0b18276b53a52ab.png);
}
.ewm-box .ewm-tit-tip {
  width: 80px;
  height: 16px;
  background: #22ac38;
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #fff;
  display: inline-block;
  line-height: 16px;
}
.company-info .basic-info {
  float: left;
  width: 390px;
  padding-left: 20px;
  background: transparent;
  margin: 0;
  overflow: hidden;
}
.info-link {
  line-height: 22px;
  font-size: 14px;
  padding-bottom: 8px;
}
.info-link a {
  color: #b8b8b8;
  margin-right: 5px;
}
.arc-info {
  line-height: 20px;
  font-family: simhei;
  font-size: 12px;
}
.protect {
  padding-top: 3px;
  height: 28px;
  line-height: 28px;
}
.protect .police {
  display: inline-block;
  color: #939393;
  line-height: 28px;
  padding-left: 24px;
  position: relative;
  font-size: 12px;
}
.protect .police:before {
  content: "";
  width: 20px;
  height: 20px;
  background-position: 0 -62px;
  position: absolute;
  left: 0;top: 3px;
}
.protect .icon-315, .protect .icon-xin, .protect .police:before {
    background-image: url(//cli-sta.guazistatic.com/c2c_web/icon-foot.8db09594385dc9fbd737a66b0ffc26e3.png);
    display: inline-block;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.friendly-link {
  width: 1100px;
  padding: 0 0 0 90px;
  position: relative;
  overflow: hidden;
}
.link-tit {
  position: absolute;
  left: 0;
  top: 0;
  width: 90px;
  height: 28px;
  font-size: 16px;
}
.friendly-link a:hover, .link-tit {
  color: #666;
}
.close-box, .open-box {
  position: absolute;
  right: 0;
  display: block;
  width: 25px;
  height: 19px;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
}
.open-box {
  top: 6px;
  /* background-position: -70px -100px; */
  background-repeat: no-repeat;
  background-image: url(../../assets/iconfont/arrow_down.png);
  background-size: 25px 19px;
}
.friendly-active .open-box,
.friendly-link .close-box {
  display: none;
}
.close-box {
  bottom: 10px;
  background-position: -90px -100px;
  background-repeat: no-repeat;
  background-image: url(../../assets/iconfont/arrow_up.png);
  background-size: 16px 9px;
}
.friendly-link a {
  color: #666;
  line-height: 28px;
  margin-right: 20px;
  display: inline-block;
  font-size: 12px;
}
.friendly-active .close-box {
    display: block;
}
.friendly-active {
  width: 1100px;
  padding: 0 0 0 90px;
  position: relative;
  margin: 0 auto;
  height: auto;
}
</style>