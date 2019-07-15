<template>
    <div class="pageBody">
		
		<div class="XhMyOrder-header">
			<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
			<a href=""><span>我的优惠卷</span></a>
		</div>
<div class="mine-content">
	<van-tabs background="#f7f7f7" v-model="activeName">
     <van-tab title="已领取" name="a">
		 <div class="XhMyOrder-Bigbox">
			 <input type="text" value="   请输入优惠卷兑换码" >
			<button>兑换</button>
			<img src="../../static/images/mine/xhimg/coupon-empty.db17a8aa26e43485.png">
			<h6>暂无优惠卷</h6>
			<a href=""><span>去领卷中心</span></a>
		 </div>
	 </van-tab>
     <van-tab title="已使用" name="b">
		  <div class="XhMyOrder-Bigbox">
		 			 <input type="text" value="   请输入优惠卷兑换码" >
		 			<button>兑换</button>
		 			<img src="../../static/images/mine/xhimg/coupon-empty.db17a8aa26e43485.png">
		 			<h6>暂无优惠卷</h6>
		 			<a href=""><span>去领卷中心</span></a>
		 </div>
	 </van-tab>
     <van-tab title="已失效" name="b">
		  <div class="XhMyOrder-Bigbox">
		 			 <input type="text" value="   请输入优惠卷兑换码" >
		 			<button>兑换</button>
		 			<img src="../../static/images/mine/xhimg/coupon-empty.db17a8aa26e43485.png">
		 			<h6>暂无优惠卷</h6>
		 			<a href=""><span>去领卷中心</span></a>
		 </div>
	 </van-tab>
</van-tabs>
	</div>
	</div>
</template>

<script>
    export default {
        name: "XhDiscounts",
		data() {
		  return {
		    active: 2,
        activeName:"a"
		  };
		},
    }
</script>

<style scoped>
.XhMyOrder-header{
	width: 100%;
	height: 1.31rem;
     background: #f7f7f7;
	
}
.mine-content{
			flex:1;
			overflow-y:auto;
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
.XhMyOrder-Bigbox{
		width: 100%;
		border-top: 1px solid #cfcfcf;
		position: absolute;
	}
.XhMyOrder-Bigbox input{
	width: 7rem;
	height: .9rem;
	margin-top: .3rem;
	margin-left: .15rem;
	font-size: 15px;
	color: #999999;
	border: 1px solid #cfcfcf;
}
.XhMyOrder-Bigbox button{
	width: 1.5rem;
	height: .7rem;
	color: red;
	border: 1px solid red;
	background: #FFFFFF;
	font-size: 15px;
	position: absolute;
	right: .5rem;
	top: .4rem;
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
</style>
