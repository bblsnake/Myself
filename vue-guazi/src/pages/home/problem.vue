<template>
<div>
  <div class="problem">
    <div class="problem-tit">瓜子问答</div>
    <ul class="problem-list">
      <li class="problem-item" >
        <div v-for="(item, index) in problem.slice(0, 3)" :key="index">
          <div class="problem-item-tit">{{item.tit}}</div>
          <div class="problem-item-con">{{item.con}}</div>
        </div>
      </li>
      <li class="problem-item" v-for="(item, index) in problem.slice(3)" :key="index">
        <div class="problem-item-tit">{{item.tit}}</div>
        <div class="problem-item-con" v-html="item.con"></div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
      problem: [
        {tit: '在瓜子二手车上买二手车可以办理分期吗？', con: '可以，目前用户可以通过与瓜子合作的机构进行分期购车。具体请参见车辆详情页，也可直接拨打瓜子金融客服热线400-630-3009进行咨询。'},
        {tit: '瓜子二手车的车辆异地可以看车吗？', con: '可以，不过请您在异地看车之前务必先和我们的销售取得联系，确认车辆的在售情况，以免您异地看车时出现车辆已售的情况耽误您的时间。'},
        {tit: '瓜子二手车的优势？', con: '瓜子二手车展示车源经过259项授权检测，售出车源将依据合同约定享受平台售后保障，最高2年/4万公里。如发现售出车源是重大事故车、火烧车、水泡车、命案车，30天内可退。'},
        {tit: '关于交易安全及款项支付的重要提示：', con: '1、为保障交易安全，在瓜子二手车进行交易必须签署正式的电子交易合同。交易合同签署过程中，请您务必提供所需交易资料和信息，仔细观看签约告知视频，严格进行人脸识别，认真阅读合同后确认签署。<br>2、瓜子二手车禁止任何瓜子工作人员以现金、个人微信、个人支付宝、个人银行账户刷卡或转账等方式直接收取您任何款项（包括但不限于服务费、意向金、车辆价款等）。<br>3、瓜子二手车显著提示：交易过程中所涉及的所有款项，您均应通过瓜子二手车提供的官方收款渠道（官方微信、官方支付宝、官方POS刷卡或对公账户转账）进行支付。<br>4、如您发现瓜子工作人员违规操作，您应拒绝并及时向瓜子二手车进行投诉举报（投诉举报邮箱：lianzheng.bsn@guazi.com），否则您须自行承担由此造成的任何损失。'}
      ]
  }
},
}
</script>

<style scoped>
@import '../../style/allStyle';
.problem {
  width: 1125px;
  margin: 0 auto;
  overflow: hidden;
}
.problem .problem-tit {
  font-size: 40px;
  color: #181818;
  letter-spacing: 4.25px;
  font-weight: 700;
  text-align: center;
  line-height: 53px;
  padding-top: 79.5px;
  padding-bottom: 77.5px;
}
.problem .problem-list {
  margin: 0 auto;
}
.problem .problem-item {
  width: 500px;
  float: left;
  margin-right: 62.5px;
  margin-left: 62.5px;
}
.problem .problem-item .problem-item-tit {
  font-size: 18px;
  font-weight: 700;
  color: #3cb46d;
  letter-spacing: 1.9px;
  line-height: 18px;
  margin-bottom: 21px;
  position: relative;
  text-indent: 41.5px;
}
.problem .problem-item .problem-item-tit:before {
  content: "";
  width: 24.5px;
  height: 21.5px;
  background: url(//cli-sta.guazistatic.com/c2c_web/pro.c3e69a272e918d3ffc1c9912ea1d2c81.png);
  background-size: 100% 100%;
  margin-right: 17px;
  position: absolute;
  top: -2px;
  left: 0;
}
.problem .problem-item .problem-item-con {
  font-size: 14px;
  line-height: 27px;
  color: #181818;
  width: 439px;
  text-align: justify;
  padding-bottom: 23.5px;
  margin-bottom: 31px;
  position: relative;
}
.problem .problem-item .problem-item-con:after {
  content: "";
  background-color: #e8f0ea;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: scaleY(.5);
  transform-origin: 0 0;
}
.problem .problem-item:nth-child(2) {
    margin-right: 0;
    margin-left: 0;
}
</style>