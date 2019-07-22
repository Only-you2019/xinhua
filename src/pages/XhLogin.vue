<template>
  <div class="Login">
    <div class="LoginHeader">
      <div class="LoginHeaderCenter">
        <router-link to="/">
          <van-icon name="arrow-left"/>
        </router-link>
      </div>
    </div>
    <div class="LoginTitle">
      <div class="LoginTitleBox">
        <span @click="flag=1,LoginFontSize()" ref="Login">账号登录</span>
        <span @click="flag=2,QuestLoginFontSize()" ref="QuestLogin">快捷登录</span>
        <div class="Pos1" v-show="flag==1"></div>
        <div class="Pos2" v-show="flag==2"></div>
      </div>
    </div>

    <div class="LoginFooter">
      <div v-show="flag==1" class="LoginFooterBox">
        <div class="FooterBoxInput">
          <div class="XhLoginPost">
            <div></div>
            <h2 id="ID" :class="{active:(IdType==1)}" @click="ChangeId()">账号</h2>
            <h2 id="PASS" :class="{active:(PassType==1)}" @click="ChangePass()">密码</h2>
            <input ref="ID" v-model="userId" @blur="idCheck()" type="text" placeholder="">
            <input ref="PASS" v-model="userPass" @blur="passCheck()" type="password" placeholder="">
            <p class="FooterBoxPost">
              <router-link tag="span" to="/XhRegisterProtocol">注册</router-link>
              <router-link tag="span" to="/XhLoginForget">忘记密码</router-link>
            </p>
            <input @click="XhLoginPost()" type="button" class="FooterBoxSign" value="登录">
          </div>
        </div>

        <div class="FooterBoxThird">
          <div class="one">
            <img src="../assets/xhimg/wx.png" alt="">
            <span>微信</span>
          </div>
          <div class="one">
            <img src="../assets/xhimg/qq.png" alt="">
            <span>qq</span>
          </div>
          <div class="one">
            <img src="../assets/xhimg/weiBo.png" alt="">
            <span>微博</span>
          </div>
        </div>
      </div>
      <div v-show="flag==2" class="LoginFooterBox">
        <div class="FooterBoxInput">
          <div class="XhLoginPost">
            <div></div>
            <div></div>
            <h2 id="ID" :class="{active:(IdType==1)}" @click="ChangeId()">手机号</h2>
            <h2 id="PASS" :class="{active:(PassType==1)}" @click="ChangePass()">图片验证码</h2>
            <h2 id="COAD" :class="{active:(codeType==1)}" @click="ChangeCode()">短信验证码</h2>
            <input ref="Phone" @blur="phoneCheck()" v-model="userPhone" type="text" placeholder="">
            <input ref="Pic" @blur="piccheck()" v-model="checkCoad" type="text" placeholder="">
            <img @click="PicCheck()" :src="base64Str" class="picCode">
            <input ref="Coad" @blur="notecoad()" v-model="noteCoad" type="text" placeholder="">
            <button :disabled="disabled" @click="NoteCoad()" class="MessageCoad">发送验证码</button>
            <h1 v-if="show" class="TimeCoad">{{Time}}后重新发送</h1>
            <input @click="LoginPhonePost()" type="button" class="FooterBoxSign" value="登录">
          </div>
        </div>
        <div class="FooterBoxTreaty">
          <van-checkbox v-model="checked" checked-color="#e61818"></van-checkbox>
          <span>已同意<router-link to="/XhLoginTreaty" style="color: #0c77d3;" href="#">《用户注册协议》</router-link></span>
        </div>
        <div class="FooterBoxThird">
          <div class="one">
            <a href="https://wx.qq.com/">
              <img src="../assets/xhimg/wx.png" alt="">
              <span>微信</span>
            </a>
          </div>
          <div class="one">
            <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=100286515&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&response_type=code&client_id=100286515&redirect_uri=http%3A%2F%2Fqq.bookschina.com%2Fqq%2Fqqreturn.aspx%3Furl%3Dhttp%3A%2F%2Fm.bookschina.com%2Fregister%2Fqqlogin%3Fu%3D%2FUserCenter%2FMyHome&state=89C9574620A5733461AC80CD3ABBAFC8">
              <img src="../assets/xhimg/qq.png" alt="">
              <span>qq</span>
            </a>
          </div>
          <div class="one">
            <a href="https://api.weibo.com/oauth2/authorize?client_id=2180328264&redirect_uri=http%3A%2F%2Fqq.bookschina.com%2Fweibo%2Fweiboreturn.aspx%3Furl%3Dhttp%3A%2F%2Fm.bookschina.com%2Fregister%2Fweibologin%3Fu%3D%2FUserCenter%2FMyHome&state=025626D04475D8D792DA7F41BFFD0718">
              <img src="../assets/xhimg/weiBo.png" alt="">
              <span>微博</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        flag: 1,
        checked: false,
        userId: '',
        userPass: '',
        id: "",
        pass: "",
        userPhone: "",
        phone: "",
        checkCoad: '',
        disabled: false,
        PicCheck1: "",
        base64Str: '',
        show: '',
        Time: '',
        noteCoad: '',
        IdType: '',
        PassType: '',
        codeType: ''
      }
    },
    created() {
      this.PicCheck()
    },
    methods: {
      LoginFontSize() {
        this.$refs.Login.style.fontSize = ".48rem";
        this.$refs.QuestLogin.style.fontSize = ".38rem";
      },

      QuestLoginFontSize() {
        this.$refs.Login.style.fontSize = ".38rem";
        this.$refs.QuestLogin.style.fontSize = ".48rem";
      },
      // 效果字体
      ChangeId() {
        this.IdType = 1
        this.$refs.ID.focus()
        this.$refs.Phone.focus()

      },
      ChangePass() {
        this.PassType = 1
        this.$refs.PASS.focus()
        this.$refs.Pic.focus()
      },
      ChangeCode() {
        this.codeType = 1
        this.$refs.Coad.focus()
      },


      idCheck() {
        var regid = /^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$/;
        if (this.userId != "") {
          this.IdType = 1
        } else if (this.userId == "") {
          this.IdType = 2
        }
        if (regid.test(this.userId) == true) {
          this.id = 1;
        } else {
          this.$toast("账号格式错误！")
        }
      },

      // 密码验证
      passCheck() {
        var regPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
        // if(regPass.test(this.userPass)==true){
        if (this.userPass != "") {
          this.PassType = 1
        } else if (this.userPass == "") {
          this.PassType = 2
        }
        this.pass = 1;
        // }else{
        // 	this.$toast("密码格式错误！")
        // }
      },

      // 手机验证
      phoneCheck() {
        var regPhone = /^^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$$/;
        if (this.userPhone != "") {
          this.IdType = 1
        } else if (this.userPhone == "") {
          this.IdType = 2
        }
        if (regPhone.test(this.userPhone) == true) {
          this.phone = 1;
        } else {
          this.$toast("手机号格式错误！")
        }
      },

      piccheck() {
        if (this.checkCoad != "") {
          this.PassType = 1
        } else if (this.checkCoad == "") {
          this.PassType = 2
        }
      },
      // 图片验证码
      PicCheck() {
        this.$axios.get("/api/xinhua/verification/code").then((res) => {
          console.log(res)
          if (res.status == 200) {
            if (res.data.status == 0) {
              this.base64Str = res.data.datas.base64Str
            } else {
              this.$toast(res.data.err)
            }
          }
        })
      },

      notecoad() {
        if (this.noteCoad != "") {
          this.codeType = 1
        } else if (this.noteCoad == "") {
          this.codeType = 2
        }
      },
      // 短信验证
      NoteCoad() {
        if (this.phone == 1) {
          var url1 = '/api/xinhua/verification/login?code=' + this.checkCoad + "&&mobile=" + this.userPhone;
          this.$axios.post(url1).then((res) => {
            console.log(res)
            if (res.status == 200) {
              if (res.data.status == 0) {
                this.$toast(res.data.err)
                this.Time = 60;
                this.show = true
                let time = setInterval(() => {
                  this.Time--;
                  if (this.Time == 0) {
                    clearInterval(time)
                    this.show = false
                  }
                }, 1000)
              } else if (res.data.status == 2) {
                this.$toast(res.data.err)
              }
            }
          })
        } else {
          this.$toast("请输入正确的手机格式")
        }
      },


      // 账号登录
      XhLoginPost() {
        // let $this= this;
        console.log(this.userId)
        if (this.id == 1 && this.pass == 1) {
          var url2 = '/api/xinhua/login/account?mobile=' + this.userId + "&&pass=" + this.userPass
          this.$axios.post(url2).then((res) => {
            if (res.status == 200) {
              if (res.data.status == 0) {
                console.log(this.userId)
                sessionStorage.setItem('mobile', this.userId)
                this.$toast("登录成功！")
                this.$router.push("/XhMine")
              } else if (res.data.status == 2) {
                this.$toast(res.data.err)
              }
            }
            console.log(res)

          }).catch((err) => {
            this.$toast("请求发送失败！")
          })
        } else {
          this.$toast('此账户信息有误');
        }
      },


      //快捷登陆
      LoginPhonePost() {
        if (this.phone == 1 && this.checked == true) {
          var url3 = '/api/xinhua/login/mobile?code=' + this.noteCoad + "&&mobile=" + this.userPhone;
          this.$axios.post(url3).then((res) => {
            if (res.status == 200) {
              if (res.data.status == 0) {
                localStorage.setItem('mobile', this.userPhone)
                this.$toast(res.data.err)
                this.$router.push("/XhMine")
              } else if (res.data.status == 2) {
                this.$toast(res.data.err)
              }
            }
          }).catch((err) => {
            this.$toast("网址请求失败")
          })
        } else {
          this.$toast('此次手机登录信息有误');
        }
      }
    }
  }
