<template>
  <div class="XhGiftCards">
    <div class="xinhua_header">
      <router-link to="">
        <i @click="$router.back()" class="iconfont icon-fanhui"></i>
      </router-link>
      <span>我的礼品卡</span>
    </div>

    <div class="binding">
      <input type="text" placeholder="输入卡密绑定礼品卡">

      <div class="binding_right">
        <span>绑定</span>
      </div>
    </div>

    <div class="options">
      <van-tabs lazy-render:true background="#f7f7f7" v-model="active">
        <van-tab title="可使用(0)">
          <div class="nogift">
            <img src="../../static/images/mine/giftcards.png" alt="">
            <p>您暂无可用礼品卡哦~</p>
          </div>
        </van-tab>
        <van-tab title="不可使用(0)">
          <div class="nogift">
            <img src="../../static/images/mine/giftcards.png" alt="">
            <p>您暂无可用礼品卡哦~</p>
          </div>
        </van-tab>
      </van-tabs>

    </div>


  </div>
</template>

<script>
  export default {
    name: "XhGiftCards",
    data() {
      return {
        active: 2
      };
    }
  }
</script>

<style scoped>
  /*@import '../assets/css/XhStyleOne.css';*/

  .XhGiftCards {
    width: 100%;
    height: 13.34rem;
    background-color: #f7f7f7;
    text-align: left;


  }

  .XhGiftCards .xinhua_header {
    width: 100%;
    height: 0.9rem;
    background-color: #f7f7f7;
  }

  .XhGiftCards .xinhua_header a {
    display: inline-block;
    width: 15%;
    height: 100%;
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.1rem;
    color: red;

  }

  .XhGiftCards .xinhua_header span:nth-child(2) {
    display: inline-block;
    width: 70%;
    height: 100%;
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.35rem;
    color: #5a5a5a;
  }

  .XhGiftCards .binding {
    width: 95%;
    height: 0.85rem;
    background-color: #FFFFFF;
    margin: 0 auto;
    border: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .XhGiftCards .binding input {
    outline: none;
    border: none;
    font-size: 14px;
    padding-left: 0.2rem;
  }

  .XhGiftCards .binding_right {
    width: 1.4rem;
    height: 0.6rem;
    border: 1px solid #c62f2e;
    border-radius: .1rem;
    text-align: center;
    line-height: 0.6rem;
    color: #c62f2e;
    font-size: 14px;
    margin-right: 0.2rem;
  }

  .XhGiftCards .nogift {
    width: 3rem;
    height: 3.1rem;
    text-align: center;
    margin: 3rem auto;
  }

  .XhGiftCards .nogift img {
    width: 3rem;
    height: 2.7rem;
    border-radius: .2rem;
  }

  .XhGiftCards .nogift P {
    color: #999999;
    font-size: 14px;
  }
</style>
