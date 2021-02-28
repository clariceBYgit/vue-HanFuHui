<template>
  <div >
    <div style="text-align:center;">
      <img src="../../public/img/404.jpg" alt="">
      <h3>抱歉，你访问的页面不存在！</h3>
      <br>
      <p>可能是因为你的链接网址有误，或网址已失效</p>
      <br>
      <router-link to="/">
       回到汉裳首页 -->
      </router-link>
    </div>
  </div>
</template>
<script>
 export default{
   data(){
     return{

     }
   },
    mounted(){
        console.log(this.$route.query.id)

  }
 }
</script>
