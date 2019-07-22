<template>
<!--  两页列表-->
    <div class="ttttwostwopri_boxsonlyProductsList"  >
          <div class="twostwopri_boxsonlyProductsList">
            <div class="twopri_boxsonlyProductsList">
              <div class="parentlistProductsList" v-for="(i,index) in allProducts" :key="index" >
               <div class="gridproductsListsmall" @click="$router.push({name:'XhProductDetail',params:{goodsId:i.id}})">
                 <div class="pri_boxsonlyProductsList">
                   <img  class="gridproductsListsmallimg" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(i.mainImage)" alt="">
                 </div>
                 <div class="gridsmall_box">
                   <p class="aaXhProductsList"  >{{i.name}}</p>
                   <span class="bbXhProductsList" >{{i.author}}</span>
                   <p class="ccXhProductsList"  >￥{{(i.lowPrice/100).toFixed(2)}}</p>
                 </div>
               </div>
                <div class="likeccXhProductsList">
                  <div  @click="jionCart(index)">
                    <van-icon name="shopping-cart-o" color="#c62f2e"/>
                  </div>
                </div> 
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
      name: "XhProductsListgrid",
      props:["allProducts","itemId"],
      data(){
          return{
            num:null,
            flag:true
        }
      },
      methods:{
        showCount(index){
          this.num=index;
        },
        urlEncode(str){
          if(str.indexOf("https:")==-1){
            str="https:"+str
            return encodeURI(str)
          }else{
            return encodeURI(str)
          }
        },
        jionCart(index) {
          this.$toast('成功加入购物车');
          this.$emit("jionCart",index)
        }
      }
    }
</script>

<style>
  /*@import "../../assets/css/XhProductsList.css";*/

</style>
