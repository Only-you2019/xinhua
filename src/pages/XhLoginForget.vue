<template>
	<div class="LoginForget">
		<p class="XhLoginPhoneMsg" >{{PhoneMsg}}</p>
		<div class="LoginHeader">
			<div class="LoginHeaderCenter">
				<router-link to="/XhLogin"><van-icon  name="arrow-left" /></router-link>
				<p>忘记密码</p>
			</div>
		</div>
		<div class="LoginForgetFooter">
			<div class="LoginFooterBox">
				<div  class="FooterBoxInput">
					<div class="FooterBoxInput-post">
						<div></div>
						<div></div>
						<input @blur="phoneCheck()" v-model="userPhone" type="text" placeholder="请输入手机号">
						<input v-model="checkCoad"  type="text" placeholder="图片验证码">
						<img @click="PicCheck()" src="../assets/xhimg/piccoad.png" class="picCode" >
						<input ref="Account" type="text" placeholder="短信验证码">
						<button class="MessageCoad">发送验证码</button>
						<input class="FooterBoxSign" @click="LoginPhonePost()" type="button" value="下一步">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"XhLoginForget",
		data(){
			return{
				userPhone:'',
				PhoneMsg:'',
				phone:'',
				checkCoad:''
			}
			
		},
		methods:{
			phoneCheck(){
				var regPhone=/^1\d{10}$/;
				if(regPhone.test(this.userPhone)==true){
					this.PhoneMsg=''
					this.phone=1;
				}else{
					this.$toast("手机号格式错误！")
				}
			},
			PicCheck(){
// 				var newcode='';
// 				var Array=["A","B","C","D","E","F","G","H","I","J","K","O","P"];
// 				
// 				for(var i=0;i<4;i++){
// 					var index=Math.floor(Math.random()*10);
// 					newcode+=Array[index]
// 				}
// 				this.picCode=newcode
			},
			LoginPhonePost(){
				if(this.phone==1&&this.picCode==this.checkCoad){
					this.PhoneMsg=''
				}else{
					this.$toast('请输入正确格式');
				}
			}
		}
	}
</script>

<style scoped>
	.LoginForget{
		width: 100%;
		height: 100%;
		background: #f7f7f7;
		display: flex;
		flex-direction: column;
	}
	.XhLoginPhoneMsg{
		position: absolute;
		top: 7%;
		left: 28%;
		font-size: .38rem;
		color: red;
		font-weight: 900;
	}
	.picCode{
		 height: 1rem;
		 position: absolute;
		 top: 1.1rem; 
		 left: 5rem;
	}
	.MessageCoad{
		height: .9rem;
		line-height: .9rem;
		font-size: .1rem; 
		width: 2rem;
		color: blue; 
		position: absolute;
		top: 2.3rem; 
		left: 4.9rem;
		background: red;
	}
	.LoginForget .LoginHeader{
		width: 100%;
		height: 1.07rem;
	}
	.LoginForget .LoginHeader .LoginHeaderCenter{
		width: 6.9rem;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	.LoginForget .LoginHeader .LoginHeaderCenter p{
		font-size: .42rem;
		color: #000000;
		margin-left: 2.5rem;
	}
	.LoginForget .LoginHeader .LoginHeaderCenter .van-icon{
		font-size: .4rem !important;
	}
	
	
	
	.LoginForgetFooter{
		width: 100%;
		float: left;
	}
	.LoginForgetFooter .LoginFooterBox{
		width: 6.9rem;
		margin: 0 auto;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput{
		width: 100%;
		float: left;
		margin-top:.6rem ;
		border-radius: .1rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post{
		width: 100%;
		float: left;
		position: relative;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post div{
		position: absolute;
		width: 6.66rem;
		height: 2px;
		background: #dddddd;
		right: 0;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post div:nth-child(1){
		top: 1rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post div:nth-child(2){
		top: 2.2rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post div:nth-child(3){
		top: 3.3rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post input{
		display: block;
		width: 100%;
		height:1.1rem ;
		border: 0 !important;
		font-size: .35rem;
		z-index: 2;
		padding: 0 .24rem 0 .24rem;
		background: #FFFFFF;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post .FooterBoxSign{
		width: 100%;
		float: left;
		height: .77rem;
		background: #c62f2e;
		text-align: center;
		line-height:.77rem ;
		font-size:.26rem ;
		color: #FFFFFF;
		border-radius: .1rem;
		margin-top: .5rem;
	}
</style>
