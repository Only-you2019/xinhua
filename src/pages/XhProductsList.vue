<template>
  <div class="XhProductsList">
<!--      首部-->
    <xh-productsList-top></xh-productsList-top>
<!--      综合-->
    <xh-productsList-dropdown :ListTwo="ListTwo" v-if="ListTwo" @xinPinApi="xinPinApi"></xh-productsList-dropdown>
<!--    仅看有货-->
    <xh-productsList-only @twoApi="twoApi" :ListTwo="ListTwo" v-if="ListTwo"></xh-productsList-only>
<!--    详情列表-->
    <gridproductsList-one  @jionCart="jionCart" v-show="!theme" :allProducts="allProducts" v-if="allProducts.length"></gridproductsList-one>
    <xh-droductsList-grid-two   v-show="theme" :allProducts="allProducts" v-if="allProducts.length"></xh-droductsList-grid-two>
<!--    <h2 v-if="!allProducts.length" style="position: fixed;top: 3rem;left: 2rem">亲没有数据,请重新筛选</h2>-->
    <van-loading v-if="!allProducts.length" size="54px" color="#C62F2E" style="position: fixed;top:50%;left:50%;margin-left: -0.88rem">加载中...</van-loading>
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
          theme:true,
          showing:true,
          allListData:{
            pageNo:0,//页码
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
          ListTwo:0,
          allProducts:[],
          detailData:[]
        }
      },
     created(){
       // this.dataLoading();
       fetch("http://localhost:3000/xinhua/api/theme").then(res => {
         res.json().then(data => {
           this.theme = data.theme[0].theme;
         });
       });
       // console.log(this.listSearch);
       this.loadingData();
      },
      mounted(){
        document.addEventListener("scroll",this.reqPages)
      },
      destroyed(){
        document.removeEventListener("scroll",this.reqPages)
      },
      methods: {
        loadingData(){
          this.allListData.frontCategoryId=this.$route.query.frontCategoryId;
          this.allListData.pageNo +=1
          api.get('/api/xinhua/search/list',this.allListData).then(data => {
            // 判断http请求状态码,200为请求成功
            if (data.status === 200) {
              // 判断接口请求是否成功 0为成功
              if (data.data.status === 0) {
                // 成功时接收数据
                // console.log(data.data.datas.attributes);
                this.ListTwo=data.data.datas.attributes
                //获取商品列表
                this.allProducts =this.allProducts.concat(data.data.datas.entities.data);
                // console.log(this.allProducts);
                for(var i=0;i<this.allProducts.length;i++){
                 this.detailData.push({
                   itemId:this.allProducts[i].id,
                   title:this.allProducts[i].name,
                   lowPrice:this.allProducts[i].lowPrice,
                   img:this.allProducts[i].mainImage
                 })
                }
                console.log(this.detailData);

                this.$nextTick(()=>{
                  this.list_height =document.documentElement.scrollHeight
                  this.req=true
                  // console.log(this.allListData.pageNo,this.list_height,this.req);
                })
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
        xinPinApi(sort){
          this.allListData.sort=sort;
          // console.log(this.allListData.sort);
          api.get('/api/xinhua/search/list',this.allListData).then(data => {
            // 判断http请求状态码,200为请求成功
            if (data.status === 200) {
              // 判断接口请求是否成功 0为成功
              if (data.data.status === 0) {
                // 成功时接收数据
                // console.log(data.data.datas.entities.data);
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
        //多参数attributes请求
        twoApi(arr){
          this.allListData.attributes=arr.attributes
          this.allListData.inStock=arr.inStock
          api.get('/api/xinhua/search/list',this.allListData).then(data => {
            // 判断http请求状态码,200为请求成功
            if (data.status === 200) {
              // 判断接口请求是否成功 0为成功
              if (data.data.status === 0) {
                // 成功时接收数据
                console.log(data.data.datas.entities.data);
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
        // showCount(){
        //   this.showing = !this.showing;
        //   // console.log(this.showing);
        // },
        reqPages(){
          var oldHeight = document.documentElement.scrollHeight
          this.list_height =document.documentElement.scrollHeight
          this.list_top =document.documentElement.scrollTop
          this.list_clientHeight =document.documentElement.clientHeight
          // console.log(this.allListData.pageNo,this.list_height,this.req);
          // console.log(this.list_clientHeight)
          if(this.list_height - this.list_top - this.list_clientHeight <=50 && this.req){
            this.req=false
            this.loadingData()
            // console.log("已发送请求")

          }
        },
        //加入购物车
        jionCart(index){
          var _this=this;
            var extentData={
              price:_this.detailData[index].lowPrice,
              img:_this.detailData[index].img,
              value:1,
              checked:true
            };
            api.post("/api/xinhua/shopcar/add",{
              goodsId:parseInt(_this.detailData[index].itemId),
              name:_this.detailData[index].title,
              extension:JSON.stringify(extentData)
            }).then(data=>{
              // 判断http请求状态码,200为请求成功
              if(data.status===200){
                // 判断接口请求是否成功 0为成功
                if(data.data.status===0){
                  this.product=data.data.datas;
                  console.log(data.data.err);
                  // 成功时接收数据
                }else{
                  // 失败时打印错误信息
                  console.log(data.data.err)
                }
              }
            }).catch(err=>{
              // 请求错误返回错误信息
              console.log(err)
            })

        },



      },
      components:{
        'gridproductsList-one':gridproductsList,
        'xh-droductsList-grid-two':XhDroductsListGridTwo,
        'xh-productsList-top':XhProductsListtop,
        'xh-productsList-dropdown':XhProductsListdropdown,
        'xh-productsList-only':XhProductsListonly,
      }
    }
</script>

<style>
  /*@import "../assets/css/XhProductsList.css";*/
  /*@import "../assets/css/XhStyleOne.css";*/
</style>
