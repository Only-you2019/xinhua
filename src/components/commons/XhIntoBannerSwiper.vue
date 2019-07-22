<template>
  <div>
    <div class="title-wrap">
      <img class="popular-titlePic" :src="item.titlePic" alt />
    </div>
    <div class="swiper-container" id="intoBannerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(v,vId) in item.swiperSlide" :key="vId">
          <div class="itemList" v-for="(l,lId) in v.itemList" :key="lId">
            <router-link :to="path +'/'+l.goodsId">
              <div class="item-wrap">
                <img class="book-pic" :src="l.img" alt />
                <span class="smallItem-name">{{l.name}}</span>
                <span class="book-price">{{l.price}}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" id="intoBanner-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "XhIntoBannerSwiper",
  props: ["item"],
  data(){
    return{
      path:"/XhProductDetail"
    }
  },
  mounted() {
    //在获取完数据后，将swiper放在$nextTick下一个UI帧再初始化。
    this.$nextTick(() => {
      // 下一个UI帧再初始化swiper
      this._initSwiper();
    });
  },
  methods: {
    _initSwiper() {
      // banner部分的轮播图
      new Swiper(".swiper-container", {
        direction: "horizontal", //水平
        loop: true, //循环
        observer: true, //动态获取资源时，需要加上这一句
        // observeParents: true,
        // autoplay: {
        //   disableOnInteraction: false
        // },
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        }
      });
    }
  }
};
</script>

<style>
@import "../../assets/css/XhBannerPages.css";
</style>
