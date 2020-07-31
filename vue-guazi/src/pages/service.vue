<template>
<div>
  <div class="banners main-con">
    <img :src="imgSrc1" alt="">
  </div>
  <div class="w mt">
    <h3 class="save">259项全车检测-安全</h3>
    <div class="c2c-process clearfix">
      <ul>
        <li>
          <div class="save-one"></div>
          <p class="t">259项专业检测</p>
          <p class="c">原奥迪中国二手车业务总监，领衔定制</p>
        </li>
        <li>
          <div class="save-two"></div>
          <p class="t">完备的检测流程</p>
          <p class="c">交易前完成车况检测</p>
        </li>
        <li>
          <div class="save-three"></div>
          <p class="t">专业的评估师团队</p>
          <p class="c">岗前培训，考核上岗，经验丰富</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="protect-box clearfix">
    <ul class="w clearfix">
      <li>
        <div class="condition condition-one"></div>
        <p class="c">水浸痕迹达到前排座椅音响底部</p>
        <div class="condition condition-two"></div>
        <p class="c">发动机线束及橡胶制品存在熏烟或火烧/车辆覆盖件及驾驶舱存在<br>熏烟或火烧</p>
      </li>
      <li>
        <p class="t">车况舒心，买的放心</p>
        <div class="condition condition-three"></div>
        <p class="c">
          A/B/C柱一处及以上受损至车身框架焊点，以及因此而进行修复或更换；<br>
          前纵梁、后纵梁受损，或存在修复痕迹；<br>
          后围板或后底板有更换或重新焊接、打胶痕迹；<br>
          前叶子板内衬（内楦）有变形或修复痕迹；<br>
          前后减震器座部位存在修复痕迹或焊接痕迹；<br>
          防火墙存在修复痕迹或焊接痕迹；<br>
          左右底大边存在切割或焊接痕迹；
        </p>
      </li>
    </ul>
  </div>
  <div class="protect-tui">
    <img :src="imgSrc2" alt="">
    <div class="con">
      <div class="pad">
        <div class="t">30天可退最高2年售后保障—无忧</div>
        <ul class="clearfix">
          <li>
            <p>30天可退</p>
            <span>担心买到重大事故车、水泡车、火烧车、命案车？<br>30天可退，瓜子二手车提供平台保障</span>
          </li>
          <li>
            <p>最高2年售后保障</p>
            <span>二手车也有售后保障<br>2年或4万公里售后保障，买后无担忧</span>
          </li>
        </ul>
        <p class="ps-text">*部分车辆不享受上述服务，具体以合同约定为准</p>
      </div>
    </div>
  </div>
  <div class="with">
    <div class="w">
      <h3>陪同交易-省心</h3>
      <ul class="four-list">
        <li><span></span>量身推荐车源</li>
        <li><span></span>销售陪同看车</li>
        <li><span></span>提供过户服务（同城）</li>
      </ul>
    </div>
  </div>
  <div class="question">
    <h3>常见问题</h3>
    <div class="layouts clearfix">
      <div class="left">
        <ul class="clearfix">
          <li v-for="(question, index) in questions.slice(0, 3)" :key="index">
            <span class="nub-tit"></span>
            <p class="p1">{{question.title}}</p>
            <div class="p2" v-html="question.content"></div>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="clearfix">
          <li v-for="(question, index) in questions.slice(3)" :key="index">
            <span class="nub-tit"></span>
            <p class="p1">{{question.title}}</p>
            <p class="p2" v-html="question.content"></p>
            <router-link to="" class="lookmore">查看更多</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc1:'https://image.guazistatic.com/gz01190923/15/57/2da942bc4793082b99e0eb2ed22237f9.jpg',
      imgSrc2:'https://image.guazistatic.com/gz01180530/16/59/044e4dd26cfb9273092f6a4dd4e02f43.jpg',
      questions: [
        { title:'瓜子二手车是谁?', content:'瓜子二手车，成立于2015年9月，致力于用创新重塑二手车产业，为用户创造更大的价值。瓜子二手车为用户提供二手车检测评估、居间撮合、汽车金融、售后保障等服务。2017年3月瓜子二手车推出新零售业务——瓜子二手车严选直卖店，为卖家提供实车寄售，为买家提供一次多看、一口价成交、一站式购车的综合服务。'},
        { title:'买车提供哪些保障?', content:'车辆满足条件即可享受30天可退，最高享受2年或4万公里售后保障，养车无忧。'},
        { title:'关于交易安全及款项支付的重要提示：', content:' 1、为保障交易安全，在瓜子二手车进行交易必须签署正式的电子交易合同。交易合同签署过程中，请您务必提供所需交易资料和信息，仔细观看签约告知视频，严格进行人脸识别，认真阅读合同后确认签署。<br>2、瓜子二手车禁止任何瓜子工作人员以现金、个人微信、个人支付宝、个人银行账户刷卡或转账等方式直接收取您任何款项（包括但不限于服务费、意向金、车辆价款等）。<br>3、瓜子二手车显著提示：交易过程中所涉及的所有款项，您均应通过瓜子二手车提供的官方收款渠道（官方微信、官方支付宝、官方POS刷卡或对公账户转账）进行支付。<br>4、如您发现瓜子工作人员违规操作，您应拒绝并及时向瓜子二手车进行投诉举报（投诉举报邮箱：lianzheng.bsn@guazi.com），否则您须自行承担由此造成的任何损失。'},
        { title:'如何买车？如何卖车？', content:' 买家攻略:<br>1、预约看车：拨打400-023-1529或在线预约；<br>2、专人带看：瓜子将安排售车顾问陪同您看车；<br>3、签署合同：签署交易合同；<br>4、交易过户：支付车款，好车开回家。<br><br>卖家攻略：<br>1、预约卖车：拨打400-023-1529或在线预约；<br>2、检测评估：瓜子在车主授权范围内对车辆进行专业检测，并发布检测报告；<br>3、支付款项：当天拿钱，最高可得50%，过户得余款；<br>4、交易过户：瓜子二手车可提供过户服务。'},
        { title:'能提供什么样的金融服务?', content:'瓜子二手车有专属金融管家为您量身定制金融方案，可拨打热线400-630-3009或在线快速申请。'},
      ]
    }
  },
}
</script>

