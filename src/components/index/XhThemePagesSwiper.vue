<template>
    <div class="XhThemePagesSwiper">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://ws1.sinaimg.cn/large/005S8gRNly1g50nh4j5ycj30ku08c424.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://ws1.sinaimg.cn/large/005S8gRNly1g50nh4c73rj30ku08cq6e.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://ws1.sinaimg.cn/large/005S8gRNly1g50nh4jkmcj30ku08cmzc.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://ws1.sinaimg.cn/large/005S8gRNly1g50nh4ektkj30ku08cgoa.jpg">
          </swiper-slide>
          <swiper-slide>
            <img class="XhThemePagesSwiper-img" src="https://ws1.sinaimg.cn/large/005S8gRNly1g50nh584kqj30ku08c77j.jpg">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhThemePagesSwiper",
        data () {
          return{
            swiperOption:{
              pagination: '.swiper-pagination',
              autoplay: true,
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
              },
            }
          }
        }
    }
</script>

<style>
  .wrapper {
    overflow: hidden;
    width: 100%;
  }
  .XhThemePagesSwiper-img {
    width: 100%;
  }
</style>
