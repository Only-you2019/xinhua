<template>
  <div class="XhBillManagement-cs">
    <div class="header-cs">
      <span class="iconfont icon-fanhui" @click="$router.back()"></span>
      <span class="set-cs">发票信息</span>
    </div>
    <div class="main-cs">
      <img src="../../static/cs/发票.png">
      <p>暂无发票信息</p>
      <button @click="$router.push('/XhCreateBill')">新建发票</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "XhBillManagement"
  }
</script>

<style scoped>
  /*@import '../assets/css/XhStyleOne.css';*/

  .XhBillManagement-cs {
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }

  .XhBillManagement-cs .header-cs {
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }

  .XhBillManagement-cs .header-cs .icon-fanhui {
    float: left;
    color: red;
  }

  .XhBillManagement-cs .header-cs .set-cs {
    margin-right: 0.16rem;

  }

  .XhBillManagement-cs .main-cs {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.92rem;
  }

  .XhBillManagement-cs .main-cs img {
    width: 2.8rem;
    height: 2.84rem;
  }

  .XhBillManagement-cs .main-cs p {
    margin: 0.76rem 0 0.54rem 0;
    color: #9a9a9a;
  }

  .XhBillManagement-cs .main-cs button {
    width: 3.18rem;
    height: 0.9rem;
    border: none;
    background-color: #c72f2e;
    color: white;
  }
</style>
