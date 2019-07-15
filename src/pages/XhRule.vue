<template>
	<div>
		<div class="XhMyOrder-header">
			<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
			<span>积分规则</span>
		</div>
		<div class="mine-content">
			<div class="XhMrule-Bigbox">
				<h5> 一、 积分获取方式</h5>
				<h6>1、购买送积分</h6>
				<h6>购买赠送积分按照10:1的比例进行回馈，消费人民币10元可以获得1个积分，系统会对客户的积分进行增加并逐次累积；</h6>
             <h6>2、参与活动送积分</h6>
				<h6>用户参与商城内活动即可获取相应活动奖励积分：</h6>
				<h6>（1）阅读时长</h6>
				<h6>阅读图书时长达到15分钟，可获得相应积分，每天一次。</h6>
				<h6>阅读图书时长达到60分钟，可获得相应积分，每天一次。</h6>
				<img src="../../static/images/mine/xhimg/cc0a1f8b-5eb9-4a3f-b1ee-31b58a88c236.png"/>
				<h6>（2）签到奖励</h6>
			    <h6>每个用户每天只可签到一次</h6>
				<h6>累计签到天数是指用户产生签到行为只要累计达到一定天数都可以获得相应积分，累计签到第21天，可获得200积分。</h6>
				<img src="../../static/images/mine/xhimg/885512a2-2a2e-4236-a1b7-614eda1dbe6f.png" />
				<h6>3、分享</h6>
				<h6>（1）用户分享商城活动专题页至社交平台（微信好友、微信朋友圈、QQ）成功后，即可获取相应分享奖励积分。</h6>
				<h6>（2）用户分享商城指定活动专区内商品至社交平台（微信好友、微信朋友圈、QQ）成功后，即可获取相应分享奖励积分。</h6>
				<img src="../../static/images/mine/xhimg/4a1fd24c-3739-4fef-bd36-9aeb97ddaa9d.png" />
				<h5> 二、 积分兑换形式</h5>
				<h6>1、积分抵现</h6>
				<h6>积分抵扣原价商品部分价格，积分抵扣规则：100积分=1元，最低起兑基数1000积分（每满1000分可以抵扣一次），整千抵扣，每次最高封顶值50000积分。</h6>
				<h6>2、积分记录</h6>
				<h6>（1）会员线上消费积分自动计入总额，线下消费积分需通过线上订单交易，方可计入积分，累计到账户。</h6>
				<h6>（2）原各省市店会员积分不与线上积分累计。</h6>
				<h5> 三、 积分查询</h5>
				<h6>用户登陆网站，在“我的”账户中的“积分”中可查询到积分及使用的积分兑换详细情况。</h6>
				<h5> 四、 积分有效期</h5>
				<h6>从获取积分日期起始为期1年。</h6>
				<h5> 五、 特殊说明</h5>
				<h6>积分兑换礼品如有质量和售后问题，退换货原则按新华书店网上商城公布的相关退换规定执行。
客户在积分获得和使用过程中如违反新华书店网上商城的相关规定，将扣除相应的积分。
任何使用虚假信息或冒用他人信息获得积分者，一经查证属实，对应的账户积分将自动清除。
积分规则由新华书店网上商城制定并保留所有的解释权和修改权，规则以网站公布为准。
积分只在同一会员帐户内累计，不同帐户的积分不能合并。
</h6>
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
	.mine-content{
			flex:1;
			overflow-y:auto;
			
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
		color: #000;
		text-align: center;
	}
	.XhMrule-Bigbox{
		width: 100%;
		text-align: left;
	}
	.XhMrule-Bigbox h5{
		line-height: .8rem;
		font-size: 14px;
		margin-left: .1rem;
	}
	.XhMrule-Bigbox h6{
		font-size:16px;
		font-weight: 500;
		line-height: .4rem;
		margin-left: .1rem;
	}
	.XhMrule-Bigbox img{
		width: 7rem;
	}
	
</style>
