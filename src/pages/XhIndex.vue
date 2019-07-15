<template>
    <div class="index-content pageBody">
      <!--头部-->
      <xh-header :defaultKey="defaultKey"></xh-header>
      <!--中间内容-->
      <main class="index-main">
        <!--下拉刷新-->
        <van-pull-refresh @refresh="onRefresh" v-model="isLoading">
          <!--轮播图-->
          <xh-index-swiper :indexSwiper="indexSwipers"></xh-index-swiper>
          <!--导航-->
          <div class="index-nav">
            <ul class="flex">
              <li :key="index" v-for="(item,index) in indexNav">
              <xh-index-nav :item="item"></xh-index-nav>
            </li>
            </ul>
          </div>
          <!--主题-->
          <xh-index-theme :themeData="indexTheme"></xh-index-theme>
          <!--主要列表-->
          <xh-index-list :listData="indexListTheme"></xh-index-list>
          <!--新华优选-->
          <!--banner图-->
          <div class="xh-banner">
            <a href="">
              <img :src="indexBanner" alt="">
            </a>
          </div>
          <!--新华优选内容-->
          <div class="xh-select">
            <xh-index-list :listData="indexSelect_cs"></xh-index-list>
          </div>
          <!--作者轮播图-->
          <div class="author-banner">
            <xh-index-swiper :indexSwiper="indexAuthor_cs"></xh-index-swiper>
          </div>
          <!--图书分类-->
          <div class="book-classify">
            <xh-index-list :listData="indexBookList_cs"></xh-index-list>
          </div>
        </van-pull-refresh>
      </main>

      <!--底部-->
      <xh-footer></xh-footer>
    </div>
</template>

