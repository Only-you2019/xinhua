<template>
	<div>
		<div class="XhMyOrder-header">
			<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
			<span>我的积分</span>
			<router-link to="/XhRule"><span class="XhMyOrder-header-span">积分规则</span></router-link>
		</div>
		<div class="XhMyOrder-Bigbox">
			<div class="XhMember-one">
				<span>普通会员</span>
				<div class="XhMember-one-one">
					<h6>积分</h6>
					<h5>0</h5>
				</div>
				<img src="../../static/images/mine/xhimg/t1.png">
			</div>
		<div class="XhMember-two">
			<span>积分明细</span>
			<h6>暂无积分明细</h6>
		</div>
		</div>
	</div>
</template>

<script>
	 export default {
	    name: "XhHistory",
		
	}
</script>

<style scoped>
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
		color: #000;
		text-align: center;
	}
	.XhMyOrder-header-span{
		float: right;
		font-size: 15px !important;
		margin-right: .2rem;
	}
	.XhMyOrder-Bigbox{
		width: 100%;
	}
	.XhMember-one{
		width: 100%;
		height: 5rem;
		background: url(../assets/xhimg/level-bg.9b478e2998dc083f.png) no-repeat center;
		background-size: 6.5rem 3.5rem;
		
	}
  .XhMember-one span{
	  display: block;
	  line-height: 3rem;
	  float: right;
	  font-size: 18px;
	  color: #6c6c6c;
	  margin-right: 1rem;
  }
  .XhMember-one img{
	  width: 3rem;
	  height: 1.5rem;
	  margin-top:2.75rem;
	  margin-right: 1rem;
  }
  .XhMember-one-one{
	  width: 1rem;
	  height: 1rem;
	  float: left;
	  margin-left: 5.5rem;
  }
  .XhMember-one-one h6{
	 line-height: .5rem;
	 font-size: 13px;
	 color: #686868;
  }
  .XhMember-one-one h5{
  	 font-size: 18px;
	 font-weight: bold;
	 color: #686868;
  }
  .XhMember-two{
	  width: 100%;
	  text-align: left;
  }
  .XhMember-two span{
	  font-size: 18px;
	  margin-left: .5rem;
  }
  .XhMember-two h6{
	  font-size: 14px;
	  text-align: center;
	  color: #b5b5b5;
	  line-height: 6rem;
	  font-weight: 100;
  }
</style>
