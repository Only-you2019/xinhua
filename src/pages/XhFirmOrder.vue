<template>
  <div class="XhFirmOrder">
    <!-- Header components中 index 复用 -->
    <Xh-nav-pages-header :title="title"></Xh-nav-pages-header>
    <Xh-firm-order-address></Xh-firm-order-address>
    <Xh-firm-order-commodity :product="product"></Xh-firm-order-commodity>
    <Xh-firm-order-freight :left="freight.left" :right="freight.right"></Xh-firm-order-freight>
    <Xh-firm-order-freight :left="discounts.left" :right="discounts.right"></Xh-firm-order-freight>
    <router-link to="/XhGiftCards"><Xh-firm-order-freight :left="gift.left" :right="gift.right"></Xh-firm-order-freight></router-link>
    <Xh-firm-orderintegral></Xh-firm-orderintegral>
    <router-link to="/XhCreateBill"><Xh-firm-order-freight :left="bill.left" :right="bill.right"></Xh-firm-order-freight></router-link>
    <Xh-firm-order-settlement :allPrice="allPrice"></Xh-firm-order-settlement>
    <van-submit-bar :price="allPrice*100" button-text="提交订单" @submit="onSubmit"/>
  </div>
</template>

<script>
import XhNavPagesHeader from '../components/index/XhNavPagesHeader'
import XhFirmOrderAddress from '../components/shoppingCart/XhFirmOrderAddress'
import XhFirmOrderCommodity from '../components/shoppingCart/XhFirmOrderCommodity'
import XhFirmOrderFreight from '../components/shoppingCart/XhFirmOrderFreight'
import XhFirmOrderintegral from '../components/shoppingCart/XhFirmOrderintegral'
import XhFirmOrderSettlement from '../components/shoppingCart/XhFirmOrderSettlement'

  export default {
    name: "XhFirmOrder",
    data(){
      return{
        title:"确认订单",
        freight:{
          left:"运费",
          right:"快递免邮"
        },
        discounts:{
          left:"优惠卷",
          right:"无"
        },
        gift:{
          left:"礼品卡",
          right:"抵用0元"
        },
        bill:{
          left:"开具发票",
          right:"不开发票"
        },
        product:"",
        allNumber:"",
        allPrice:"",
      }
    },
    created(){
      this.dataLoading()
    },
    methods:{
      dataLoading(){
        this.product=JSON.parse(this.$route.query.product);
        this.allNumber=this.$route.query.allNumber;
        this.allPrice=parseFloat(this.$route.query.allPrice);
        console.log(this.allPrice);
      },
      onSubmit(){
        this.$router.push({
          path: '/XhCashierDesk',
          query: {
            allPrice:this.allPrice,
          }
        })
        console.log(this.allPrice);
      }
    },
    components: {
      XhNavPagesHeader,
      XhFirmOrderAddress,
      XhFirmOrderCommodity,
      XhFirmOrderFreight,
      XhFirmOrderintegral,
      XhFirmOrderSettlement
    }
  }
</script>

<style scoped>
  .XhFirmOrder {
    background-color: #f1f1f1;
  }
</style>
