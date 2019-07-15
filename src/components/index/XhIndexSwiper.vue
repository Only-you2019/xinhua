<template>
  <section class="index-banner">
    <div class="swiper-container swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in indexSwiper" :key="index">
          <router-link to="/XhBannerPages">
            <img :src=item.url alt="图片加载失败">
          </router-link>
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination swiper-pagination1"></div>
    </div>
  </section>
</template>

<script>
    import Swiper from 'swiper/dist/js/swiper'
    export default {
      name: "XhIndexSwiper",
      props:['indexSwiper'],
      mounted() {
        //轮播图
        // this._initSwiper();
      },
      updated(){
        //在获取完数据后，将swiper放在$nextTick下一个UI帧再初始化。
        this.$nextTick(() => { // 下一个UI帧再初始化swiper
          this._initSwiper();
        });
      },
      methods:{
        _initSwiper(){
          // banner部分的轮播图
          new Swiper(".swiper-container1", {
            direction: "horizontal",//水平
            loop:true, //循环
            //自动播放
            autoplay:{
              disableOnInteraction: false,//自动播放不会被滑动停止true
              delay:2000
            },
            observer:true , //动态获取资源时，需要加上这一句
            observeParents:true,
            // 分页器
            pagination: {
              el: ".swiper-pagination1",
              // bulletClass: "my-bullet",
              // bulletActiveClass: "my-bullet-active"
            },
          });
        }

      }
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
