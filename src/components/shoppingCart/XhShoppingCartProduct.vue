<template>
    <div class="XhShoppingCartProduct">
      <div class="XhShoppingCartShopName">
        <van-checkbox v-model="product.checked" checked-color="#c72f2e" class="XhShoppingCartShopChecked" @click="allChecked"></van-checkbox>
        <van-icon name="shop-o" class="XhShoppingCartShopIcon"/>
        <h4 class="XhShoppingCartShopTitle">新华书店网上商城自营图书</h4>
        <van-button type="primary" @click="showPopup" class="XhShoppingCartDiscountsBox">
          <van-icon name="coupon-o" class="XhShoppingCartShopCoupon"/>
        </van-button>
      </div>
      <div class="XhShoppingCartProductInfo" v-for="(item,index) in product.data">
        <van-checkbox v-model="item.checked" checked-color="#c72f2e" class="XhShoppingCartShopChecked"></van-checkbox>
        <div class="Product">
          <img :src="item.img" alt="" class="ProductImg">
          <h5 class="ProductH5">{{item.name}}</h5>
          <p class="ProductPrice">{{item.price}}</p>
          <div class="AddReduce">
            <span class="numberReduce" @click="reduce(index)">-</span>
            <span class="ProductNumber">{{item.value}}</span>
            <span class="numberAdd" @click="add(index)">+</span>
          </div>
        </div>
      </div>
      <van-popup v-model="show" round position="bottom" :style="{ height: '20%', height: '10rem' }">
        <div class="PopupDiscounts">
          <div class="PopupDiscountsHeader">
            <span class="DiscountTitle">优惠卷</span>
            <van-icon name="cross"  class="IconsCross"/>
          </div>
          <div class="PopupDiscountsBox">
            <div class="PopupDiscountsMain">
              <span class="SaveMoney">￥5.00</span>
              <span class="ProductDemand">仅限部分图书商品使用</span>
              <span class="PriceDemand">满60.00元可以使用</span>
              <span class="PeriodOfValidity">2019.07.01-2021.01.01</span>
              <button class="ImmediatelyReceive">立即领取</button>
            </div>
            <div class="PopupDiscountsMain">
              <span class="SaveMoney">￥5.00</span>
              <span class="ProductDemand">仅限部分图书商品使用</span>
              <span class="PriceDemand">满60.00元可以使用</span>
              <span class="PeriodOfValidity">2019.07.01-2021.01.01</span>
              <button class="ImmediatelyReceive">立即领取</button>
            </div>
            <div class="PopupDiscountsMain">
              <span class="SaveMoney">￥5.00</span>
              <span class="ProductDemand">仅限部分图书商品使用</span>
              <span class="PriceDemand">满60.00元可以使用</span>
              <span class="PeriodOfValidity">2019.07.01-2021.01.01</span>
              <button class="ImmediatelyReceive">立即领取</button>
            </div>
            <div class="PopupDiscountsMain">
              <span class="SaveMoney">￥5.00</span>
              <span class="ProductDemand">仅限部分图书商品使用</span>
              <span class="PriceDemand">满60.00元可以使用</span>
              <span class="PeriodOfValidity">2019.07.01-2021.01.01</span>
              <button class="ImmediatelyReceive">立即领取</button>
            </div>
            <div class="PopupDiscountsMain">
              <span class="SaveMoney">￥5.00</span>
              <span class="ProductDemand">仅限部分图书商品使用</span>
              <span class="PriceDemand">满60.00元可以使用</span>
              <span class="PeriodOfValidity">2019.07.01-2021.01.01</span>
              <button class="ImmediatelyReceive">立即领取</button>
            </div>
          </div>
          <div class="PopupDiscountsBottom">
            完成
          </div>
        </div>
      </van-popup>
    </div>
</template>

<script>

    export default {
        name: "XhShoppingCartProduct",
        props:["product"],
        data() {
          return {
            show: false,
          }
        },
        methods: {
          showPopup() {
            this.show = true;
          },
          reduce(index){
            this.$emit("reducef",index);
          },
          add(index){
            this.$emit("addf",index);
          },
          allChecked(){
            this.$emit("allChecked",index);
          }

        }
    }
