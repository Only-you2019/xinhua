<template>
  <div class="XhCountBind-cs">
    <div class="header-cs">
      <span class="iconfont icon-fanhui" @click="$router.back()"></span>
      <span class="set-cs">账号绑定</span>
    </div>
    <div class="main-cs">
      <div>
        <div>
          <img src="../../static/cs/账号绑定_03.png">
          <span>QQ</span>
        </div>
        <span>✓已绑定</span>
      </div>
      <div>
        <div>
          <img src="../../static/cs/账号绑定_06.png">
          <span>微信</span>
        </div>
        <span>+绑定</span>
      </div>
      <div>
        <div>
          <img src="../../static/cs/账号绑定_08.png">
          <span>新浪微博</span>
        </div>
        <span>+绑定</span>
      </div>
    </div>
    <div>
      账号关联之后,用户可以用QQ、微信、新浪微博账号快速登录“新华书店网上商城”。
    </div>
  </div>
</template>

<script>
  export default {
    name: "XhCountBind"
  }
</script>

<style scoped>
  /*@import '../assets/css/XhStyleOne.css';*/

  .XhCountBind-cs {
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }

  .XhCountBind-cs .header-cs {
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }

  .XhCountBind-cs .header-cs .icon-fanhui {
    float: left;
    color: red;
  }

  .XhCountBind-cs .header-cs .set-cs {
    margin-right: 0.16rem;

  }

  .XhCountBind-cs .main-cs {
    background-color: #ffffff;
    margin-top: 0.5rem;
  }

  .XhCountBind-cs .main-cs > div {
    height: 1.16rem;
    width: 94%;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border-bottom: 1px solid #cccccc;
  }

  .XhCountBind-cs .main-cs > div:last-child {
    border: none
  }

  .XhCountBind-cs .main-cs > div:nth-child(1) > span {
    width: 1.45rem;
    border: 1px #cccccc solid;
  }

  .XhCountBind-cs .main-cs img {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.18rem;
  }

  .XhCountBind-cs .main-cs > div > span {
    width: 1rem;
    height: 0.5rem;
    border: 1px red solid;
    display: inline-block;
    line-height: 0.5rem;
  }

  .XhCountBind-cs .main-cs > div > div {
    display: flex;
    align-items: center;
  }

  .XhCountBind-cs > div:nth-child(3) {
    color: #929292;
    margin-top: 0.34rem;
    padding: 0 0.3rem;
    text-align: left;
    font-size: 14px;
  }
</style>
