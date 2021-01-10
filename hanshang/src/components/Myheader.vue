<template>
<div>

    <div class="header" id="header">
        <div class="logo_all">
            <div class="logo">
                <h2>汉裳</h2>
                <p class="logo_p1">商城</p>
                <p class="logo_p2">圆你所想，正品原创汉服</p>
            </div>
            <div class="reg_login">
                <!-- <a @click="login" href="javascript:;">注册</a> -->
								<router-link to="/login">注册</router-link>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <!-- <a @click="login" href="javascript:;">登录</a> -->
								<router-link to="/login">登录</router-link>
            </div>
            <div class="search_fr">
                <input type="text" name="" placeholder="请输入您要找的商品或者店铺">
								<!-- <router-link class="search-icon" to="/details"></router-link> -->
                <a href="javascript:;"></a>
            </div>
        </div>   
     </div>
	<!-- 水平导航栏 -->
		<div class="bg-white">
			<div class="nav-all">
					<div class="left">
						<ul class="nav">
							<li class="nav-item">
								<router-link to="/">首页</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/details">萌物库</router-link>
							</li>
							<li class="nav-item">
								<router-link to="/brands">品牌馆</router-link>
							</li>
						</ul>	
						</div>
						<div class="right">					
								<router-link to='/add' class="add" >
								<img src="../../public/img/nav-pic.png" alt="">店家入驻</router-link>
						</div>
				</div>
		</div>

</div>
</template>
<script>
export default {
	data(){
		return{}
	},
	mounted(){
		this.getRouter()
	},
   	methods:{
		//    获取路由
		getRouter(){
			// console.log(location.hash)   //得到  /  /index
			// 当前的hash值 #/  #/index
			var selectItem = location.hash
			var items = document.querySelectorAll('.nav a')
			// console.log(items[0].hash)
			for(let i = 0; i<items.length; i++){
				if(items[i].hash === selectItem){
					items[i].className = 'active'
				}
			}
		}
		
	}
}
</script>
<style scoped>
.header{width:100%;
	height: 70px;
	background-color:#ff4466;
	margin:0 auto;


}
.logo_all{width:1100px;
	height:70px;
	margin:0 auto;

}
.logo,.logo h2,.logo_p1,.logo_p2,.search_fr{color: #fff;
	float:left;


}
.logo{margin-top:15px;}
.logo h2{color: #fff;
	font:32px 华文行楷;
}
.logo_p1{font:18px normal;
	margin: 20px 25px 0px 12px;
}
.logo_p2{
	font:14px 华文新魏;
	margin-top:19px;
	color:#ffa1b2;
}

.search_fr{
	float:right;
	background-color:#ff627f;
	width: 350px;
	height: 30px;
	border-radius: 30px;
	margin:35px 20px 0px 0px;
	
}

.search_fr>input{background:none;
	color:#fbe5e9;
	width:250px;
	margin: 4px 0px 0px 16px;
	/* outline:none; */
	border:none;
	font-size: 14px;

}
.search_fr>input::-webkit-input-placeholder{
	color:#ffb3bf; 
}
/* #nav_a~a:hover,#nav_a,a{text-decoration:none;} */


.search_fr a{
	background-size: 15px 15px;
	background: url("../../public/img/base_icon.png") no-repeat 0 -47px;
	width: 20px;
	height: 20px;
	float: right;
	margin: 4px 16px 0px 0px;

}

.reg_login{float: right;
	color:#fff;
	margin:37px 0px 0px 0px;

}
.reg_login>a{
	color:#fbe5e9;

}

.left,.right{
	margin-top: 10px;
}
.bg-white{width: 100%;height:46px;display: flex;
}
.nav-all{
	width:1100px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	}
.nav>.nav-item{text-align: center;float: left;
  }
/* .nav-link,.right>a{color: #555555; }  */
.nav>.nav-item>a{width: 110px;	
		height:36px;
		display: inline-block;
}

.nav-item>a:hover{

	/* color:#ff4466; */
	border-bottom:3px solid #ff4466;
	
}
.left,.add:hover{
  color:#ff4466;
}
.active{
	border-bottom:3px solid #ff4466;
	
}

</style>