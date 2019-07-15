<template>
    <div class="pageBody">
		<div class="XhMyOrder-header">
			<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
			<span>我的订单</span>
			<router-link to="/XhSearch"><span class="icon iconfont XhMyOrder-header-span" >&#xe634;</span></router-link>
		</div>

		<div class="mine-content">
		<van-tabs background="#f7f7f7"  v-model="active">
		  <van-tab  title="全部">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待付款">
			 <div class="XhMyorder-box">
			 				  <div class="XhMyorder-box-one">
			 					  <div class="XhMyorder-box-one-one">
			 						  <i class="iconfont">&#xe620;</i>
			 						  <i>新华书店网上商城自营图书</i>
			 						  <span>待付款</span>
			 					  </div>
			 				<div class="XhMyorder-box-one-two">
									  <img src="../../static/images/mine/xhimg/4471015-fm.jpg" />
									  <div class="XhMyorder-box-one-two-span"><span>破冰行动</span></div>
									  <div class="XhMyorder-box-one-two-span">
										  <span class="XhMyorder-box-one-two-span-span1">￥68.40</span>
                                          <span class="XhMyorder-box-one-two-span-span2">x1</span>
									  </div>
                                   </div>
								  <div class="XhMyorder-box-one-three">
									  <span>共1件商品</span>
									  <span class="XhMyorder-box-one-three-span">实付款:<i>￥68.40</i></span>
								  </div>
								  <div class="XhMyorder-box-one-sie">
									  <div class="XhMyorder-box-one-sie-one"><span>支付</span></div>
									  <div class="XhMyorder-box-one-sie-two"><span>取消订单</span></div>
								  </div>
			 				  </div>
							  
			 </div>
			 
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待发货">
			  
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待收货">
			  
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="已完成">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		</van-tabs>
		
	</div>
	</div>
</template>

<script>
	
    export default {
        name: "XhMyOrder",
		data() {

    return {
      active:0,
    }
  },
      watch:{
        $route:{
          immediate:true,
          handler:function (to) {
            this.active=parseInt(to.params.id)
          }
        }
      }
    }
</script>

<style scoped>
	.mine-content{
			flex:1;
			overflow-y:auto;
			background: #f7f7f7;
		}
.XhMyOrder-header{
	width: 100%;
	height: 1.31rem;
	background: #f7f7f7;
}
.XhMyOrder-header img{
	float: left;
	width: .3rem;
	height: .5rem;
	margin-top: .4rem;
	margin-left: .2rem;
}
.XhMyOrder-header span{
	font-size: 16px;
	line-height: 1.31rem;
	color: #717171;
	text-align: center;
	
}
.XhMyOrder-header-span{
	font-size: 22px !important;
	color: red !important;
	float: right;
	margin-right: .35rem;
	line-height: 1.31rem;
}

.XhMyOrder-Bigbox{
	width: 100%;
}
.XhMyOrder-Bigbox img{
	height: 4rem;
}
.XhMyOrder-Bigbox h6{
	font-size: 16px;
	color: #999999;
}
.XhMyOrder-Bigbox a{
	display: block;
	width: 3rem;
	height: 1rem;
	background: #c62f2e;
	margin-left: 2.4rem;
	margin-top: .3rem;
}
.XhMyOrder-Bigbox span{
	display: block;
	font-size: 20px;
	color: white;
	line-height: 1rem;
}
.XhMyorder-box{
	width: 100%;
}
.XhMyorder-box-one{
	width: 7rem;
	height: 5rem;
	background: #fff;
	margin: .3rem auto;
	border-radius: 5px;
}
.XhMyorder-box-one-one{
	width: 100%;
	height: 1rem;
	border-bottom: 1px solid #cfcfcf;
}
.XhMyorder-box-one-one i{
	float: left;
	line-height: 1rem;
	margin-left: .2rem;
	color: #909395;
	font-size: 16px;
	}
.XhMyorder-box-one-one span{
	float: right;
	color:#fcdf8d;
	font-size: 16px;
	line-height: 1rem;
	margin-right: .1rem;
}
.XhMyorder-box-one-two{
	width: 100%;
	height: 2rem;
	border-bottom: 1px solid #cfcfcf;
}
.XhMyorder-box-one-two img{
	width: 2rem;
	height: 1.8rem;
	float: left;
	margin-top: .1rem;
}
.XhMyorder-box-one-two-span span{
	float: left;
	font-size: 16px;
	line-height: 1rem;
	margin-left: .2rem;
	}
	.XhMyorder-box-one-two i{
		float: left;
		line-height: 3rem;
		margin-right: 1rem;
	}
.XhMyorder-box-one-two-span{
	width: 5rem;
	height: 1rem;
	float: right;
}	
.XhMyorder-box-one-two-span-span1{
	color: red;
}
.XhMyorder-box-one-two-span-span2{
	float: right !important;
	color: #999999;
	margin-right: .2rem;
}
.XhMyorder-box-one-three{
	width: 100%;
	height: 1rem;
	border-bottom: 1px solid #cfcfcf;
}
.XhMyorder-box-one-three span{
	float: left;
	font-size: 16px;
	line-height: 1rem;
	color: #909395;
	margin-left: .2rem;
}
.XhMyorder-box-one-three-span{
	float: right !important;
	margin-right: .2rem;
}
.XhMyorder-box-one-three i{
	color: #000 !important;
}
.XhMyorder-box-one-sie{
	width: 100%;
	height: 1rem;
	display: flex;
}
.XhMyorder-box-one-sie-one{
	width: 2rem;
	height: .8rem;
	background: red;
	margin-top: .1rem;
	margin-left: 2rem;
}
.XhMyorder-box-one-sie-one span{
	font-size: 16px;
	color: white;
	line-height: .8rem;
	text-align: center;
}
.XhMyorder-box-one-sie-two{
	width: 2rem;
	height: .8rem;
	margin-top: .1rem;
	border: 1px solid #cfcfcf;
	margin-left: .5rem;
}
.XhMyorder-box-one-sie-two span{
	font-size: 16px;
	line-height: .8rem;
	text-align: center;
}
</style>
