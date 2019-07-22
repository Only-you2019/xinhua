<template>
  <div class="LoginLogon">
    <p class="XhLoginPhoneMsg">{{PhoneMsg}}</p>
    <div class="LoginHeader">
      <div class="LoginHeaderCenter">
        <router-link to="/XhLogin">
          <van-icon name="arrow-left"/>
        </router-link>
        <p>注册</p>
      </div>
    </div>
    <div class="LoginForgetFooter">
      <div class="LoginFooterBox">
        <div class="FooterBoxInput">
          <div class="FooterBoxInput-input">
            <div></div>
            <div></div>
            <div></div>
            <h2 id="ID" :class="{active:(IdType==1)}" @click="ChangeId()">手机号</h2>
            <h2 id="PASS" :class="{active:(PassType==1)}" @click="ChangePass()">图片验证码</h2>
            <h2 id="COAD" :class="{active:(codeType==1)}" @click="ChangeCode()">短信验证码</h2>
            <h2 id="PIC" :class="{active:(picType==1)}" @click="ChangePic()">请设置密码</h2>

            <input ref="Phone" @blur="phoneCheck()" v-model="userPhone" type="text" placeholder="">
            <input ref="Pic" @blur="piccheck()" v-model="checkCoad" type="text" placeholder="">
            <img @click="checkCode()" :src="base64Str" class="picCode">
            <input ref="Coad" @blur="notecoad()" v-model="noteCoad" type="text" placeholder="">
            <button @click="MessageCoad()" class="MessageCoad">发送验证码</button>
            <h1 v-if="flag" class="TimeCoad">{{Time}}后重新发送</h1>
            <input ref="YZ" v-model="userPass" @blur="passCheck()" type="password" placeholder="">
            <p class="FooterBoxTreaty">
              <span>已同意<router-link to="/XhLoginTreaty" style="color: #0c77d3;" href="#">《用户注册协议》</router-link></span>
            </p>
            <input class="FooterBoxSign" @click="LoginPhonePost()" type="button" value="注册">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "XhRegister",
    data() {
      return {
        flag: "",
        PhoneMsg: "",
        userPhone: "",
        phone: '',
        checkCoad: '',
        userPass: '',
        pass: "",
        base64Str: "",
        noteCoad: '',
        Time: "",
        IdType: '',
        PassType: '',
        codeType: '',
        picType: ''
      }
    },
    created() {
      this.checkCode()
    },
    methods: {
      // 效果字体
      ChangeId() {
        this.IdType = 1
        this.$refs.Phone.focus()

      },
      ChangePass() {
        this.PassType = 1
        // this.$refs.PASS.focus()
        this.$refs.Pic.focus()
      },
      ChangeCode() {
        this.codeType = 1
        this.$refs.Coad.focus()
      },
      ChangePic() {
        this.picType = 1
        this.$refs.YZ.focus()
      },
      // 手机号验证
      phoneCheck() {
        var regPhone = /^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$/;
        if (this.userPhone != "") {
          this.IdType = 1
        } else if (this.userPhone == "") {
          this.IdType = 2
        }
        if (regPhone.test(this.userPhone) == true) {
          this.PhoneMsg = ''
          this.phone = 1;
        } else {
          this.$toast("手机号格式错误！")
        }
      },

      // 图片验证码
      checkCode() {
        this.$axios.get("/api/xinhua/verification/code").then((res) => {
          if (res.status == 200) {
            if (res.data.status == 0) {
              this.base64Str = res.data.datas.base64Str
            }
          }
        }).catch((err) => {
          this.$toast("请求发送失败！")
        })
      },
      piccheck() {
        if (this.checkCoad != "") {
          this.PassType = 1
        } else if (this.checkCoad == "") {
          this.PassType = 2
        }
      },
      // 验证码
      MessageCoad() {
        if (this.phone == 1) {
          var url = '/api/xinhua/registered/code?verificationCode=' + this.checkCoad + '&&mobile=' + this.userPhone
          console.log(url)
          this.$axios.post(url).then((res) => {
            if (res.status == 200) {
              console.log(res)
              if (res.data.status == 0) {
                this.$toast(res.data.err)
                this.Time = 60;
                this.flag = true
                let time = setInterval(() => {
                  this.Time--;
                  if (this.Time == 0) {
                    clearInterval(time)
                    this.flag = false
                  }
                }, 1000)
              } else if (res.data.status == 2) {
                this.$toast(res.data.err)
              }
            }
          }).catch((err) => {
            this.$toast("请求发送失败！")
          })
        } else {
          this.$toast("请输入正确的手机格式")
        }
      },
      notecoad() {
        if (this.noteCoad != "") {
          this.codeType = 1
        } else if (this.noteCoad == "") {
          this.codeType = 2
        }
      },
      // 密码验证
      passCheck() {
        this.pass = 1;
        if (this.userPass != "") {
          this.picType = 1
        } else if (this.userPass == "") {
          this.picType = 2
        }
      },
      // 总验证
      LoginPhonePost() {
        if (this.pass == 1 && this.phone == 1) {
          var url1 = '/api/xinhua/registered?mobile=' + this.userPhone + '&&pass=' + this.userPass + '&&mobileCode=' + this.noteCoad
          this.$axios.post(url1).then((res) => {
            if (res.status == 200) {
              console.log(res)
              if (res.data.status == 0) {
                this.$toast(res.data.err)
                // this.saveCookie("userPhone","userPass",{expires: 7})
                this.$router.push("/XhLogin")
                console.log(res)
              } else if (res.data.status == 2) {
                this.$toast(res.data.err)
              }
            }
          }).catch((err) => {
            this.$toast("请求发送失败")
          })
        } else {
          this.$toast('此次注册信息有误');
        }
      }

    }
  }
