<template>
  <div>
    <!-- 水平导航栏 -->
		<div class="bg-white">
			<div class="nav-all">
					<div class="left">
						<ul class="nav">
							<li class="nav-item">
								<a class="nav-link nav_a1" href="javascript:;">首页</a>
                
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;">萌物库</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="javascript:;">品牌馆</a>
							</li>
						</ul>	
						</div>
						<div class="right">					
							<a class="add" href="javascript:;">
								<img src="../../public/img/nav-pic.png" alt="">店家入驻
							</a>		
						</div>
				</div>
		</div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

.bg-white{width: 100%;height:46px;display: flex;
	
}
.nav-all{
	width:1100px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	}
.nav{text-align: center;float: left;
  }
.nav-link,.right>a{color: #555555; } 
.nav>li{width: 110px;}
.right{margin-top:8px; }
.nav-link:hover,.nav_a1{
	color:#ff4466;
	border-bottom:3px solid #ff4466;
	
}
.add:hover{
  color:#ff4466;
  

}

</style>