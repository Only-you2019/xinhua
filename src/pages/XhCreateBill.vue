<template>
  <div class="XhCreateBill-cs">
    <div class="header-cs">
      <span class="iconfont icon-fanhui" @click="$router.back()"></span>
      <span class="set-cs">新建发票</span>
    </div>
    <div class="check-cs">
      <van-tabs type="card">
        <van-tab title="普通发票">
          <div class="bill-up">
            <p class="bill-head">发票抬头</p>
            <div class="bill-box">
              <van-radio-group v-model="radio" class="per-check">
                <van-radio name="1" checked-color="red" class="per" @click="flag=1">个人</van-radio>
                <van-radio name="2" checked-color="red" @click="flag=2">公司</van-radio>
              </van-radio-group>
              <div class="company-cs" v-show="flag==2">
                <input type="text" placeholder="公司抬头">
                <input type="text" placeholder="纳税人识别码">
              </div>
            </div>
          </div>
          <button class="save-bill">保存发票信息</button>
        </van-tab>
        <van-tab title="增值税专用发票">
          <div class="vat-cs">
            <span>发票信息</span>
            <div class="main-list">
              <input type="text" placeholder="单位名称">
              <input type="text" placeholder="纳税人识别码">
              <input type="text" placeholder="注册地址">
              <input type="text" placeholder="注册电话">
              <input type="text" placeholder="开户银行">
              <input type="text" placeholder="开户账号">
            </div>
          </div>
          <button class="next-step">下一步</button>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "XhCreateBill",
    data() {
      return {
        radio: '1',
        flag: 1
      }
    }
  }
</script>

<style scoped>
  /*@import '../assets/css/XhStyleOne.css';*/

  .XhCreateBill-cs {
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }

  .XhCreateBill-cs .header-cs {
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }

  .XhCreateBill-cs .header-cs .icon-fanhui {
    float: left;
    color: red;
  }

  .XhCreateBill-cs .header-cs .set-cs {
    margin-right: 0.16rem;

  }

  .XhCreateBill-cs .check-cs {
    margin-top: 0.3rem;
  }

  .XhCreateBill-cs .check-cs .bill-head {
    text-align: left;
    margin-bottom: 0.2rem;
    color: #cccccc;
    font-size: 14px;
  }

  .XhCreateBill-cs .check-cs .per-check {
    display: flex;

  }

  .XhCreateBill-cs .check-cs .bill-up {
    margin-top: 0.3rem;
    background-color: white;
    padding: 0.2rem 0.2rem 0 0.2rem
  }

  .XhCreateBill-cs .check-cs .per {
    margin-right: 0.3rem;
  }

  .XhCreateBill-cs .check-cs .save-bill {
    width: 100%;
    background-color: #c72f2e;
    border: none;
    height: 0.8rem;
    color: white;
    margin-top: 0.5rem;
  }

  .XhCreateBill-cs .check-cs .company-cs input {
    border: none;
    background-color: white;
    width: 100%;
    height: 1.4rem;
    padding: 0.06rem;
  }

  .XhCreateBill-cs .check-cs .company-cs input:first-child {
    border-bottom: 1px solid #cccccc;
  }

  .XhCreateBill-cs .check-cs .vat-cs {
    text-align: left;
  }

  .XhCreateBill-cs .check-cs .vat-cs span {
    color: #9d9d9d;
    font-size: 14px;
    margin: 0.3rem 0;
    display: block;
  }

  .XhCreateBill-cs .check-cs .vat-cs .main-list {
    background-color: white;
    padding: 0 0.2rem 0 0.2rem;
  }

  .XhCreateBill-cs .check-cs .vat-cs .main-list input {
    width: 100%;
    height: 1.3rem;
    border: none;
    border-bottom: 1px solid #cccccc;
    padding-left: 0.3rem;
  }

  .XhCreateBill-cs .check-cs .vat-cs .main-list input:last-child {
    border: none
  }

  .XhCreateBill-cs .check-cs .next-step {
    width: 100%;
    height: 0.8rem;
    background-color: #c72f2e;
    color: white;
    border: none;
    margin-top: 0.6rem;
  }
</style>
