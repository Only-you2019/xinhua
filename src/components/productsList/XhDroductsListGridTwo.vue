<template>
<!--  四页列表-->
    <div>
      <div class="gridProductsList"  >
        <div class="gridProductsListbox">
            <div id="fourgridProductsListbox">
              <van-grid :border="false" :column-num="2"  :center="false" :gutter="10" class="fourgridProductsListbox" >
                <van-grid-item class="grid_box" v-for="(i,index) in allProducts" :key="index" @click="$router.push({name:'XhProductDetail',params:{goodsId:i.id}})">
                  <div >
                    <van-image class="gridProductsListboximg" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(i.mainImage)" />
                  </div>
                  <span class="towwenXhProductsList">{{i.name}}</span>
                  <p class="gridssXhProductsList"  >{{i.author}}</p>
                  <p class="gridssbbXhProductsList"  >￥{{(i.lowPrice/100).toFixed(2)}}</p>
                </van-grid-item>
              </van-grid>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhDroductsListGridTwo",
      props:["allProducts"],
      methods:{
        urlEncode(str){
          if(str.indexOf("https:")==-1){
            str="https:"+str
            return encodeURI(str)
          }else{
            return encodeURI(str)
          }
          // return encodeURI(str)
        }
      }

    }
</script>

<style>
  /*@import "../../assets/css/XhProductsList.css";*/
  /*@import "../../assets/css/XhStyleOne.css";*/

</style>
