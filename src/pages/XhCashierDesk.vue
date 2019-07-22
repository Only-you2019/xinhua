<template>
  <div class="xhCashierDesk-bg xhCashierDesk">
    <!--  头部-->
    <div class="bannered-head">
      <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      <span class="head-name">收银台</span>
      <i class="iconfont "></i>
    </div>
    <!-- 头部结束-->

    <!-- 主体内容start-->
    <div class="payList-wrap">
      <ul class="paylist">
        <li class="payItem payable">
          <span class="payItem-size">应付金额</span>
          <span class="pay-money payItem-size">{{"￥"+allPrice}}</span>
        </li>
        <li class="payItem">
          <span class="payItem-size">订单号</span>
          <span class="order-code payItem-size">{{orderCodea}}</span>
        </li>
        <li class="payItem payways">
          <span class="payItem-size payways-words">选择支付方式</span>
          <span></span>
        </li>
        <li class="payItem Alipay">
          <div class="alipay-vertical">
            <img class="pay-way-logo" src="../../static/images/pay/alipayLogo.png" alt="">
            <span class="payItem-size">支付宝</span>
          </div>
          <i class="iconfont icon-jiantouyou"></i>
        </li>
        <li class="payItem">
          <div class="wechats-vertical">
            <img class="pay-way-logo" src="../../static/images/pay/wechatsLogo.png" alt="">
            <span class="payItem-size">微信支付</span>
          </div>
          <i class="iconfont icon-jiantouyou"></i>
        </li>
      </ul>
    </div>
    <!-- 主体内容end-->
  </div>
</template>

<script>
  export default {
    name: "XhCashierDesk",
    data() {
      return {
        allPrice:"",
        orderCodea:"8888888"
      }
    },
    created(){
      this.dataLoading()
    },
    methods: {
      dataLoading(){
        this.allPrice=this.$route.query.allPrice;
        console.log(this.allPrice);
      },
    }
  }
</script>

<style scoped>
  @import "../assets/css/XhCashierDesk.css";
</style>
