<template>
  <div class="forward">
    <div class="lookforward">
				<img src="../../public/img/lookforward_img1.png" alt="">
			<h6>服务暂未上线 敬请期待</h6>
		</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .forward{

    background: #ededef;
  }
  .lookforward{
    /* max-width: 1100px; */
    margin: 0 auto;
    width:1100px;
    height: 400px;
    text-align: center;
    color: #8b8b8b;
    /* background: #f4f4fa; */
   
  }
  .lookforward>h6{
    margin-top:20px; 
    animation: bounceInUp .3s;
  }
  .lookforward>img{
    margin-top: 100px;
    animation: bounce .5s;
  }
</style>