<template>
  <div class="page-bg">
    <myheader></myheader>
   
    <a-spin class="load-icon" v-if="loading == true" size='large' :spinning="loading" />
    <div  v-else>
      <div  class="nav2">
      <!-- 轮播图-->
      <div id="lunbo" class="carousel" data-ride="carousel">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="index == 0 ? 'active' : ''"
            v-for="(item, index) in Carousel_items"
            :key="index"
          >
             <a :href="item.Link">
              <img :src="item.ImgSrc" :id="item.ID" alt="" />
            </a>
          </div>
        </div>
        <a dat-slide="prev" class="carousel-control-prev" href="#lunbo">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a data-slide="next" class="carousel-control-next" href="#lunbo">
          <span class="carousel-control-next-icon"></span>
        </a>
        <ul class="carousel-indicators">
          <li data-target="#lunbo" data-slide-to="0" class="active"></li>
          <li data-target="#lunbo" data-slide-to="1"></li>
          <li data-target="#lunbo" data-slide-to="2"></li>
          <li data-target="#lunbo" data-slide-to="3"></li>
        </ul>
      </div>
    </div>
    <p class="sale_title mb-4" id="f1">本周热卖</p>
    <div class="host_sale">
      <!--本周热卖 		 -->
      <div v-for="(item, index) in ProductListPublicForHot" :key="index">
        <router-link :to="{path:`/product/${item.ID}`}" PostageID="item.PostageID" href=""
          ><img class="img_position" :src="item.FaceSrc" alt=""
        /></router-link>
        <p class="price">
          <i>￥</i>
          {{ item.Price }}
        </p>
        <router-link :to="{path:`/product/:${item.ID}`,params:{pid:item.ID,shop:item.shop}}" PostageID="item.PostageID" href="">{{ item.Name }}</router-link>
      </div>
    </div>

    <p class="sale_title mt-5 mb-4" id="f2">汉服女装</p>
    <div class="col_f">
      <!-- 			汉服女装 -->
      <div
        v-for="(item, index) in ProductListPublicForDefault.girl"
        :key="index"
      >
        <a ID="item.ID" PostageID="item.PostageID" href=""
          ><img class="img_position" :src="item.FaceSrc" alt=""
        /></a>
        <p class="price">
          <i>￥</i>
          {{ item.Price }}
        </p>
        <a id="item.ID" PostageID="item.PostageID" href="">{{ item.Name }}</a>
      </div>
    </div>

    <p class="sale_title mt-5 mb-4" id="f3">汉服男装</p>
    <div class="col_m">
      <!-- 		汉服男装		 -->
      <div
        v-for="(item, index) in ProductListPublicForDefault.boy"
        :key="index"
      >
        <a id="item.ID" PostageID="item.PostageID" href=""
          ><img class="img_position" :src="item.FaceSrc" alt=""
        /></a>
        <p class="price">
          <i>￥</i>
          {{ item.Price }}
        </p>
        <a id="item.ID" PostageID="item.PostageID" href="">{{ item.Name }}</a>
      </div>
    </div>

    <p class="sale_title mt-5 mb-4" id="f4">汉元素</p>
    <div class="han_ele">
      <!-- 	汉元素	 -->
      <div
        v-for="(item, index) in ProductListPublicForDefault.hys"
        :key="index"
      >
        <a id="item.ID" PostageID="item.PostageID" href=""
          ><img class="img_position" :src="item.FaceSrc" alt=""
        /></a>
        <p class="price">
          <i>￥</i>
          {{ item.Price }}
        </p>
        <a id="item.ID" PostageID="item.PostageID" href="">{{ item.Name }}</a>
      </div>
    </div>
    <p class="sale_title mt-5 mb-4" id="f5">周边配饰</p>
    <div class="han_ornaments">
      <!-- 周边配饰			 -->
      <div
        v-for="(item, index) in ProductListPublicForDefault.other"
        :key="index"
      >
        <a id="item.ID" PostageID="item.PostageID" href=""
          ><img class="img_position" :src="item.FaceSrc" alt=""
        /></a>
        <p class="price">
          <i>￥</i>
          {{ item.Price }}
        </p>
        <a id="item.ID" PostageID="item.PostageID" href="">{{ item.Name }}</a>
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <div class="backTop" id="top">
      <!-- <div @click="toTop"></div> -->
      <div @click="goTop"></div>
    </div>
    <!-- 附加导航（affix）,用来点亮各楼层的开关 -->
    <div class="affix" id="fl">
      <a id="a1" href="javascript:;">本周热卖</a>
      <a id="a2" href="javascript:;">汉服女装</a>
      <a id="a3" href="javascript:;">汉服男装</a>
      <a id="a4" href="javascript:;">汉元素</a>
      <a id="a5" href="javascript:;">周边配饰</a>
      <a id="a" href="javascript:;"></a>
      <a id="a" href="javascript:;"></a>
    </div>

    </div>
      
    <myfooter></myfooter>
  </div>
