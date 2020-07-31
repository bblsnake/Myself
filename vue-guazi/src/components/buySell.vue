<template>
  <div class="index-entry-buysell w1200">
    <div class="lineleft"></div>
    <div class="lineright"></div>
    <!-- 买车 -->
    <div class="entry-buycar fl">
      <div class="entry-title clearfix">
        <router-link to="/buyCar" class="fl">我要买车
        <i class="icon-buysell"></i>
        </router-link>
        <search></search>
      </div>
      <div class="buycar-brand clearfix">
        <router-link to=""  v-for="(item, index) in buyCar.slice(0, 7)" :key="index">
          <img :src="item.buycarBrandImg" alt="">
          {{item.buycarBrand}}
        </router-link>
      </div>
      <div class="buycar-brand clearfix marginTop13">
        <router-link to=""  v-for="(item, index) in buyCar.slice(7)" :key="index">
          <img :src="item.buycarBrandImg" alt="">
          {{item.buycarBrand}}
        </router-link>
        <router-link to="" class="icon-buycar-more all-brand-hover">全部品牌</router-link>
      </div> 
      <div class="buycar-price">
        <router-link to=""  v-for="(item, index) in carPrice" :key="index">{{item}}</router-link>
      </div>
      <div class="buycar-price marginTop7">
        <router-link to="" v-for="(item, index) in carType" :key="index">
          {{item}}
        </router-link>
      </div>
    </div>
    <!-- 卖车 -->
    <div class="entry-sellcar fr">
      <div class="sunhonglei"></div>
      <div class="entry-title clearfix">
        <router-link to="" class="fl">我要卖车<i class="icon-buysell"></i></router-link>
        <div class="sellcar-show fr">
          <p class="amount">瓜子保卖，当天拿钱，全程服务</p>
        </div>
        <!-- ::after -->
      </div>
      <div class="sellcar-box clearfix">
        <!-- 文本框输入错误时加active -->
        <div class="sellcar-phone js-sellcar-phone clearfix onblue">
          <input class="phone-input js-phone-input js-phone1" maxlength="11" 
          placeholder="请输入您的手机号">
          <div class="phone-btn-right js-phone-btn" position="4">预约卖车</div>
          <p class="phone-error js-phone-error"></p>
          <button class="phone-btn-sell js-subAssess">爱车估价</button>
          <router-link to="">
            <button class="phone-btn-eval">
              <!-- ::before -->
              保卖服务
            </button>
          </router-link>
          <!-- ::after -->
        </div>
        <!-- ::after -->
      </div>
    </div>
  </div>
</template>

<script>
import search from './search'
import axios from 'axios'
export default {
  data () {
    return {
      buyCar: [],
      allBrand: [],
      carPrice: [],
      carType: [],
      // car:[]
    }
  },
  components: {
    search
  },
  created() {
    axios.get('../static/data/buySell.json').then((e) => {
      // console.log(e);
      this.buyCar = e.data.buyCar
      this.allBrand = e.data.allBrand
      this.carPrice = e.data.carPrice
      this.carType = e.data.carType
      // this.car = e.data.allBrand.car.split('|')
      // console.log(this.car)
     
    }).catch(() => {
      alert('网络错误， 请重试!')
    })
  }
}
</script>

<style scoped>
@import '../style/allStyle';
.w1200 {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.index-entry-buysell {
  position: relative;
  top: 242.5px;
  z-index: 3;
  height: 271.5px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #dfe3e3;
  border-top: 0;
  box-shadow: 0 1px 4px 0 rgba(88, 100, 117, .2);
  border-radius: 6px;
  box-sizing: border-box;
}
.lineleft,.lineright {
  width: 1px;
  height: 29px;
  position: absolute;
  top: 0;
}
.lineleft {
  left: -1px;
}
.lineright {
  right: 0;
}
.entry-buycar {
  width: 728px;
}
.fl {
  float: left;
}
.entry-title {
  padding-top: 42.5px;
  padding-left: 42.5px;
}
.entry-title a {
  font-size: 22px;
  color: #181818;
  letter-spacing: 0.75px;
  line-height: 22px;
  font-weight: 700;
}
.entry-title .icon-buysell {
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 12px;
  background: url(https://cli-sta.guazistatic.com/c2c_web/Rectangle.357eba9c280a5e98477546102349bcdc.png);
  background-size: 100% 100%;
  margin: -4px 0 0 10px;
}
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.buycar-brand {
  padding-top: 30px;
  padding-bottom: 5px;
  padding-left: 20px;
}
.buycar-brand a {
  float: left;
  width: 100px;
  line-height: 22px;
  color: #181818;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px
}
.buycar-brand a img {
  width: 24px;
  height: 24px;
  vertical-align: top;
  margin-top: -1px;
  margin-right: 3px;
}
.marginTop13 {
  padding-top: 13px;
}
.buycar-brand .icon-buycar-more {
    text-align: center;
}
.buycar-price {
    padding-top: 15.5px;
    padding-left: 20px;
    height: 14px;
}
.buycar-price a {
  display: inline-block;
  height: 14px;
  font-size: 14px;
  color: #181818;
  line-height: 14px;
  width: 100px;
  /* float: left; */
  text-align: center;
}
.marginTop7 {
  margin-top: 7.5px;
}
.buycar-price:after {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 0;
  content: "";
  vertical-align: top;
}
.entry-sellcar {
  width: 377.5px;
  padding-right: 42.5px;
}
.fr {
  float: right;
}
.entry-sellcar .sunhonglei {
  width: 228.5px;
  height: 281.5px;
  background: url("https://image.guazistatic.com/gz01190927/18/46/ed7b16246227fcefc92fdfde6e183798.png");
  background-size: 100% 100%;
  position: absolute;
  top: -203px;
  right: 116px;
  z-index: -1;
}
.entry-sellcar .entry-title {
  padding-left: 0;
  padding-bottom: 9px;
  height: 45px;
  font-size: 22px;
  color: #181818;
  letter-spacing: 0.75px;
  overflow: hidden;
  padding-top: 43.5px;
  background: #fff;
}
.sellcar-show {
  position: relative;
  font-size: 14px;
  color: #181818;
  text-align: right;
  overflow: hidden;
  height: 26px;
  line-height: 27px;
  top: 1.5px;
}
.sellcar-phone {
  position: relative;
  width: 378px;
}
.phone-input {
  float: left;
  width: 223px;
  height: 28px;
  line-height: 28px;
  padding: 13px 10px 12px 20px;
  font-size: 16px;
  color: #495056;
  background: #f5f5f7;
  border: 1px solid #f5f5f7;
  border-radius: 4px;
  margin-bottom: 20px;
}
.phone-btn-right {
  width: 114px;
  line-height: 54px;
  background: #3cb46d;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  float: right;
}
.phone-err {
  position: absolute;
  top: 5px;
  right: 134px;
  line-height: 46px;
  font-size: 12px;
  color: #f76367;
  width: 200px;
  text-align: right;
}
.phone-btn-sell, .phone-btn-eval {
  float: left;
  width: 188.5px;
  height: 57px;
  line-height: 57px;
  font-size: 16px;
  color: #3cb46d;
  background: #f0fff6;
  border: 1px solid #3cb46d;
  border-right: none;
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
  padding: 0;
}
.phone-btn-eval {
  border-left: none;
  border-right: 1px solid #3cb46d;
  border-radius: 0 4px 4px 0;
  position: relative;
}
.phone-btn-eval:before {
  content: "";
  width: 1px;
  height: 14px;
  margin-top: 21.5px;
  position: absolute;
  left: 0;
  display: inline-block;
  background: #3cb46d;
}
</style>