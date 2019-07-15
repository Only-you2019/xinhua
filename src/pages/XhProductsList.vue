<template>
  <div class="XhProductsList">
<!--      首部-->
    <XhProductsList-top @showCountaa="showCount"></XhProductsList-top>
<!--      综合-->
    <XhProductsList-dropdown :ListTwo="ListTwo" v-if="ListTwo.length"></XhProductsList-dropdown>
<!--    仅看有货-->
    <XhProductsList-only :ListTwo="ListTwo" v-if="ListTwo.length"></XhProductsList-only>
<!--    详情列表-->
    <gridproductsList-one v-show="!showing"  ></gridproductsList-one>
    <XhDroductsList-Grid-Two   v-show="showing" :allProducts="allProducts"></XhDroductsList-Grid-Two>

  </div>

</template>

<script>
  //引入api
  import api from '.././XinHuaApi'

  import gridproductsList from '../components/productsList/XhProductsListgrid'
  import XhDroductsListGridTwo from '../components/productsList/XhDroductsListGridTwo'
  import XhProductsListtop from '../components/productsList/XhProductsListtop'
  import XhProductsListdropdown from '../components/productsList/XhProductsListdropdown'
  import XhProductsListonly from '../components/productsList/XhProductsListonly'
    export default {
        name: "XhProductsList",
      data() {
        return {
          showing:true,
          allListData:{
            pageNo:1,//页码
            pageSize:20,//每页数量
            keyword:"",//搜索关键字
            lowPrice:"",//条件筛选最低价，保留两位小数
            highPrice:"",//最高价
            sort:"",//排序，详情请见下表
            tenantId:"",//租户id
            brandIds:"",//品牌ID，多个以逗号隔开
            regionIds:"",//区域id，多个以逗号隔开
            backCategoryIds:"",//
            frontCategoryId:"",//首页类别id
            shopId:"",//店铺id
            shopCategoryId:"",//
            attributes:"",//出版时间
            ids:"",//
            types:"",//
            itemCode:"",//
            inStock:0//是否有货：1为查有货商品,0为全部
          },
          ListTwo:[],
          allProducts:[]
        }
      },
     created(){
        // console.log(this.listSearch);
        this.loadingData()
      },
      methods: {
          loadingData(){
            this.allListData.frontCategoryId=this.$route.query.frontCategoryId
            api.get('/api/xinhua/search/list',this.allListData).then(data => {
              // 判断http请求状态码,200为请求成功
              if (data.status === 200) {
                // 判断接口请求是否成功 0为成功
                if (data.data.status === 0) {
                  // 成功时接收数据
                  console.log(data.data.datas);
                  this.ListTwo=data.data.datas.attributes
                  //获取商品列表
                  this.allProducts=data.data.datas.entities.data
                } else {
                  // 失败时打印错误信息
                  console.log(data.data.err);
                }
              }
            }).catch(err => {
              // 请求错误返回错误信息
              console.log(err);
            });
          },
          searchlist(){
            this.listSearch=listSearch
          },
        showCount(){
          this.showing = !this.showing;
          // console.log(this.showing);
        },
      },
      components:{
        'gridproductsList-one':gridproductsList,
        'XhDroductsList-Grid-Two':XhDroductsListGridTwo,
        'XhProductsList-top':XhProductsListtop,
        'XhProductsList-dropdown':XhProductsListdropdown,
        'XhProductsList-only':XhProductsListonly,
      }
    }
</script>

<style scoped>
  @import "../assets/css/XhProductsList.css";

</style>