</template>
<script>
import {
  getCarousel_items,
  getProductListPublicForHot,
  getProductListPublicForDefault,
} from "../requests";
export default {
  data() {
    return {
      Carousel_items: [],
      ProductListPublicForHot: [],
      ProductListPublicForDefault: [],
      loading:false,
    };
  },
  mounted() {
    this.onload();
    this.getDatas();
  },
  beforeDestroy() {},
  methods: {
    // 获取页面信息
    getDatas() {
     
      getCarousel_items()
        // 获取轮播图片
        .then((res) => {
          this.Carousel_items = res.data.Data;
        })
        .catch((err) => console.log(err));
      // 获取本周热卖
      getProductListPublicForHot()
        .then((res) => {
          this.ProductListPublicForHot = res.data.Data;
          // console.log(this.ProductListPublicForHot)
        })
        .catch((err) => console.log(err));
      // 获取其他的楼层数据
      getProductListPublicForDefault()
        .then((res) => {
          this.ProductListPublicForDefault = res.data.Data;
          // console.log(this.ProductListPublicForDefault)
        })
        .catch((err) => console.log(err));
    
      //  if(this.Carousel_items.length> 0){
      //    this.loading = false
      //    console.log(this.Carousel_items)
      //  }
    

    },
    onload() {
      //  var scrollTop=0;
      window.addEventListener("scroll", function () {
        this.scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
          var top = document.getElementById('top')
          var fl = document.getElementById('fl')
        // console.log(top,fl)
        // 当滚动条位置滚动到500+是 导航楼层和返回顶部按钮出现
        if (this.scrollTop >= 500) {
          if (top && f1) {
            top.style.display = "block";
            fl.style.display = "block";
          }
        } else if (top && f1) {
          top.style.display = "none";
          fl.style.display = "none";
        }

        // 楼层点亮效果
        // 找寻楼层显示内容
        var sale_titles = document.querySelectorAll(".sale_title");
        // 获取类表
        var asides = document.querySelectorAll(".affix a");
        // console.log(asides)  //类数组对象
        var num = 0;
        for (var i = 0; i < sale_titles.length; i++) {
          if (window.pageYOffset >= sale_titles[i].offsetTop - 70) {
            num = i;
          }
          if (asides[i]) {
            asides[i].className = "";
          }
        }
        if (asides[num]) {
          asides[num].className = "active";
        }
        // 点击加active 解决这个问题需要使用闭包（内层函数被外层函数包裹，同时使用者外层函数的变量）或者使用let
        for (var i = 0; i < sale_titles.length; i++) {
          asides[i].index = i;
          asides[i].onclick = function () {
            // 遍历过程中 仅将事件处理函数赋值给某一个按钮的onclick属性，保存起来，而不是调用函数，所以，不会读取函数中的内容，也不会读取i
            // 此时使用排他思想
            for (var i = 0; i < asides.length; i++) {
                asides[i].className = "";
            }
              this.className = "active";
              // 点击滚动
             var a = sale_titles[this.index].id.slice(1)
             $('html,body').animate(
               {
                 scrollTop: sale_titles[a - 1].offsetTop,
               },
               200
             )
          };
        }

      });
    },
    // 返回顶部的方式一
    toTop() {
      //总距离
      this.scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      //总距离
      var dist = this.scrollTop;
      //总步数
      var steps = 50;
      //总时间
      var dura = 500;
      //每步走多长
      var step = dist / steps;
      //每步的间隔时间
      var interval = dura / steps; //不能小于10毫秒
      var timer = setInterval(() => {
        window.scrollBy(0, -step);
        steps--;
        if (steps == 0) {
          clearInterval(timer);
          steps = 500;
        }
      }, interval);
    },
    // 返回顶部最简单的方式二
    goTop(){
      document.body.scrollIntoView({behavior:"smooth"})
    }
  },
};
</script>

