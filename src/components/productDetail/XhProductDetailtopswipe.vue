<template>
<!--  轮播图-->
    <div>
      <div class="swipeXhProductDetailtop">
        <van-swipe :autoplay="3000" indicator-color=" #c62f2e" class="aXhProductsList" >
          <van-swipe-item class="xh-detail-swiper" v-for="(item,index) in RotaryPlantingMap" :key="index">
            <img :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(item.url)" alt="" class="aXhProductsList">
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
</template>

<script>
    export default {
      name: "XhProductDetailtopswipe",
      props:["RotaryPlantingMap"],
      data(){
        return{
          active: 0,
          show: false
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
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/css/XhProductDetail.css";
  /*@import "../../assets/css/XhStyleOne.css";*/

</style>
