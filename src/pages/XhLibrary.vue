<template>
    <div class="pageBody">
		<div class="XhMyOrder-header">
			<img src="../../static/images/mine/xhimg/jtz2.png" @click="$router.back(-1)">
			<span>家庭图书馆</span>
		</div>
		<div class="mine-content">
		<div class="XhMyOrder-Bigbox">
			<img src="../../static/images/mine/xhimg/bookrack-empty.a1536798d2f75e87.png">
			<h6>暂无藏书</h6>
		</div>
		</div>
		<div class="Xhfooter">
			<span style="float: left;margin-left: .2rem;">共0本</span>
			<img src="../../static/images/mine/xhimg/sc.png" />
			<van-icon name="add" class="XhLibrary-van" @click="showPopup"/>
			<van-popup v-model="show" position="bottom" 
  :style="{ height: '30%' }" >
  <div class="Xhfooter-one"><a href=""><span>扫条形码</span></a></div>
  <div class="Xhfooter-one"><a href=""><span>搜素书籍</span></a></div>
  <div class="Xhfooter-one"><a href=""><span>手动录入</span></a></div>
  <div class="Xhfooter-two"><a href=""><span>取消</span></a></div>
  </van-popup>
		</div>
	</div>
</template>

<script>
	import { Popup } from 'vant';
    export default {
        name: "XhLibrary",
		 data() {
    return {
      active: 2,
	  show: false,
	 
    };
  },
  methods: {
    showPopup() {
      this.show = true;
	 
    }
  }
    }
</script>

<style scoped>
.mine-content{
		flex:1;
		overflow-y:auto;
		background: #ffffff;
	}
.XhMyOrder-header{
	width: 100%;
	height: 1.31rem;
	background: #ffffff;
}
.XhMyOrder-header img{
	float: left;
	width: .2rem;
	height: .4rem;
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
}
.XhMyOrder-Bigbox img{
	height: 3rem;
	margin-top: 2rem;
}
.XhMyOrder-Bigbox h6{
	font-size: 16px;
	color: #999999;
}

.Xhfooter{
	width: 100%;
	height: 1rem;
	background:#f7f7f7;
}
.Xhfooter span{
	font-size: 14px;
	line-height: 1rem;
	margin-left: 1.2rem !important;
	color: #bbbbbb;
}
.Xhfooter img{
	width: .6rem;
	height: .5rem;
	margin-left: 2.8rem;
	margin-top: .25rem;
}
.XhLibrary-van{
	font-size: 22px;
	float: right;
	line-height: 1rem;
	margin-right: .5rem;
	color: #BBBBBB;
}
.Xhfooter-one{
	width: 100%;
	height: 1rem;
	border-bottom: 1px solid #cfcfcf;
}
.Xhfooter-one span{
	color: #000;
	line-height: 1rem;
	margin-right: 1rem;
}
.Xhfooter-two{
	width: 100%;
	height: 1rem;
}
.Xhfooter-two span{
	line-height: 1rem;
	margin-right: 1rem;
}
</style>
