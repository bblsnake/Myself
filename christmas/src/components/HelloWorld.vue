<template>
  <div class="hello">
    <!-- <div class="name">
      曾佳莺圣诞快乐！
    </div> -->
    <svg width="100%" height="100" xmlns="http://www.w3.org/2000/svg">
        <text text-anchor="middle" x="50%" y="50%" class="text text-1">曾佳莺 Merry Christmas</text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-2">曾佳莺 Merry Christmas</text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-3">曾佳莺 Merry Christmas</text>
        <text text-anchor="middle" x="50%" y="50%" class="text text-4">曾佳莺 Merry Christmas</text>
    </svg>
    <div class="snow">
      <span class="snow1"></span>
      <span class="snow2"></span>
      <span class="snow3"></span>
    </div>
    <div class="tree">
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: [ 'test' ],
  created() {
    document.title = '圣诞快乐'
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .text{
        font-size: 64px;
        font-weight: bold;
        text-transform: uppercase;
        fill: none;
        stroke: #3498db;
        stroke-width: 2px;
        stroke-dasharray: 90,310;
        animation: stroke 6s infinite linear;
    }
    .text-1{
        animation-delay: -1.5s;
        stroke: red;
        text-shadow: 0 0 10px red;
    }
    .text-2{
        animation-delay: -3s;
        stroke: #00b300;
        text-shadow: 0 0 10px #00b300;
    }
    .text-3{
        animation-delay: -4.5s;
        stroke: #e74c3c;
        text-shadow: 0 0 10px #e74c3c;
    }
    .text-4{
        animation-delay: -6s;
        stroke: #9b59b6;
        text-shadow: 0 0 10px #9b59b6;
    }
    @keyframes  stroke{
       100%{
           stroke-dashoffset: -400;
       }
    }
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
svg {
  position: absolute;
  top: 100px;
}
.hello {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #001f00;
}
.hello::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: #fff;
}
.tree{
  position: relative;
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.1);
}
.tree::before {
  content: '';
  position: absolute;
  bottom: -70px;
  left: 0;
  width: 100%;
  height: 100px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
}
.tree::after{
  content: '';
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 40px;
  background: #734500;
}
.tree div {
  position: absolute;
  width: 100%;
  height: 200px;
  bottom: 0;
  display: flex;
}
.tree div:nth-child(2) {
  transform: translateY(-100px) scale(0.8);
  z-index: 1;
}
.tree div:nth-child(3) {
  transform: translateY(-175px) scale(0.6);
  z-index: 1;
}
.tree div:nth-child(4) {
  transform: translateY(-240px) scale(0.4);
  z-index: 1;
}
.tree div:nth-child(5) {
  transform: translateY(-280px) scale(0.2);
  z-index: 1;
}
.tree div span {
  position: relative;
  width: 50%;
  height: 100%;
  display: block;
  overflow: hidden;
}
.tree div span:nth-child(1)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(#00b300, #0f0);
  border-top-left-radius: 110% 100%;
  border-top-right-radius: 0% 100%;
  border-bottom-left-radius: 50 20%;
  border-bottom-right-radius: 50% 20%;
}
.tree div span:nth-child(2)::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(#00b300, #0f0);
  border-top-left-radius: 0% 100%;
  border-top-right-radius: 110% 100%;
  border-bottom-left-radius: 50 20%;
  border-bottom-right-radius: 50% 20%;
}
.snow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.snow .snow1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../static/snow.png');
  z-index: 1000;
  mix-blend-mode: screen;
  animation: animate 2s linear infinite;
  transform:  scale(2);
}
.snow .snow2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../static/snow.png');
  z-index: 1000;
  mix-blend-mode: screen;
  animation: animate 5s linear infinite;
  transform: scale(1);
}
.snow .snow3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../static/snow.png');
  z-index: 1000;
  mix-blend-mode: screen;
  animation: animate 5s linear infinite;
  transform: scale(1.5);
  filter: blur(1px);
}
@keyframes animate {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 506px;
  }
}
</style>
