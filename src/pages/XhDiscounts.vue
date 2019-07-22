<template>
    <div class="pageBody">
		
		<div class="XhMyOrder-header">
			<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
			<a href=""><span>我的优惠卷</span></a>
		</div>
<div class="mine-content">
	<van-tabs background="#f7f7f7" v-model="activeName">
     <van-tab title="已领取" name="a">
		 <div class="XhDiscounts-box">
              <div class="XhDiscounts-box-PopupDiscountsMain" ref="box">
              <span class="XhDiscounts-box-SaveMoney">￥5.00</span>
              <span class="XhDiscounts-box-ProductDemand">仅限部分图书商品使用</span>
              <span class="XhDiscounts-box-PriceDemand">满60.00元可以使用</span>
              <span class="XhDiscounts-box-PeriodOfValidity">2019.07.01-2021.01.01</span>
              <button class="XhDiscounts-box-ImmediatelyReceive">立即领取</button>
            </div>
		 </div>
		 <div class="XhMyOrder-Bigbox" v-if="false">
			 <input type="text" value="   请输入优惠卷兑换码" >
			<button>兑换</button>
			<img src="../../static/images/mine/xhimg/coupon-empty.db17a8aa26e43485.png">
			<h6>暂无优惠卷</h6>
			<router-link to="/"><span>去领卷中心</span></router-link>
		 </div>
	 </van-tab>
     <van-tab title="已使用" name="b">
		  <div class="XhMyOrder-Bigbox">
		 			 <input type="text" value="   请输入优惠卷兑换码" >
		 			<button>兑换</button>
		 			<img src="../../static/images/mine/xhimg/coupon-empty.db17a8aa26e43485.png">
		 			<h6>暂无优惠卷</h6>
		 			<router-link to="/"><span>去领卷中心</span></router-link>
		 </div>
	 </van-tab>
     <van-tab title="已失效" name="b">
		  <div class="XhMyOrder-Bigbox">
		 			 <input type="text" value="   请输入优惠卷兑换码" >
		 			<button>兑换</button>
		 			<img src="../../static/images/mine/xhimg/coupon-empty.db17a8aa26e43485.png">
		 			<h6>暂无优惠卷</h6>
		 			<router-link to="/"><span>去领卷中心</span></router-link>
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
		height: .8rem;
		background: #c62f2e;
		margin-left: 2.4rem;
		margin-top: .3rem;
	}
	.XhMyOrder-Bigbox span{
		display: block;
		font-size: 18px;
		color: white;
		line-height: .8rem;
	}
	.XhDiscounts-box{
			width: 100%;
		}
	.XhDiscounts-box-PopupDiscountsMain{
    margin-left: 0.25rem;
    margin-bottom: 0.25rem;
    width: 7rem;
    height: 2.1rem;
    background-image: url(../../static/images/commons/QQ图片20190717210659.png);
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
	margin-top: .3rem;
  }
  .XhDiscounts-box-SaveMoney{
    height: 0.34rem;
    margin-top: 0.3rem;
    margin-left: 0.6rem;
    font-size: 0.34rem;
    font-weight: 900;
    color: #fff;
  }
  .XhDiscounts-box-ProductDemand{
    height: 0.34rem;
    margin-top: 0.3rem;
    margin-right: 1.5rem;
    font-size: 0.3rem;
    color: #070707;
  }
  .XhDiscounts-box-PriceDemand{
    height: 0.34rem;
    margin-top: 0.6rem;
    margin-left: 0.1rem;
    font-size: 0.24rem;
    color: #fff;
  }
  .XhDiscounts-box-PeriodOfValidity{
    height: 0.34rem;
    margin-top: 0.65rem;
    font-size: 0.24rem;
    color: #717577;
  }
  .XhDiscounts-box-ImmediatelyReceive{
    margin-top: 0.55rem;
    margin-right: 0.1rem;
    width: 1.54rem;
    height: 0.58rem;
    background-color: #fff;
    border:2px solid #f0f0f0;
  }
  .XhDiscounts-box-PopupDiscountsBottom{
    width: 7rem;
    height: 0.9rem;
    margin-left: 0.25rem;
    color: #fff;
    background-color: #c72f2e;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.34rem;
    font-weight: 800;
  }
	
</style>
