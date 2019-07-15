<template>
    <div class="Login" >
		
		<div class="LoginHeader" >
			<div class="LoginHeaderCenter">
				<van-icon  name="arrow-left" />
			</div>
		</div>
		<div class="LoginTitle"  >
			<div class="LoginTitleBox">
				<span @click="flag=1,LoginFontSize()" ref="Login">账号登录</span>
				<span @click="flag=2,QuestLoginFontSize()" ref="QuestLogin">快捷登录</span>
				<div  class="Pos1" v-show="flag==1"></div>
				<div  class="Pos2" v-show="flag==2"></div>
			</div>
		</div>
		<div class="LoginFooter"  >
			<div v-show="flag==1" class="LoginFooterBox">
				<div  class="FooterBoxInput">
					<div class="XhLoginPost">
						<div></div>
						<!-- <p ref="account" @click="ChangeAccount()">账号</p>
						<p ref="pass" @click="Changepass()">密码</p> -->
						<!-- <input  v-model="userphone" @input="phoneCheck()" type="text" placeholder="账号"> -->
						<input v-model="userId" @blur="idCheck()"  type="text" placeholder="账号">
						<input  v-model="userPass"  @blur="passCheck()" type="password" placeholder="密码">
						<p class="FooterBoxPost" >
							<router-link tag="span" to="/XhRegisterProtocol">注册</router-link>
							<router-link tag="span" to="/XhLoginForget">忘记密码</router-link>
						</p>
						<input @click="XhLoginPost()" type="button" class="FooterBoxSign" value="登录">
					</div>
				</div>
				
				
				
				
				
				<div class="FooterBoxThird">
					<div class="one">
						<img src="../assets/xhimg/wx.png"  alt="">
						<span >微信</span>
					</div>
					<div class="one">
						<img src="../assets/xhimg/qq.png"  alt="">
						<span >qq</span>
					</div>
					<div class="one">
						<img src="../assets/xhimg/weiBo.png"  alt="">
						<span >微博</span>
					</div>
				</div>
			</div>
			
			<div v-show="flag==2" class="LoginFooterBox">
				
				
				
				<div class="FooterBoxInput">
					<div class="XhLoginPost">
						<div></div>
						<div></div>
						<input @blur="phoneCheck()" v-model="userPhone" type="text" placeholder="请输入手机号">
								<input v-model="checkCoad"  type="text" placeholder="图片验证码">
								<img @click="PicCheck()" :src="base64Str" class="picCode" >
								<input v-model="noteCoad" type="text" placeholder="短信验证码">
								<button :disabled="disabled" @click="NoteCoad()" class="MessageCoad">发送验证码</button>
								<h1 v-if="show" class="TimeCoad">{{Time}}后重新发送</h1>
								<input @click="LoginPhonePost()" type="button" class="FooterBoxSign" value="登录">
							</div>
						</div>
						<div class="FooterBoxTreaty">
							<van-checkbox v-model="checked" checked-color="#e61818"></van-checkbox>
							<span >已同意<router-link to="/XhLoginTreaty" style="color: #0c77d3;" href="#">《用户注册协议》</router-link></span>
				</div>
				<div class="FooterBoxThird">
					<div class="one">
						<img src="../assets/xhimg/wx.png"  alt="">
						<span >微信</span>
					</div>
					<div class="one">
						<img src="../assets/xhimg/qq.png"  alt="">
						<span >qq</span>
					</div>
					<div class="one">
						<img src="../assets/xhimg/weiBo.png"  alt="">
						<span >微博</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Login",
		data(){
			return{
				flag:1,
				checked:false,
				userId:'',
				userPass:'',
				id:"",
				pass:"",
				userPhone:"",
				phone:"",
				checkCoad:'',
				disabled:false,
				PicCheck1:"",
				base64Str:'',
				show:'',
				Time:'',
				noteCoad:''
			}
		},
		created() {
			this.PicCheck()
		},
		methods:{
			LoginFontSize(){
				this.$refs.Login.style.fontSize=".48rem";
				this.$refs.QuestLogin.style.fontSize=".38rem";
			},
			
			QuestLoginFontSize(){
				this.$refs.Login.style.fontSize=".38rem";
				this.$refs.QuestLogin.style.fontSize=".48rem";
			},
			
			idCheck(){
				    var regid=/^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$/;
				    if(regid.test(this.userId)==true){
				        this.id=1;
				    }else{
						this.$toast("账号格式错误！")
					}
				},
				
				// 密码验证
			passCheck(){
					var regPass=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
					if(regPass.test(this.userPass)==true){
						this.pass=1;
					}else{
						this.$toast("密码格式错误！")
					}
				},
				
				// 手机验证
			phoneCheck(){
					var regPhone=/^^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$$/;
					if(regPhone.test(this.userPhone)==true){
						this.phone=1;
					}else{
						this.$toast("手机号格式错误！")
					}
				},
				
				
				// 图片验证码
			PicCheck(){
					this.$axios.get("/api/xinhua/verification/code").then((res)=>{
							console.log(res)
							if(res.status==200){
								if(res.data.status==0){
									this.base64Str=res.data.datas.base64Str
								}else{
									this.$toast(res.data.err)
								}
							}
						})
					},
					
					
				// 短信验证
			NoteCoad(){
				if(this.phone==1){
					this.$axios.post("",{
						code:this.checkCoad,
						mobile:this.userPhone
					}).then((res)=>{
						console.log(res)
						if(res.status==200){
							if(res.data.status==0){
								this.$toast(res.data.err)
								this.Time=60;
								this.show=true
								let time= setInterval(()=>{
									this.Time--;
									if(this.Time==0){
										clearInterval(time)
										this.show=false
									}
								},1000)
							}else if(res.data.status==2){
								this.$toast(res.data.err)
							}
						}
					})
					}else{
						this.$toast("请输入正确的手机格式")
					}
				},
				
				
				// 账号登录
			XhLoginPost(){
					// let $this= this;
					console.log(this.userId)
				if(this.id==1&&this.pass==1){
					this.$axios.post("/api/xinhua/login/account",{
						mobile:this.userId,
						pass:this.userPass
					}).then((res)=>{
						if(res.status == 200){
							if(res.data.status == 0){
								console.log(this.userId)
								this.$toast("登录成功！")
								this.$router.push("/")
							}else if(res.data.status == 2){
								this.$toast(res.data.err)
							}
						}
						console.log(res)
						
					}).catch((err)=>{
						this.$toast("请求发送失败！")
					})
					}else{
						this.$toast('此账户信息有误');
					}
				},
				
				
				//快捷登陆
			LoginPhonePost(){
					if(this.phone==1&&this.checked==true){
						this.$axios.post("/api/xinhua/login/mobile",{
							mobile:this.userPhone,
							code:this.noteCoad
						}).then((res)=>{
							if(res.status==200){
								if(res.data.status==0){
									this.$toast(res.data.err)
									this.$router.push("/")
								}else if(res.data.status==2){
									this.$toast(res.data.err)
								}
							}
						}).catch((err)=>{
							this.$toast("网址请求失败")
						})
					}else{
						this.$toast('此次手机登录信息有误');
					}
			}
			
			
		}
		}