</script>

<style scoped>
  .XhShoppingCartShopName{
    width: 100%;
    height: 0.9rem;
    background-color: #ffffff;
    border-bottom: 2px solid #efefef;
    overflow: hidden;
  }
  .XhShoppingCartShopChecked{
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    width: 0.4rem;
    height: 0.4rem;
  }
  .XhShoppingCartShopIcon{
    font-size: 0.34rem;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  .XhShoppingCartShopTitle{
    font-size: 0.34rem;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.3rem;
  }
  .XhShoppingCartDiscountsBox{
    font-size: 0.34rem;
    float: right;
    margin-top: 0.1rem;
    margin-right: 0.1rem;
    color: #bf2e2d;
    background-color: transparent;
    border: none;
  }
  .XhShoppingCartProductInfo{
    width: 100%;
    min-height: 2.87rem;
    background-color: #ffffff;
  }
  .ProductImg{
    width: 1.54rem;
    height: 2.24rem;
    margin-top: 0.24rem;
    margin-left: 1.25rem;
    float: left;
  }
  .ProductH5{
    width: 2rem;
    font-size: 0.28rem;
    height: 0.28rem;
    margin-top: 0.3rem;
    margin-left: 0.6rem;
    float: left;
  }
  .ProductPrice{
    font-size: 0.24rem;
    height: 0.28rem;
    margin-top: 1.65rem;
    margin-left: 0.8rem;
    float: left;
    color:#c52726;
  }
  .AddReduce{
    margin-top: 1.2rem;
    margin-right: 0.04rem;
    float: right;
    width: 2.0rem;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
  }
  .numberAdd,.numberReduce{
    width: 0.6rem;
    height: 0.6rem;
    font-size: 0.6rem;
    line-height: 1rem;
    text-align: center;
  }
  .ProductNumber{
    width: 0.6rem;
    height: 0.6rem;
    font-size: 0.4rem;
    line-height: 1rem;
    text-align: center;
  }
  .PopupDiscountsHeader{
    width: 100%;
    height: 1.1rem;
    overflow: hidden;
    display: flex;
  }
  .PopupDiscountsHeader .DiscountTitle{
    height: 0.35rem;
    line-height: 0.35rem;
    padding-top: 0.4rem;
    font-size: 0.35rem;
    color:#0d0d0d;
    margin-left: 3.2rem;
  }
  .PopupDiscountsHeader .IconsCross{
    margin-top: 0.3rem;
    margin-left: 2.5rem;
    font-size: 0.4rem;
    color:#000000;
  }
  .PopupDiscountsBox{
    height: 8rem;
    overflow-y: scroll;
  }
  .PopupDiscountsMain{
    margin-left: 0.25rem;
    margin-bottom: 0.25rem;
    width: 7rem;
    height: 2.1rem;
    background: url("//assets-m.xinhuashudian.com/assets/files/normal.322f4f66744fa967.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .SaveMoney{
    height: 0.34rem;
    margin-top: 0.3rem;
    margin-left: 0.6rem;
    font-size: 0.34rem;
    font-weight: 900;
    color: #fff;
  }
  .ProductDemand{
    height: 0.34rem;
    margin-top: 0.3rem;
    margin-right: 1.5rem;
    font-size: 0.3rem;
    color: #070707;
  }
  .PriceDemand{
    height: 0.34rem;
    margin-top: 0.6rem;
    margin-left: 0.1rem;
    font-size: 0.24rem;
    color: #fff;
  }
  .PeriodOfValidity{
    height: 0.34rem;
    margin-top: 0.65rem;
    font-size: 0.24rem;
    color: #717577;
  }
  .ImmediatelyReceive{
    margin-top: 0.55rem;
    margin-right: 0.1rem;
    width: 1.54rem;
    height: 0.58rem;
    background-color: #fff;
    border:2px solid #f0f0f0;
  }
  .PopupDiscountsBottom{
    width: 7rem;
    height: 0.9rem;
    margin-left: 0.25rem;
    color: #fff;
    background-color: #c72f2e;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.34rem;
    font-weight: 800;
  }
</style>
