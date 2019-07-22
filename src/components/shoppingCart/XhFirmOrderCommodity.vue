<template>
  <div class="XhFirmOrderCommodity">
      <div class="XhFirmOrderCommodity-top">
        <div class="XhFirmOrderCommodity-top-wrapper">
          <div class="XhFirmOrderCommodity-top-icon-wrapper">
            <i class="iconfont">&#xe620;</i>
          </div>
          <div class="XhFirmOrderCommodity-top-text-wrapper">
            新华书店网上商城自营图书
          </div>
        </div>
      </div>
      <div class="XhFirmOrderCommodity-content" v-if="product.length>0" v-for="(item,index) in product">
        <div class="XhFirmOrderCommodity-content-img-wrapper">
          <img class="XhFirmOrderCommodity-content-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(JSON.parse(item.extension).img)">
        </div>
        <div class="XhFirmOrderCommodity-content-Name-price">
          <div class="XhFirmOrderCommodity-content-Name">
            <p>{{item.name}}</p>
          </div>
          <div class="XhFirmOrderCommodity-content-price-Number">
            <p class="XhFirmOrderCommodity-content-price">{{'￥'+JSON.parse(item.extension).price*item.num}}</p>
            <span class="XhFirmOrderCommodity-content-Number">{{'X'+item.num}}</span>
          </div>
        </div>
      </div>
      <div class="XhFirmOrderCommodity-Buyers-message-box">
        <div class="XhFirmOrderCommodity-Buyers-message">买家留言</div>
        <div class="XhFirmOrderCommodity-Buyers-message-input-wrapper">
          <input class="XhFirmOrderCommodity-Buyers-message-input" placeholder="限45字，选填，请详细说明您的需求"  type="text">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name : 'XhFirmOrderCommodity',
  props:["product"],
  methods:{
    urlEncode(str){
      if(str.indexOf("https:")==-1){
        str="https:"+str
        return encodeURI(str)
      }else{
        return encodeURI(str)
      }
    },
  }
}
</script>

<style scoped>
  .XhFirmOrderCommodity {
    background-color: #fff;
  }
  .XhFirmOrderCommodity-top {
    padding: 0 .3rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .XhFirmOrderCommodity-top-wrapper {
    display: flex;
    padding: .25rem 0 ;
    font-size: .34rem;
  }
  .XhFirmOrderCommodity-top-icon-wrapper {
    margin-right: .2rem;
  }

  .XhFirmOrderCommodity-content {
    padding: .2rem .3rem;
    display: flex;
    border-bottom: 1px solid #f1f1f1;
  }

  .XhFirmOrderCommodity-content-img-wrapper {
    margin-right: .1rem;
    height: 2.4rem;
    width: 2.4rem;
  }
  .XhFirmOrderCommodity-content-Name-price {
    flex: 1;
    height: 2.1rem;
    font-size: .28rem;
    padding-top: .15rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
  }
  .XhFirmOrderCommodity-content-img {
    width: 100%;
  }
  .XhFirmOrderCommodity-content-price {
    color: #c62f2e;
  }
  .XhFirmOrderCommodity-content-price-Number {
    display: flex;
    justify-content:space-between;
  }
  .XhFirmOrderCommodity-Buyers-message-box{
    display: flex;
    padding: 0 .3rem;
  }
  .XhFirmOrderCommodity-Buyers-message {
    font-size: .3rem;
    margin: .2rem 0;
  }
  .XhFirmOrderCommodity-Buyers-message-input-wrapper{
    flex: 1;
  }
  .XhFirmOrderCommodity-Buyers-message-input {
    border-width: 0;
    font-size: .3rem;
    height: .6rem;
    width: 100%;
    margin-left: .2rem;
    margin-top: .1rem;
  }
</style>



