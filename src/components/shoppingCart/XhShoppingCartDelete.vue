<template>
      <div class="XhShoppingCartDelete">
        <van-checkbox v-model="product.checked" class="AllChecked" checked-color="#c72f2e" @click="allChecke">全选</van-checkbox>
        <button class="SubmitCollect" @click="collectchecked">移入收藏夹</button>
        <div class="SubmitDelete" @click="deletechecked" >删除</div>
      </div>
</template>

<script>
    export default {
        name: "XhShoppingCartDelete",
        props:["product"],
        methods:{
          allChecke(){
            this.$emit("allChecked");
          },
          deletechecked(){
            this.$emit("allDelete");
          },
          collectchecked(){
            this.$emit("allcollect");
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
