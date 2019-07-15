<template>
<!--  轮播图-->
    <div>
      <div class="swipeXhProductDetailtop"  v-for="item in RotaryPlantingMap">
        <van-swipe :autoplay="3000" indicator-color=" #c62f2e" class="aXhProductsList"   >
          <van-swipe-item> <img :src="item.imgs" alt="" class="aXhProductsList"   > </van-swipe-item>
          <van-swipe-item><img :src="item.imgs2" alt=""></van-swipe-item>
          <van-swipe-item><img :src="item.imgs2" alt=""></van-swipe-item>
          <van-swipe-item><img :src="item.imgs2" alt=""></van-swipe-item>
        </van-swipe>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhProductDetailtopswipe",
      data(){
        return{
          RotaryPlantingMap:[
            {
              imgs:'https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_750,h_750',
              imgs2:'https://img5.xinhuashudian.com/images/4520633-jctp.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_750,h_750',
              imgs:'https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_750,h_750',
              imgs:'https://img2.xinhuashudian.com/images/4520633-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_750,h_750'
            },
          ],
          active: 0,
          show: false
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  @import "../../assets/css/XhProductDetail.css";


</style>