</script>

<style scoped>
  /*@import "../assets/css/XhStyleOne.css";*/
  .active{
  	font-size:.3rem !important;
  	line-height:.2rem !important;
  }
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
    height: .8rem;
    width: 2.5rem;
    position: absolute;
    top: 2.34rem;
    right: .04rem;
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
  .LoginTitle .LoginTitleBox span:nth-child(1){
  	font-size: .48rem;
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
  /* 效果字体 */
  .LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost h2{
  	line-height: 1.1rem;
  	width: 100%;
  	text-align: left;
  	color:#bbbbbb ;
  	font-size:.35rem;
  	position: absolute;
  	left: .3rem;
  	transition: all .5s;
  	font-weight: normal;
  }
  .LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost #ID{
  	top: 0rem ;
  }
  .LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost #PASS{
  	top: 1.1rem ;
  }
  .LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost #COAD{
  	top: 2.2rem ;
  }

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
  	top: 1.1rem;
  	right: .2rem;
  	border-radius: .1rem;
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
        border-radius: .1rem;
        border: 0;
  }
  .LoginFooter .LoginFooterBox .FooterBoxTreaty{
  	width: 100%;
  	float: left;
  	margin-top:.3rem ;
  	display: flex;
  }
  .LoginFooter .LoginFooterBox .FooterBoxTreaty span{
  	line-height: .8rem;
  	 font-size: 0.3rem;
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
  	display: flex;
  	justify-content: left;
  	align-items: center;
  }
  .LoginFooter .LoginFooterBox .FooterBoxThird .one img{
  	width: .5rem;
  	height:.5rem;
    vertical-align: middle;
  }
  .LoginFooter .LoginFooterBox .FooterBoxThird .one span{
  	font-size: .33rem;color: #9e9e9e;
  }
</style>
