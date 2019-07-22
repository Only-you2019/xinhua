<template>
  <div>
    <div class="XhFirmOrderSettlement">
      <div class="XhFirmOrderSettlement-Total-price-wrapper XhFirmOrderSettlement-flex">
        <div class="XhFirmOrderSettlement-Total-price">
          <p>商品总价</p>
        </div>
        <div class="XhFirmOrderSettlement-Total-money">
          <p>{{'￥'+allPrice}}</p>
        </div>
      </div>
      <div class="XhFirmOrderSettlement-freight-wrapper XhFirmOrderSettlement-flex">
        <div class="XhFirmOrderSettlement-freight-price">
          <p>运费</p>
        </div>
        <div class="XhFirmOrderSettlement-freight-money">
          <p>￥0.00</p>
        </div>
      </div>
      <div class="XhFirmOrderSettlement-Discount-wrapper XhFirmOrderSettlement-flex">
        <div class="XhFirmOrderSettlement-Discount-price">
          <p>平台优惠</p>
        </div>
        <div class="XhFirmOrderSettlement-Discount-money">
          <p>-￥0.00</p>
        </div>
      </div>
      <div class="XhFirmOrderSettlement-Total-orders-wrapper XhFirmOrderSettlement-flex">
        <div class="XhFirmOrderSettlement-Total-orders-price">
          <p>订单总额</p>
        </div>
        <div class="XhFirmOrderSettlement-Total-orders-money">
          <p class="XhFirmOrderSettlement-Total-amount-money">{{'￥'+allPrice}}</p>
        </div>
      </div>
    </div>
    <div class="XhFirmOrderSettlement-empty"></div>
  </div>
</template>


<script>
export default {
  name : 'XhFirmOrderSettlement',
  props:["allPrice"]
}
</script>

<style scoped>
  .XhFirmOrderSettlement-flex {
    display: flex;
    justify-content:space-between;
    font-size: .26rem;
    color: #999;
    padding: .1rem 0;
  }

  .XhFirmOrderSettlement{
    margin-top: .2rem;
    padding: .2rem .3rem 0;
    background: #fff;
  }
  .XhFirmOrderSettlement-Discount-wrapper{
    border-bottom: 1px solid #f1f1f1;
  }
  .XhFirmOrderSettlement-Total-orders-wrapper {
    color: #000;
    font-size: .3rem;
    padding: .25rem 0;
  }
  .XhFirmOrderSettlement-Total-amount-money {
    color: #c62f2e;
  }
  .XhFirmOrderSettlement-empty {
    padding: .5rem 0;
    background: #f1f1f1;
  }
</style>



