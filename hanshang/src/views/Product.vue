<template>
  <div>
    <myheader></myheader>
    <div class="all box-border">
      <!-- 商品信息 -->
      <div class="details">
        <!-- 左 -->
        <div class="left box-border">
          <img
            src="../../public/img/40ee465a4ee7432c850df998cc83a228.jpg_lo450.jpg"
            alt=""
          />
        </div>
        <!-- 右 -->
        <div class="right">
          <p class="title">
            轻汉坊（鱼莲说）原创明制袄裙琵琶袖刺绣单层日常秋冬袄裙汉服
          </p>
          <div class="price-box">
            <i class="price-i">￥</i>
            <span class="price-big">158.00</span>
            <div class="sus myfont-color">
              交易成功:
              <i>5150</i>
            </div>
          </div>
          <div>
            <div class="size">
              尺码：
              <span class="active_box"
                ><router-link to
                  >上衣+裙子全套（现货）下单24小时发出</router-link
                ></span
              >
            </div>
            <div class="styles">
              <span
                >样式：
                <ul class="list-unstyled" v-for="(e, i) of sizes" :key="i">
                  <li class="box-border">
                    <router-link to>{{ e }}</router-link>
                  </li>
                </ul>
              </span>
            </div>
            <div class="store">
              库存：
              <span>100件</span>
            </div>
            <div class="buy-cart">
              <router-link to class="rounded">立即剁手</router-link>
              <router-link to class="rounded">
                <i></i>
                加入购物车</router-link
              >
            </div>
          </div>
        </div>
      </div>
	<div class="shop_details">
		    <!-- 宝贝店家信息 -->
      <div class="shop_left">
        <div class="shop_left_info">
          <div class="shopname_box">
            <div class="shopname">
              <a href="">五五年原创汉服</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 具体详细信息 图片 评论  选项卡导航-->
      <div class="imgs-disc">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a data-toggle="tab" class="nav-link active show" href="#tab1">
              <i class="show"></i>

              商品详情
            </a>
          </li>
          <li class="nav-item">
            <a data-toggle="tab" class="nav-link" href="#tab2">
              <i class="show"></i>
              累计评论1302
            </a>
          </li>
        </ul>
        <!-- 显示的内容-->
        <div class="tab-content">
          <!-- 图片介绍 -->
          <div id="tab1" class="tab-pane active show">
            <div v-for="(item, i) of imgs" :key="i">
              <img :src="item" />
            </div>
          </div>
          <!-- 宝贝评论 -->
          <div id="tab2" class="tab-pane">
            <ul class="js_commlist list-unstyled">
              <li>
                <span class="user">
                  <router-link to>
                    <img
                      src="https://pic.hanfugou.com/web/2019/4/1/22/924fc2b0d7494abc9ac275ca06b5078c.jpg_50x50.jpg"
                      class="face_m"
                    />
                  </router-link>
                  <router-link to class="f12"> 落影、成殇♪ </router-link>
                </span>
                <div class="info">
                  <div>
                    昂昂昂，买了两件，和闺蜜一人一件，反正超级好看就对了，虽然有一点点小瑕疵，但还是喜欢，线头不之所踪？？还有些线头给我毁尸灭迹了，，发了图呀，请忽视我的鞋，谢谢，暂时还没有汉服鞋的我瑟瑟发抖想起自己的小表情，暗中观察233(ಡωಡ)hiahiahia
                    对了，裙子是一片式的，如果有小可爱介意的话，慎拍哟，反正我是觉得挺好的，又不会走光，哈哈(●°u°●)​
                    」，而且穿起来很方便，一整天也不会觉得很嘞，或者累，反正很胖胖，喜欢的就直接剁吧！(´｡✪ω✪｡｀)
                  </div>
                  <div class="pic">
                    <router-link to>
                      <img
                        src="https://pic.hanfugou.com/web/2019/9/29/18/3223837480894f7b81b3f3a14c18169e.jpeg_50x50.jpg"
                        alt=""
                      />
                      <img
                        src="https://pic.hanfugou.com/web/2019/9/29/18/ced4131d212141e295134eb0e7229274.jpeg_50x50.jpg"
                        alt=""
                      />
                    </router-link>
                    <p>
                      19-09-29 18:30:9&nbsp;&nbsp;&nbsp; 上衣＋裙子全套（现货）
                      下单24小时内发出,L
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
	</div>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
