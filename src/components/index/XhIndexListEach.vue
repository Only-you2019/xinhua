<template>
    <ul class="index-list-box flex">
      <li class="index-list-each"  v-for="(item,index) in each.indexListBrach" :key="index">
        <router-link :to="path+'/'+item.goodsId">
          <img :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(item.src)" alt="图片加载失败">
          <p>{{item.tltle}}</p>
          <span>￥{{item.price1}}</span>
          <s v-if="item.price2">￥{{item.price2}}</s>
        </router-link>
      </li>
    </ul>
</template>

<script>
    export default {
      props:["each"],
      name: "XhIndexListEach",
      data(){
        return{
          path:'/XhProductDetail',
        }
      },
      methods:{
        urlEncode(str){
          if(str.indexOf("https:")==-1){
            str="https:"+str
            return encodeURI(str)
          }else{
            return encodeURI(str)
          }
        },
      }
    }
</script>

<style>
  /*@import '../../assets/css/index.css';*/
</style>
