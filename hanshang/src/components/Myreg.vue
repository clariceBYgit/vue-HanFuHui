<template>
  <div>
    <div class="reg">
        <h4>手机号注册</h4>
        <hr>
        <input class="put box-border" type="text" placeholder="请输入昵称">
         <label for="rd_boy"><input name="rd_gender" value="男" id="rd_boy" type="radio">小哥哥</label>
          <label for="rd_girl"><input name="rd_gender" value="女" id="rd_girl" type="radio">小姐姐</label>
        <input class="put box-border" type="text" placeholder="手机号">
        
        <input class="num box-border" type="text" placeholder="验证码">
       <button class="numBtn box-border">发送验证码</button>
       <input class="put box-border" type="password" placeholder="密码">
        <label><input type="checkbox">同意</label>
        <a href="javascript:;">用户协议</a>
        <br>
        <button @click="index" class="suc">完成注册</button>
       
       
      </div>
  </div>
</template>
<script>
export default {
  methods:{
    index(){
      this.$router.push("/index")
    }
  }
}
</script>
<style scoped>

.reg{
    border-radius: 5px;
  width:320px;
  height: 360px;
  position: absolute;
  right: 200px;
  margin-top:250px;
  text-align: center;
  background: #fff;
}

.reg>h4{
  margin-top:5px;
}
.reg>hr{
  margin:6px 0;
}
.put{
  width: 260px;
  height: 35px;
  margin-top: 10px;

}
.num{
  margin-top: 10px;
  width: 130px;
  height: 35px;
}
.numBtn{
   width: 100px;
  height: 35px;
  margin-left:28px; 
 background-color: #fff;
    color: #555;
}
.numBtn:hover{
   cursor: pointer;
 background-color: #fbf5fb;
}
label{
  margin-top:10px;
  margin-right: 20px;
  margin-bottom:0;
}

.suc{
 background-color: #ff6699;
  width: 200px;
  height:35px;
  margin-top: 10px;
    border: none;
    cursor: pointer;
   transition: all .3s;
    border-radius: 2px;
    color: #fff;

}
.suc:hover{
 background-color: #ff8899;
  
} 
</style>