</script>

<style scoped>
	.Login{
		width: 100%;
		height: 100%;
		background: #f7f7f7;
	}
	.LoginHeader{
		width: 100%;
		height: 1.07rem;
	}
	.LoginHeader .LoginHeaderCenter{
		width: 6.9rem;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	.LoginHeader .LoginHeaderCenter .van-icon{
		font-size: .4rem !important;
	}
	.LoginTitle{
		width: 100%;
		height: .87rem;
	}
	.TimeCoad{
		height: .7rem;
	  width: 2.5rem;
	  position: absolute;
	  top: 2.4rem;
	  right: .1rem;
	  background: gainsboro;
	  color: #FFFFFF;
	  font-size: .2rem;
	  line-height: .7rem;
	}
	.LoginTitle .LoginTitleBox{
		width: 6.9rem;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: relative;
		font-size:.38rem ;
		color: #363433;
	}
	.LoginTitle .LoginTitleBox div{
		width: .6rem;
		height: .04rem;
		background: red;
	}
	.LoginTitle .LoginTitleBox .Pos1{
		position: absolute;
		bottom: 0;
		left: 1.4rem;
	}
	.LoginTitle .LoginTitleBox .Pos2{
		position: absolute;
		bottom: 0;
		right: 1.4rem;
	}
	.LoginFooter{
		width: 100%;
		float: left;
	}
	.LoginFooter .LoginFooterBox{
		width: 6.9rem;
		margin: 0 auto;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput{
		width: 100%;
		float: left;
		margin-top:.6rem ;
		border-radius: .1rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost{
		width: 100%;
		float: left;
		position: relative;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .XhLoginMsg{
		font-size: .38rem;
		color: red;
		font-weight: 900;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost div{
		position: absolute;
		width: 6.66rem;
		height: 2px;
		right: 0;
		background: #dddddd;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost div:nth-child(1){
		top: 1rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost div:nth-child(2){
		top: 2.1rem;
	}
/* 	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost p{
		line-height: 1.1rem;
		width: 100%;
		text-align: left;
		color:#bbbbbb ;
		font-size:.3rem;
		position: absolute;
		z-index: 1111;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost p:nth-child(1){
		top: 0rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost p:nth-child(2){
		top: 1.1rem;
	} */
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost input{
		display: block;
		width: 100%;
		height:1.1rem ;
		border: 0 !important;
		font-size: .35rem;
		z-index: 2;
		float: left;
		padding: 0 .24rem 0 .24rem;
	}
	 .LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .FooterBoxPost{
		width: 100%;
		height: 1.46rem;
		float: left;
		line-height: 1.46rem;
		font-size: .27rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .3rem 0 .3rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .FooterBoxSign{
		width: 100%;
		float: left;
		height: .77rem;
		background: #c62f2e;
		text-align: center;
		line-height:.77rem ;
		font-size:.26rem ;
		color: #FFFFFF;
		border-radius: .1rem;
		margin-top: .4rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .picCode{
		width: 2rem;
		height: .9rem;
		position: absolute;
		top: 1.2rem; 
		right: .2rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .MessageCoad{
		height: .7rem;
		width: 2rem;
		position: absolute;
		top: 2.4rem;
		right: .1rem;
		background: red;
		color: #FFFFFF;
		font-size: .2rem;
		line-height: .7rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxTreaty{
		width: 100%;
		float: left;
		margin-top:.3rem ;
		display: flex;
	}
	.LoginFooter .LoginFooterBox .FooterBoxTreaty span{
		line-height: .8rem;
		 font-size: 0.4rem;
		 margin-left: .2rem;
	}
	
	.LoginFooter .LoginFooterBox .FooterBoxThird{
		width: 100%;
		top: 85%;
		left: -.1rem;
		position: absolute;
		display: flex;
		justify-content: space-around;
	}
	.LoginFooter .LoginFooterBox .FooterBoxThird .one{
		width: 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.LoginFooter .LoginFooterBox .FooterBoxThird .one img{
		width: .5rem;
		height:.5rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxThird .one span{
		font-size: .33rem;color: #9e9e9e;
	}
</style>