</script>

<style scoped>
  /*@import "../assets/css/XhStyleOne.css";*/
  .active {
    font-size: .3rem !important;
    line-height: .2rem !important;
  }

  .LoginLogon {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
  }

  .XhLoginPhoneMsg {
    position: absolute;
    top: 7%;
    left: 28%;
    font-size: .38rem;
    color: red;
    font-weight: 900;
  }

  .picCode {
    width: 2rem;
    height: .9rem;
    position: absolute;
    top: 1.2rem;
    right: .2rem;
    border-radius: .1rem;
  }

  .MessageCoad {
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

  .TimeCoad {
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

  .LoginLogon .LoginHeader {
    width: 100%;
    height: 1.07rem;
  }

  .LoginLogon .LoginHeader .LoginHeaderCenter {
    width: 6.9rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .LoginLogon .LoginHeader .LoginHeaderCenter p {
    font-size: .37rem;
    color: #000000;
    margin-left: 2.5rem;
  }

  .LoginLogon .LoginHeader .LoginHeaderCenter .van-icon {
    font-size: .4rem !important;
  }


  .LoginLogon .LoginForgetFooter {
    width: 100%;
    float: left;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox {
    width: 6.9rem;
    margin: 0 auto;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput {
    width: 100%;
    float: left;
    margin-top: .6rem;
    border-radius: .1rem;

  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input {
    width: 100%;
    float: left;
    position: relative;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input div {
    position: absolute;
    width: 6.66rem;
    height: 2px;
    background: #dddddd;
    right: 0;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input div:nth-child(1) {
    top: 1rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input div:nth-child(2) {
    top: 2.2rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input div:nth-child(3) {
    top: 3.3rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input h2 {
    line-height: 1.1rem;
    width: 100%;
    text-align: left;
    color: #bbbbbb;
    font-size: .35rem;
    position: absolute;
    left: .3rem;
    transition: all .5s;
    font-weight: normal;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input #ID {
    top: 0rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input #PASS {
    top: 1.1rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input #COAD {
    top: 2.3rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input #PIC {
    top: 3.4rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input input {
    display: block;
    width: 100%;
    height: 1.1rem;
    border: 0 !important;
    font-size: .35rem;
    z-index: 2;
    background: #FFFFFF;
    padding: 0 .24rem 0 .24rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input .FooterBoxSign {
    width: 100%;
    float: left;
    height: .77rem;
    background: #c62f2e;
    text-align: center;
    line-height: .77rem;
    font-size: .26rem;
    color: #FFFFFF;
    border-radius: .1rem;
    margin-top: .5rem;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input .FooterBoxTreaty {
    width: 100%;
    float: left;
    margin-top: .3rem;
    display: flex;
  }

  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input .FooterBoxTreaty span {
    line-height: .8rem;
    font-size: 0.3rem;
    margin-left: .2rem;
  }
</style>