<style scoped>
.load-icon{
  display: block;
  margin: 100px auto;
}
.nav2 {
  width: 1100px;
  height: 470px;
  margin: 15px auto;
}
.carousel img {
  height: 400px;
}
.carousel-control-prev,
.carousel-control-next {
  width: 6%;
  height: 20%;
  border-radius: 0.25rem;
  top: 40%;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  background-color: #fff;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  border-radius: 50%;
}
.carousel-indicators .active {
  background-color: #0aa1ed;
}
.host_sale,
.col_f,
.col_m,
.han_ele,
.han_ornaments,
.hot_brand {
  display: flex;
  width: 1100px;
  height: 750px;
  margin: 0px auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
.sale_title {
  text-align: center;
  font-size: 28px;
  font-weight: lighter;
  color: #8b8b8b;
}
.host_sale > div,
.col_f > div,
.col_m > div,
.han_ele > div,
.han_ornaments > div {
  width: 248px;
  height: 370px;
}

.host_sale > div > p,
.col_f > div > p,
.col_m > div > p,
.han_ele > div > p,
.han_ornaments > div > p {
  margin: 10px 10px 0 10px;
  color: #ff4466;
  font-size: 34px;
  font-weight: 100;
}
.host_sale > div > p > i,
.col_f > div > p > i,
.col_m > div > p > i,
.han_ele > div > p > i,
.han_ornaments > div > p > i {
  font-size: 18px;
}
/*a标签的字体在鼠标移动上去是去掉下划线 */
/* a:hover{
		text-decoration:none;
	} */
/*宝贝图片的动画 */
.img_position {
  /* position: relative; */
  width: 240px;
  height: 248px;
  display: block;
  margin: 0 auto;
}
.img_position:hover {
  transition: all 1s;
  transform: scale(1.1);
  box-shadow: 0 10px 15px 5px #cccccc;
  top: -10px;
}
/*返回顶部的按钮*/
.backTop {
  display: none;
}
/*返回顶部按钮的大，小 */
.backTop > div {
  width: 50px;
  height: 50px;
  position: fixed;
  background: url(../../public/img/totop.png) no-repeat;
  right: 100px;
  bottom: 50px;
}
.backTop > div:hover {
  background: url(../../public/img/totop.png) 0 -50px;
  transition: all 0.5s;
}
/* 楼层点亮 */
.affix {
  display: none;
  position: fixed;
  top: 10px;
}
.affix a {
  display: block;
  height: 70px;
  width: 40px;
  border: 1px solid rgb(246, 204, 204);
  border-bottom: none;
  margin-left: 15px;
  text-align: center;
  color: #fff;
  line-height: 35px;
  background: #ff4466;
}
.affix > a:last-child {
  border-bottom: 1px solid rgb(246, 204, 204);

  background: #ff4466 url(../../public/img/cart2.png) no-repeat 3px 18px;
  background-size: 30px 30px;
}
.affix > a:last-child:hover {
  background: #fff url(../../public/img/cart1.png) no-repeat 3px 18px;
  background-size: 30px 30px;
}
.affix > a:nth-child(6) {
  background: #ff4466 url(../../public/img/user2.png) no-repeat 3px 18px;
  background-size: 30px 30px;
}
.affix > a:nth-child(6):hover {
  background: #fff url(../../public/img/user1.png) no-repeat 3px 18px;
  background-size: 30px 30px;
}
.affix a.active {
  background: rgb(145, 10, 10);
  color: #f7eeef;
}
.affix a:hover {
  background: #fff;
  color: #ff4466;
}
</style>