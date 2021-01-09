<template>
  <div>
    <div class="bg">
      <div class="font_f">
        <h1>汉裳</h1>
        <h5>圆您一个穿越梦</h5>
      </div>
      <mylogin></mylogin>
      <div class="font_index">
        <a href="">关于我们</a>| <a href="">社区公约</a>|<a href="">用户协议</a>| <a href="">隐私政策</a>|<a href="">帮助中心</a>
        <br>

 CopyRight&nbsp;&nbsp;©2019&nbsp;&nbsp;ClariceWang&nbsp;&nbsp; 版权所有
      </div>
    </div>
   
  </div>
</template>
<script>
import Mylogin from '../components/Mylogin'
export default {
  components:{
    mylogin:Mylogin
  }
}
</script>
<style scoped>
.bg{
  width: 100%;
  max-width: 1900px;
  height: 950px;
  background: url(../../public/img/login_bg.jpg) no-repeat 0 -300px;
  position: relative;
 
}
.font_f{color:whitesmoke;
  position: absolute;
  margin: 60px 0 0 350px;
 
}
.font_f>h1{
  font-size: 45px
}
.font_f>h5{font:20px 华文新魏;}
.sel{height: 30px;}

.font_index{
  width: 100%;
  height: 100px;
  text-align: center;
  position: absolute;
  bottom: 100px;
  color:#fff;
}
.font_index>a{
  color:#fff;

}
.font_index>a:hover{
text-decoration:none;
color:#ff6699;
}

</style>