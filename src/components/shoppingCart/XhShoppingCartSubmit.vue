<template>
      <div class="XhShoppingCartSubmit">
        <van-checkbox v-model="product.checked" class="AllChecked" checked-color="#c72f2e" @click="allChecke">全选</van-checkbox>
        <span class="AllPrice">合计：</span>
        <span class="PriceNumber"><span>￥</span>{{allPrice}}</span>
        <button class="SubmitPrice" @click="submitall">{{"去结算("+allNumber+")"}}</button>
      </div>
</template>

<script>
    export default {
        name: "XhShoppingCartSubmit",
        props:["product","allPrice","allNumber"],
        methods:{
          allChecke(){
            this.$emit("allChecked");
          },
          submitall(){
            this.$emit("allsubmit");
          }
        }
    }
</script>

<style scoped>
  .XhShoppingCartSubmit{
    height: 1rem;
  }
  .AllChecked{
    float: left;
    margin-top: 0.34rem;
    margin-left: 0.3rem;
  }
  .AllPrice{
    float: left;
    margin-top: 0.36rem;
    margin-left: 1.4rem;
    font-size: 0.28rem;
    color:#696969;
  }
  .PriceNumber{
    float: left;
    margin-top: 0.36rem;
    font-size: 0.3rem;
    color:#c72725;
  }
  .SubmitPrice{
    float: right;
    width: 2.1rem;
    height: 0.88rem;
    margin-top: 0.08rem;
    margin-right: 0.1rem;
    font-size: 0.34rem;
    color:#ffffff;
    text-align: center;
    line-height: 0.88rem;
    border: none;
    background-color: #c72f2e;
  }
</style>
