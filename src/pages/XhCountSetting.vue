<template>
    <div class="XhCountSetting-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.push('/XHmine')"></span>
        <span class="set-cs">账户设置</span>
      </div>
      <div class="main-bottol-cs">
        <div class="main-cs">
        <div @click="$router.push('/XhPersonalMessage')">
          <span>个人资料修改</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
        <div @click="$router.push('/XhUpdatePassword')">
          <span>修改密码</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
        <div @click="$router.push('/XhUpdatePhone')">
          <span>修改手机</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
        <div @click="$router.push('/XhCountBind')">
          <span>账号绑定</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
        <div style="border: none" @click="$router.push('/XhDestoryCount')">
        <span>注销账号</span>
        <i class="iconfont icon-jiantouyou"></i>
        </div>
      </div>
        <div class="main-address" style="position:relative;top:0.22rem;">
          <div @click="$router.push('/XhAddressManagement')">
            <span>地址管理</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
          <div style="border: none" @click="$router.push('/XhBillManagement')">
            <span>发票管理</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div class="main-address" style="position:relative;top:0.44rem">
          <div @click="$router.push('/XhSetting')">
            <span>设置</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
          <div style="border: none" @click="$router.push('/XhComplaintFeedback')">
            <span>意见反馈</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div class="main-address" style="position:relative;top:0.66rem;" @click="exitCs">
          <div style="border: none;height: 0.75rem;line-height: 0.75rem;display: inline-block" >
           退出登录
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { Dialog } from 'vant';
  import api from '.././XinHuaApi'
    export default {
        name: "XhCountSetting",
      methods:{
          exitCs(){
            Dialog.confirm({
              title: '提示',
              message: '确定退出登录?',
              confirmButtonColor:"#c72f2e"
            }).then(() => {
              // on confirm
              api.get('/api/xinhua/logout').then(data => {
                // 判断http请求状态码,200为请求成功
                if (data.status === 200) {
                  // 判断接口请求是否成功 0为成功
                  if (data.data.status === 0) {
                    // 成功时接收数据
                    sessionStorage.removeItem("mobile")
                    this.$router.push("/")
                    this.$toast('您已退出登录');
                  } else {
                    // 失败时打印错误信息
                    console.log(data.data.err);
                  }
                }
              }).catch(err => {
                // 请求错误返回错误信息
                console.log(err);
              });
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
  .XhCountSetting-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
  }
  .XhCountSetting-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }
  .XhCountSetting-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhCountSetting-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
  .XhCountSetting-cs .main-cs,.XhCountSetting-cs .main-address{
    padding: 0 0.26rem;
    width:100%;
    background-color: #ffffff;
  }
  .XhCountSetting-cs .main-cs>div, .XhCountSetting-cs .main-address>div{
    margin :0 auto;
    width:96%;
    height: 1.1rem;
    line-height: 1.1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
  }

</style>
