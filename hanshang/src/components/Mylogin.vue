<template>
  <div>
     <div class="login">
        <h4>登录</h4>
        <hr>
        <input class="put box-border" type="text" placeholder="手机/汉裳号">
        
        <input class="put box-border" type="password" placeholder="请输入密码">
       <br>
        <label><input type="checkbox">下次自动登录</label>
        <a href="javascript:;">忘记密码</a>
        <br>
        <button class="loginBtn">登录</button> 
        <button @click="register" class="regBtn">注册</button>
        <div class="others">
          <a class="QQ_icon" href="javascript:;"></a>
          <a class="sina_icon" href="javascript:;"></a>
          <a class="wx_icon" href="javascript:;"></a>
        </div>
      
      </div>
  </div>
</template>
<script>
export default {
  methods:{
    register(){
      this.$router.push('/register')
    }
  }
}
</script>
<style scoped>

.login{
    border-radius: 5px;
  width:320px;
  height: 360px;
  position: absolute;
  right: 200px;
  margin-top:250px;
  text-align: center;
  background: #fff;
}
.login>h4{
  margin-top:5px;
}
.login>hr{
  margin:6px 0;
}
.put{
  width: 260px;
  height: 35px;
  margin-top: 15px;
}
label{
  margin-top:10px;
  margin-right: 80px;
}
button{
  width: 103px;
  height:35px;
  margin-top: 10px;
    border: none;
    text-align: center;
    cursor: pointer;
   transition: all .3s;
    border-radius: 2px;
}
.loginBtn{
    color: #fff;
  margin-right:15px;
 background-color: #ff6699;
    white-space: nowrap;
    transition: all .3s;
}
.loginBtn:hover{
 background-color: #ff8899;

}
.regBtn{
    color: #555;
  border: 1px solid #C9C9C9;
 background-color: #fff;

}
.regBtn:hover{
 background-color: #fbf5fb;
  
} 
.others{
  display: flex;
  justify-content: space-around;
}
.others>a{
  display:inline-block;
  width: 50px;
  height: 50px;
  margin-top:40px;

  background-size: 40px 40px;
  border: 1px solid rgb(214, 212, 212);
  border-radius: 50%;
}
.QQ_icon{
  background: url("../../public/img/qq.png") no-repeat 4px 4px;
}
.sina_icon{
  background: url("../../public/img/sina.png") no-repeat 4px 4px;

}
.wx_icon{
  background: url("../../public/img/weixin.png") no-repeat 4px 4px;

}
.others>a:hover{
 /* background-color: #fbf5fb; */
 background-color: #f0e3e3;
  
}
</style>