<style scoped>
@import '../style/allStyle';
.banners {
  position: relative;
  z-index: 1;
  top: -64px;
  min-width: 1200px;
}
.banners img {
  width: 100%;
  height: auto;
}
.mt {
  margin-top: -64px;
  min-width: 1200px;
}
h3 {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #232e33;
  padding: 50px 0 55px 0;
  line-height: 40px;
}
.c2c-process {
  width: 1200px;
  height: 543px;
  margin: 0 auto;
}
.c2c-process li {
  float: left;
  width: 397px;
  height: 543px;
  background-color: #f9f9fa;
  margin-right: 4px;
}
.c2c-process li:last-child {
  margin-right: 0;
}
.c2c-process li .save-one {
  background: url(//sta.guazistatic.com/node_web/save-one.ac661b2dbdab562b51c68f16f589d9fd.jpg) no-repeat;
  background-size: 397px 414px;
  width: 397px;
  height: 414px;
}
.c2c-process li .t {
  padding: 38px 0 16px 32px;
  color: #232d33;
  font-size: 20px;
  line-height: 20px;
}
.c2c-process li .c {
  color: #2e3d47;
  font-size: 15px;
  padding: 0 0 0 32px;
  line-height: 15px;
}
.c2c-process li .save-two {
  background: url(//sta.guazistatic.com/node_web/save-two.b46c3dc7edd14bff6bb1d0db9e8606a2.jpg) no-repeat;
  background-size: 397px 414px;
  width: 397px;
  height: 414px;
}
.c2c-process li .save-three {
  background: url(//sta.guazistatic.com/node_web/save-three.8d9e0bf441d2d7dc2c1fcc1e2e85e8bd.jpg) no-repeat;
  background-size: 397px 414px;
  width: 397px;
  height: 414px;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.protect-box {
  background: #f9f9fa;
  padding-bottom: 85px;
  border-top: 235px solid #fff;
  min-width: 1200px;
}
.protect-box .w {
  width: 1200px;
  margin: 0 auto;
  margin-top: -156px;
}
.protect-box .w li {
  width: 600px;
  float: left;
}
.protect-box .w li .condition {
  width: 356px;
  height: 290px;
}
.protect-box .w li .condition-one {
  background: url(//sta.guazistatic.com/node_web/condition-one.5f6b92c98ba175524d4b17b324e13498.png) no-repeat;
  background-size: 356px 290px;
}
.protect-box .w li .c {
  color: #2e3d47;
  font-size: 15px;
  line-height: 45px;
  padding-bottom: 34px;
  margin-top: -10px;
}
.protect-box .w li .condition-two {
  background: url(//sta.guazistatic.com/node_web/condition-two.3d34e12ab7e7b5250e905d915e25089f.png) no-repeat;
  background-size: 356px 290px;
}
.protect-box .w li .t {
  color: #232d33;
  font-size: 35px;
  font-weight: bold;
  line-height: 35px;
  padding-bottom: 48px;
}
.protect-box .w li .condition-three {
  background: url(//sta.guazistatic.com/node_web/condition-three.e5dc10a08f5fb4a7b0a1ddb54ce7d6cd.png) no-repeat;
  background-size: 356px 290px;
}
.protect-tui {
  position: relative;
  min-width: 1200px;
}
.protect-tui img {
  width: 100%;
  display: block;
  position: relative;
  z-index: 0;
}
.protect-tui .con {
  position: absolute;
  width: 100%;
  top: 0;left: 0;right: 0;
  z-index: 2;
}
.protect-tui .con .pad {
  width: 630px;
  margin: 0 auto;
  padding: 10% 0 0 570px;
  z-index: 2;
}
.protect-tui .con .pad .t {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  position: relative;
  line-height: 37px;
  margin-bottom: 15%;
}
.protect-tui .con .pad .t::after {
    content: '';
    width: 51px;
    height: 6px;
    background: #fff;
    position: absolute;
    bottom: -30px;
    left: 0;
    border-radius: 3px;
}
.protect-tui .con .pad li {
  float: left;
  width: 290px;
  color: #fff;
}
.protect-tui .con .pad li p {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 30px;
  line-height: 20px;
}
.protect-tui .con .pad li span {
  display: block;
  line-height: 30px;
  font-size: 15px;
  opacity: .6;
}
.protect-tui .con .pad .ps-text {
  color: #f9f9fa;
  font-size: 15px;
  padding-top: 10px;
  opacity: .5;
}
.with {
  height: 417px;
  background: #24c488;
  color: #fff;
  min-width: 1200px;
}
.with h3 {
  font-size: 40px;
  font-weight: bold;
  padding: 93px 0 56px 0;
  line-height: 40px;
  color: #fff;
}
h3 {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #232e33;
  padding: 50px 0 55px 0;
  line-height: 40px;
}
.with .four-list {
  height: 184px;
  width: 1200px;
  margin: 0 auto;
  background-position: 0 40px;
  display: flex;
}
.with .four-list li {
  float: left;
  -webkit-box-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.with .four-list li:nth-child(1) span {
  background-image: url(data:image/png;base64,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);
}
.with .four-list li span {
  display: block;
  width: 90px;
  height: 90px;
  background-size: 90px 90px;
  background-repeat: no-repeat;
  margin: 0 auto 30px auto;
}
.with .four-list li:nth-child(2) span {
  background-image: url(data:image/png;base64,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);
}
.with .four-list li:nth-child(3) span {
  background-image: url(data:image/png;base64,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);
}
.question {
  width: 1000px;
  margin: 0 auto;
  padding-bottom: 30px;
}
.question h3 {
  padding-bottom: 79px;
}
.question .layouts .left {
  width: 449px;
  margin-right: 102px;
  float: left;
}
.question li {
  width: 449px;
  float: left;
  margin-bottom: 30px;
  border-bottom: 1px solid #e8f0ea;
}
.nub-tit {
  display: inline-block;
  width: 25px;
  height: 22px;
  background-size: 62.5px 161px;
  background-position: -2.5px -131.5px;
  margin-bottom: 15px;
  margin-right: 13px;
  background: url(//sta.guazistatic.com/node_web/guarantee.cd503887e1e1ecc72a0041e01be69e20.png) no-repeat;
}
.question .p1 {
  color: #58aa5c;
  font-size: 18px;
  display: inline-block;
  line-height: 22px;
  vertical-align: top;
}
.question .p2 {
  color: #586067;
  font-size: 14px;
  line-height: 27px;
  padding-bottom: 20px;
}
.question .layouts .right {
  width: 449px;
  float: left;
}
.lookmore {
  color: #62bc66;
  font-size: 14px;
  line-height: 14px;
  padding-bottom: 30px;
  display: block;
}
</style>
