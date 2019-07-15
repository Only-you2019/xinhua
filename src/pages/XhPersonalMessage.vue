<template>
    <div class="XhPersonalMessage-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">个人资料</span>
      </div>
      <div class="main-cs" >
        <div class="pic-cs">
          <span @click="on">头像</span>
          <div>
            <img src="../../static/cs/个人资料_03.png" @click="on" >
            <i class="iconfont icon-jiantouyou"  @click="on"></i>
          </div>
					<van-popup v-model="pushow" :style="{ height: '30%', width:'80%' }">
						<div class="main-cs-one">
							<div class="main-cs-one-one">
								<h3>请选择</h3>
						<a href=""><h3>拍照</h3></a>	
							<a href="">	<h3>相册</h3></a>
							</div>
			         <div class="main-cs-one-two"><span>取消</span></div>
						</div>
					</van-popup>
        </div>
					
        <div class="name-cs">
          <span  @click="nc">昵称</span>
          <div>
            <span  @click="nc">孔式</span>
            <i class="iconfont icon-jiantouyou"  @click="nc"></i>
          </div>
					<van-popup v-model="nichen" position="top" :style="{ height: '60%', width:'100%', }">
						<div class="name-cs-one">
							<div class="name-cs-one-header">
								<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
								<span>浏览记录</span>
							</div>
							<div class="name-cs-one-nav">
								<span>昵称</span></br>
								<input type="text" value="孔式"/>
							</div>
							<div class="name-cs-two"><span>保存</span></div>
						</div>
					</van-popup>
        </div>
				
        <div class="birthday-cs">
          <span @click="er">生日</span>
          <div>
            <span @click="er">1994-08-06</span>
            <i class="iconfont icon-jiantouyou" @click="er"></i>
          </div>
					<van-popup v-model="time" position="bottom" :style="{ height: '30%'}">
						<div class="birthday-cs-one">
							<van-datetime-picker v-model="currentDate" type="date" :min-date="minDate"/>
						</div>
					</van-popup>
        </div>
				
        <div class="sex-cs" >
          <span  @click="showPopup">性别</span>
          <div>
            <span @click="showPopup">保密</span>
            <i class="iconfont icon-jiantouyou" @click="showPopup"></i>
          </div>
					<van-popup v-model="show" position="bottom" :style="{ height: '30%'}">
						<div class="sec-cs-one">
							<div class="sec-cs-one-one"><a><span>男</span></a></div>
							<div class="sec-cs-one-one"><a><span>女</span></a></div>
							<div class="sec-cs-one-one"><a><span>保密</span></a></div>
							<div class="sec-cs-one-two"><a><span>取消</span></a></div>
						</div>
						
					</van-popup>
        </div>
      </div>
    </div>
</template>

<script>
	import { Popup } from 'vant';
	import { DatetimePicker } from 'vant';
    export default {
        name: "XhPersonalMessage",
			data() {
    return {
      show: false,
			pushow:false,
			time:false,
			nichen:false,
			currentDate: new Date()
	    }
  },

  methods: {
    showPopup() {
      this.show = true;
    },
		on(){
			this.pushow=true;
		},
		er(){
			this.time=true;
		},
		nc(){
			this.nichen=true;
		}
  }
  
  
    }
</script>

<style scoped>
	.name-cs-one{
		width: 100%;
		height: 100%;
		background: #f7f7f7;
	}
	.name-cs-one-header{
		width: 100%;
		height: 1.31rem;
	}
	.name-cs-one-header img{
		float: left;
		width: .3rem;
		height: .5rem;
		margin-top: .4rem;
		margin-left: .2rem;
	}
	.name-cs-one-header span{
		font-size: 16px;
		line-height: 1.31rem;
		color: #717171;
		text-align: center;
	}
	.name-cs-one-nav{
		width: 95%;
		height: 1.5rem;
		background: white;
		text-align: left;
		margin: 0 auto;
	}
	.name-cs-one-nav span{
		color: #CFCFCF;
		font-size: 12px;
		margin-left: .2rem;
	}
	.name-cs-one-nav input{
		width: 95%;
		height: 1.1rem;
		border: none;
		font-size: 18px;
		margin-left: .2rem;
	}
	.name-cs-two{
		width: 95%;
		margin: 0 auto;
		height: 1rem;
		background: red;
		margin-top: .5rem;
	}
	.name-cs-two span{
		font-size: 16px;
		line-height: 1rem;
		text-align: center;
		color: white;
	}
	.birthday-cs-one{
		width: 100%;
		height: 100%;
		background: red;
	}
	.main-cs-one{
		width:100%;
		height: 100%;
	}
	.main-cs-one-one{
		width: 100%;
		height: 3rem;
	}
	.main-cs-one-one h3{
		text-align: left;
		margin-left: .3rem;
		line-height: 1rem;
		color: #000;
	}
	.main-cs-one-two{
		width: 100%;
		height: 1rem;
	}
	.main-cs-one-two span{
		float: right;
		line-height: 1rem;
		color:#0077AA;
		margin-right: .3rem;
	}
	.sec-cs-one{
		width: 100%;
		height: 4rem;
	}
	.sec-cs-one-one{
		width: 100%;
		height: 1rem;
		border-bottom: 1px solid #BBBBBB;
	}
	.sec-cs-one-one span{
		font-size: 16px;
		text-align: center;
		line-height: 1rem;
		color: #000;
	}
	.sec-cs-one-two{
		width: 100%;
		height: 1rem;
	}
	.sec-cs-one-two span{
		font-size: 16px;
		text-align: center;
	line-height: 1rem;
	}
  .XhPersonalMessage-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }
  .XhPersonalMessage-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }
  .XhPersonalMessage-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhPersonalMessage-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
  .XhPersonalMessage-cs .main-cs{
    width: 100%;
    height: 5.54rem;
    background-color: #ffffff;
    margin-top: 0.56rem;
  }
  .XhPersonalMessage-cs .main-cs .pic-cs,.XhPersonalMessage-cs .main-cs .sex-cs,.XhPersonalMessage-cs .main-cs .name-cs,.XhPersonalMessage-cs .main-cs .birthday-cs{
    width: 96%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    margin: 0 auto;
  }
  .XhPersonalMessage-cs .main-cs .birthday-cs{
    height: 1.18rem;
  }
  .XhPersonalMessage-cs .main-cs .birthday-cs>div{
    display: flex;align-items: center
  }
  .XhPersonalMessage-cs .main-cs .birthday-cs i{
    margin-left: 0.26rem
  }

  .XhPersonalMessage-cs .main-cs .name-cs{
    height: 1.18rem;
  }
  .XhPersonalMessage-cs .main-cs .name-cs>div{
    display: flex;align-items: center
  }
  .XhPersonalMessage-cs .main-cs .name-cs i{
    margin-left: 0.26rem
  }
  .XhPersonalMessage-cs .main-cs .pic-cs{
    height: 1.96rem;
  }
  .XhPersonalMessage-cs .main-cs .pic-cs>div{
    display: flex;align-items: center
  }
  .XhPersonalMessage-cs .main-cs .pic-cs img{
    width: 1.1rem;height: 1.1rem
  }
  .XhPersonalMessage-cs .main-cs .pic-cs i {
    margin-left: 0.26rem
  }
.XhPersonalMessage-cs .main-cs .sex-cs{
  height: 1.18rem;border: none
}
  .XhPersonalMessage-cs .main-cs .sex-cs>div{
    display: flex;align-items: center
  }
  .XhPersonalMessage-cs .main-cs .sex-cs>div>i{
    margin-left: 0.26rem
  }
	
</style>
