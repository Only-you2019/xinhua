<template>
      <div class="XhShoppingCartDelete">
        <van-checkbox v-model="checked" class="AllChecked" checked-color="#c72f2e">全选</van-checkbox>
        <button class="SubmitCollect">移入收藏夹</button>
        <button class="SubmitDelete">删除</button>
      </div>
</template>

<script>
    export default {
        name: "XhShoppingCartDelete",
        data(){
          return{
            checked:true
          }
        }
    }
</script>

<style scoped>
  .XhShoppingCartDelete{
    height: 1rem;
  }
  .AllChecked{
    float: left;
    margin-top: 0.34rem;
    margin-left: 0.3rem;
  }
  .SubmitCollect{
    float: left;
    width: 2.1rem;
    height: 0.88rem;
    margin-top: 0.08rem;
    margin-left: 1.5rem;
    font-size: 0.34rem;
    color:#000;
    text-align: center;
    line-height: 0.88rem;
    border:1px solid #dddddd;
    background-color: #ffffff;
  }
  .SubmitDelete{
    float: left;
    width: 2.1rem;
    height: 0.88rem;
    margin-top: 0.08rem;
    margin-left: 0.26rem;
    font-size: 0.34rem;
    color:#000;
    text-align: center;
    line-height: 0.88rem;
    border:1px solid #dddddd;
    background-color: #ffffff;
  }
</style>
