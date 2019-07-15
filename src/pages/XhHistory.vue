<template>
    <div class="pageBody">
		<div class="XhMyOrder-header" >
			<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
			<a href=""><span>浏览记录</span></a>
			<!-- <button>清空</button> -->
		<div class="XhMyOrder-header-one" @click="exitCs">
			 <span >
			 清空
			</span>
		</div>

		</div>
		<div class="mine-content">
				 <div class="XhMyOrder-Bigbox">
				<h6>暂无浏览记录</h6>
				<a href=""><span>随便逛逛</span></a>
			</div>
		</div>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
    export default {
        name: "XhHistory",
		methods:{
		    exitCs(){
		      Dialog.confirm({
		        title: '提示',
		        message: '确定清空?',
		        confirmButtonColor:"#c72f2e"
		      }).then(() => {
		        // on confirm
				this.$toast('删除成功');
		      }).catch(() => {
		        // on cancel
		      });
		    }
		},
		components: {
		  [Dialog.Component.name]: Dialog.Component
		}
		
    }
	
</script>

<style scoped>
	
.mine-content{
		flex:1;
		overflow-y:auto;
		background: #f7f7f7;
		width: 100%;
			}
.XhMyOrder-header{
	width: 100%;
	height: 1.31rem;
	background: #f7f7f7;
	 
}
.XhMyOrder-header-one{
	float: right;
	width: 1rem;
	height: 1rem ;
	margin-right: .2rem;
}
.XhMyOrder-header-one span{
	font-size: 18px !important;
	line-height: 1rem;
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
.XhMyOrder-header button{
	float: right;
	margin-top: .45rem;
	margin-right: .2rem;
	background: #f7f7f7;
	border: none;
	font-size: 16px;
}
.XhMyOrder-Bigbox{
		width: 5rem;
          height: 7rem;
           margin: 4rem auto;
           text-align: center; 
           overflow: hidden; 
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
		margin-left: 1.2rem;
		margin-top: .3rem;
	}
	.XhMyOrder-Bigbox span{
		display: block;
		font-size: 20px;
		color: white;
		line-height: 1rem;
	}
</style>