<script>
  import api from '../XinHuaApi'
  import XhHeader from '../components/commons/XhHeader'
  import XhFooter from '../components/commons/XhFooter'
  import XhIndexSwiper from '../components/index/XhIndexSwiper'
  import XhIndexNav from '../components/index/XhIndexNav'
  import XhIndexTheme from '../components/index/XhIndexTheme'
  import XhIndexList from '../components/index/XhIndexList'

    export default {
      name: "XhIndex",
      components:{
        XhHeader,
        XhFooter,
        XhIndexSwiper,
        XhIndexNav,
        XhIndexTheme,
        XhIndexList,

      },
      data(){
        return{
          isLoading: false,
          indexData:[],
          indexSwipers:[],
          indexNav:[],
          indexTheme:[],
          indexBanner:[],
          indexListTheme:[],
          defaultKey:"",
          indexSelect_cs:[],
          indexAuthor_cs:[],
          indexBookList_cs:[]
        }
      },
      created(){
        this.loadingIndexData();
        this.SearchBefore();
      },
      methods:{
     loadingIndexData(){
         api.get('/api/xinhua/index').then(data => {
            // 判断http请求状态码,200为请求成功
            if (data.status === 200) {
              // 判断接口请求是否成功 0为成功
              if (data.data.status === 0) {
                // 成功时接收首页的数据
               this.indexData=JSON.parse(data.data.datas.designData.body);
                //获取首页列表数据
                var index_list=['body_37','body_38','body_34','body_35','body_36','body_33'];
                for(let i=0;i<index_list.length;i++){
                  var index_obj={
                    "tlt":"",
                    "Tid":"",
                    "moreLink":"",
                    "indexListBrach":null
                  };
                  for(let j=0;j<this.indexData.length;j++){
                    if(index_list[i]==this.indexData[j].id){
                      index_obj.tlt=this.indexData[j].config.titleText
                      index_obj.Tid=this.indexData[j].id
                      index_obj.moreLink=this.indexData[j].config.moreLink
                      // console.log(index_obj);
                    }
                  }
                  let serviceData,listid;
                  listid=index_list[i]
                  serviceData=data.data.datas.serviceData[listid]._DATA_;
                  // console.log(serviceData);
                  var array=[];
                  for(let k=0;k<serviceData.length;k++){
                    if(serviceData[k].name && index_list[i]!="body_38"){
                      array.push({
                        "goodsId":serviceData[k].id,
                        "src":serviceData[k].mainImage,
                        "tltle":serviceData[k].name,
                        "price1":(serviceData[k].lowPrice/100*0.84).toFixed(2),
                      })
                    }else if(serviceData[k].name && index_list[i]=="body_38"){
                      array.push({
                        "goodsId":serviceData[k].id,
                        "src":serviceData[k].mainImage,
                        "tltle":serviceData[k].name,
                        "price1":(serviceData[k].lowPrice/100*0.84).toFixed(2),
                        "price2":(serviceData[k].highPrice/100).toFixed(2)
                      })
                    }else{
                      array.push({
                        "goodsId":serviceData[k].itemId,
                        "src":serviceData[k].mainImage,
                        "tltle":serviceData[k].itemName,
                        "price1":(serviceData[k].lowPrice/100*0.84).toFixed(2),
                      })
                    }
                    index_obj["indexListBrach"]=array
                  }
                  this.indexListTheme.push(index_obj)
                  console.log(this.indexListTheme);
                };
                //轮播图
                this.indexSwipers=this.indexData[6].config.carousel.carouselItems
                // console.log(this.indexSwipers);
               //导航
                let index_nav=[]
                index_nav=this.indexData[5].config.leads
                // console.log(index_nav);
                for(var i=0;i<index_nav.length;i++){
                  index_nav[i].path=i==4?'/XhMine':'/XhNavPages';
                }
                this.indexNav=index_nav;
                // console.log(this.indexNav);
                //主题
                this.indexTheme=this.indexData[3].config.data.children
                // console.log(this.indexTheme);

                //新华优选banner图
                this.indexBanner=this.indexData[19].config.image.src
                // console.log(this.indexBanner);

                // <!--新华优选内容--> 6个
                var all_objs=data.data.datas.serviceData
                var body_arrs =JSON.parse(data.data.datas.designData.body)
                var xinHuDingZhi =["body_21","body_27","body_22","body_28","body_23","body_29","body_24","body_30","body_26","body_32","body_25","body_31"]
                // console.log(all_objs)
                // console.log(body_arrs)
                var pic1=""
                xinHuDingZhi.forEach((item,index)=>{
                  var indexSelect_cs_per =  {
                    pic:"",
                    indexListBrach:[]
                  }
                  if(index%2==0 ||index==0){
                    body_arrs.some(i=>{
                      if(item==i.id){
                        pic1 = i.config.image.src
                        return true
                      }
                    })
                  }else {
                    all_objs[item]._DATA_.forEach(a=>{
                      indexSelect_cs_per.indexListBrach.push({
                        "src":a.mainImage,
                        "tltle":a.name,
                        "price1":(a.lowPrice/100*0.75).toFixed(2),
                        "price2":(a.highPrice/100).toFixed(2)
                      })
                    })
                    indexSelect_cs_per.pic=pic1
                    this.indexSelect_cs.push(indexSelect_cs_per)
                  }
                })
                //作者轮播图
                body_arrs.some(item=>{
                  if(item.id=="body_11"){
                    this.indexAuthor_cs=item.config.carousel.carouselItems
                    return true
                  }
                })
                // <!--图书分类-->
                var indexBookList_arrs = ["body_2","body_15","body_5","body_12","body_3","body_14","body_18","body_17","body_8","body_9","body_13","body_10","body_19","body_16"]
                var pic2=""
                indexBookList_arrs.forEach((item,index)=>{
                  var indexBookList_cs_per =  {
                    pic:"",
                    indexListBrach:[]
                  }
                  if(index%2==0 ||index==0){
                    body_arrs.some(i=>{
                      if(item==i.id){
                        pic2 = i.config.image.src
                        return true
                      }
                    })
                  }else {
                    all_objs[item]._DATA_.forEach(a=>{
                      indexBookList_cs_per.indexListBrach.push({
                        "src":a.mainImage,
                        "tltle":item=="body_15"?a.itemName:a.name,
                        "price1":(a.lowPrice/100).toFixed(2),
                        // "price2":a.highPrice
                      })
                      // this.indexSelect_cs.push(indexSelect_cs_per)
                    })
                    indexBookList_cs_per.pic=pic2
                    this.indexBookList_cs.push(indexBookList_cs_per)
                  }
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
        onRefresh() {
          console.log(1);
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        },
        SearchBefore(){
          api.get('/api/xinhua/search/find/words').then(data=>{
            // 判断http请求状态码,200为请求成功
            if(data.status===200){
              // 判断接口请求是否成功 0为成功
              if(data.data.status===0){
                // 成功时接收数据
                this.defaultKey=data.data.datas.defaultWord
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

      }
    }
</script>

<style scoped>
  @import "../assets/css/index.css";

</style>