// 引入获取商品的请求
import {
  getProductByPid,
  getRecommendedProduct,
  getProductCommentByPid
} from '../requests'
export default {
  data() {
    return {
      sizes: ["S", "XS", "M", "L", "XL"],
      imgs: [
        // require("../../public/img/01.jpg"),
        require("../../public/img/b5ab5378980e4a8f8ea15d2e06b411b5.jpg_820.jpg"),
        require("../../public/img/7cdf887d5688486d8a0dd5c9597b16c8.jpg_820.jpg"),
        require("../../public/img/c0083ab1312c45daa97a228f1245948c.jpg_820.jpg"),
        require("../../public/img/5f08d3ff3a254008a00b04f645ddbc4f.jpg_820.jpg"),
        require("../../public/img/cf8ad53fdd254ad29594feb34ec1e856.jpg_820.jpg"),
        require("../../public/img/a7febc4dad3b43a4911aa4d9cb1a7663.jpg_820.jpg"),
        require("../../public/img/52ee92f361484d84ac1eeaf2541053de.jpg_820.jpg"),
        require("../../public/img/b5ab5378980e4a8f8ea15d2e06b411b5.jpg_820.jpg"),
        require("../../public/img/5d7a1065821546a7884af793b700c4c8.jpg_820.jpg"),
        require("../../public/img/a5db397d43ef4f659ba52d5aeb5bd059.jpg_820.jpg"),
        require("../../public/img/0f50ffeb4e9040bea0b00322620d5ccb.jpg_820.jpg"),
        require("../../public/img/d35093fc31f24589b1202492f581bb41.jpg_820.jpg"),
        require("../../public/img/01538989da494135b09270d1a68a6c50.jpg_820.jpg"),
      ],
      productid:null
      
    };
  },
  mounted(){
    // 获取到路由传过来的id 获取当前评论数据
    let pid = this.$route.params.pid
    // 获取当前页面的推荐商品数据
    getRecommendedProduct(pid)
    .then( res => console.log(res.data.Data))
    .catch(err => console.log(err))
    //  获取当前评论数据
    getProductCommentByPid(pid)
    .then( res => console.log(res.data.Data))
    .catch( err => console.log(err))
    // console.log(pid)
  }
};
</script>
<style scoped>
.details {
  width: 1100px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
}
.left {
  width: 390px;
  height: 402px;
  overflow: hidden;
  text-align: center;
}
.left.box-border > img {
  width: 266.6px;
  height: 400px;
}
.right {
  margin-left: 40px;
}
.price-box {
  width: 680px;
  /* height: 86px; */
  background: #faf5f9;
}
.sus {
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
.sus > i {
  font-size: 22px;
}
.size,
.store,
.styles,
.buy-cart {
  margin-top: 30px;
}
.styles {
  height: 20px;
}
.styles > span > ul {
  margin: 0 0 -24px 50px;
}
.styles > span > ul > li {
  display: block;
  width: 29px;
  height: 26px;
  float: left;
  margin-right: 10px;
  text-align: center;
}

.buy-cart > a {
  display: inline-block;
  margin-right: 10px;
  width: 162px;
  height: 40px;
  text-align: center;
  font-size: 20px;
  line-height: 35px;
  border: 1px solid #ff4466;
}
.buy-cart > a:first-child {
  background: #ffeff2;
}
.buy-cart > a:last-child {
  background: #ff4466;
  color: white;
}
.buy-cart > a > i {
  display: inline-block;
  width: 25px;
  height: 25px;
  background: url(../../public/img/gouwuche2.png) no-repeat;
}
.nav.nav-tabs > .nav-item {
  position: relative;
}
.nav.nav-tabs > .nav-item i {
  position: absolute;
}
.nav.nav-tabs > .nav-item > .nav-link {
  width: 200px;
  height: 50px;
  text-align: center;
  font-size: 20px;
}
.nav.nav-tabs > .nav-item > .nav-link.active {
  border-top-width: 3px;
  color: #ff4466;
  border-top-color: #ff4466;
}
.nav.nav-tabs > .nav-item > .nav-link.active i.show {
  position: absolute;
  border-color: #f46 transparent transparent transparent;
  border-style: solid dashed dashed dashed;
  border-width: 4px;
  left: 50%;
  top: 3px;
  margin-left: -2px;
}
.shop_details{
     width: 1100px;
	 display: flex;
	 margin: 100px auto;
}
.shop_details .shop_left{
	width: 240px;
    height: 163px;
    border: 1px #dfdfdf solid;
	text-align: center;
}
.imgs-disc {
  width: 860px;
  /* margin: 0 auto; */
}
.tab-pane.active.show > div {
  margin-top: 50px;
  text-align: center;
}
.tab-pane.active.show > div > img {
  width: 850px;
}
/* 评论区 */

/* .js_commlist.list-unstyled{

} */
.js_commlist.list-unstyled > li > .user {
  display: inline-block;
  width: 70px;
  height: 60px;
  
}
.js_commlist.list-unstyled > li > .info {
  width: 800px;
  margin-left: 150px;
  margin-top: -20px;
}
</style>

