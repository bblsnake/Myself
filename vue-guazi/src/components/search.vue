<template>
<div>
  <!-- <div class="index-header"> -->
    <!-- <input type="hidden" id="skipKindNew" value="0">
    <input type="hidden" id="clueData" data-puid data-city-id="214">
    <div id="jstop" class="j-header header-2 green-header">
      <div class="header">
        <h1>
          <router-link to="" title="瓜子二手车">瓜子二手车</router-link>
        </h1>
        <div class="city">
          <p class="city-curr">南昌</p>
        </div>
      </div>
    </div> -->
    <div class="search">
      <div class="index-title"></div>
      <div class="search-box suggestion_widget autocomplete" data-default-count="9">
        <input type="text" class="search-input js_search_input_index" placeholder="请输入关键词，
        例如：君越  2.4L" data-role="keywordInput" name="keyword" autocomplete="off"
        data-domain="bj" id="">
        <button class="search-btn" type="button">搜索</button>
        <input type="hidden" value="bj" name="hiddenCity" id="">
        <div class="autocomplete-dropdown">
          <ul>
            <li class="item">
              <span class="hot-tip">热门推荐</span>
              </li>
            <li class="item">大众</li>
            <li class="item">福特</li>
            <li class="item">别克</li>
            <li class="item">SUV</li>
            <li class="item">现代</li>
            <li class="item">雪佛兰</li>
            <li class="item">丰田</li>
            <li class="item">日产</li>
            <li class="item">起亚</li>
          </ul>
        </div>
        <div class="autocomplete-dropdown">
          <ul>
            <li class="item">
              <span class="hot-tip">热门推荐</span>
              </li>
            <li class="item">凯越</li>
            <li class="item">大众POLO</li>
            <li class="item">卡罗拉</li>
            <li class="item">福克斯</li>
            <li class="item">英朗</li>
            <li class="item">轩逸</li>
            <li class="item">五菱宏光</li>
            <li class="item">朗逸</li>
            <li class="item">科鲁兹</li>
          </ul>
        </div>
      </div>
      <ul class="search-select" style="display: none;">
        <li class="select-tit">热门推荐</li>
        <li>大众</li>
        <li>大众</li>
        <li>大众</li>
        <li>大众</li>
      </ul>
    </div>
  </div>
<!-- </div> -->
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import '../style/allStyle.css';

.search {
  font: 12px/1.5 PingFang SC,Microsoft YaHei,arial,helvetica,sans-serif;
  width: 655px;
  height: 57px;
  margin-top: 0;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  border-radius: 6px;
  position: absolute;
  top: -95px;
  left: 162.5px;
  float: right;
} 
.index-title {
  width: 574px;
  height: 32px;
  background: url(//cli-sta.guazistatic.com/c2c_web/index-text.d79aa1230c0bba30025efe2f93187609.png);
  background-size: 100% 100%;
  position: absolute;
  top: -54.5px;
}
.search-box {
  border: none;
  position: relative;
  width: 100%;
  height: 57px;
}
.search-input {
  width: 70%;
  height: 44px;
  margin-top: 7.5px;
  line-height: 44px;
  padding-left: 20px;
  padding-right: 0;
  font-size: 18px;
  float: left;
  border: none;
  padding: 0 10px;
  color: #495056;
  font-family: Microsoft Yahei,arial,"sans-serif";
}
.search-btn {
  line-height: 51px;
  margin: 3px 3px 0 0;
  height: 51px;
  width: 105px;
  padding: 0;
  background: #3cb46d;
  border-radius: 0 4px 4px 0;
  text-align: center;
  font-size: 18px;
  color: #fff;
  float:right;
  border: none;
}
.autocomplete-dropdown {
  display: none;
  position: absolute;
  left: 0;
  margin: 0;
  padding: 5px 0;
  z-index: 9998;
  width: 100%;
  height: auto;
  background-color: #fff;
  border: 1px solid #22ac38;
  box-shadow: 2px 2px 3px #eee;
  color: #000;
  overflow: auto;
  text-align: left;
}
.autocomplete-dropdown ul {
  list-style: none outside none;
}
.autocomplete-dropdown ul li:first-child {
  background: #f5f5f7;
  height: 35px;
  line-height: 35px;
}
.autocomplete-dropdown ul li{
    height: 35px;
    line-height: 35px;
    padding-left: 20px;
    text-indent: 0;
    list-style: none outside none;
    color: #495056;
    padding: 0;
    border: 0;
    cursor: pointer;
    font-size: 14px;
    overflow: hidden;
    float: none;
}
</style>