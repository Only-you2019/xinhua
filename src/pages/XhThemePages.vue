<template>
    <div>
        <!-- Header -->
        <Xh-nav-pages-header :title="title"></Xh-nav-pages-header>
        <div class="XhThemePages-main">
            <!-- 单张图片 -->
            <Xh-theme-pages-img></Xh-theme-pages-img>
            <!-- 轮播图 -->
            <Xh-theme-pages-swiper></Xh-theme-pages-swiper>
            <!-- icon小图标 -->
            <Xh-theme-pages-icon></Xh-theme-pages-icon>
            <!-- 单张图片 -->
            <Xh-theme-pages-img></Xh-theme-pages-img>
            <!-- 超值套餐组件 -->
            <Xh-theme-pages-set-meal></Xh-theme-pages-set-meal>
            <!-- 启蒙益智 -->
            <Xh-theme-pages-initiation></Xh-theme-pages-initiation>
        </div>
    </div>
</template>

<script>
// 引入组件
import XhNavPagesHeader from '../components/index/XhNavPagesHeader';
import XhThemePagesSwiper from '../components/index/XhThemePagesSwiper';
import XhThemePagesImg from '../components/index/XhThemePagesImg';
import XhThemePagesIcon from '../components/index/XhThemePagesIcon';
import XhThemePagesSetMeal from '../components/index/XhThemePagesSetMeal';
import XhThemePagesInitiation from '../components/index/XhThemePagesInitiation';
    export default {
        name: "XhThemePages",
        // 注册组件
        components: {
            XhNavPagesHeader,
            XhThemePagesSwiper,
            XhThemePagesImg,
            XhThemePagesIcon,
            XhThemePagesSetMeal,
            XhThemePagesInitiation
        },
        data() {
          return{
            title:"少儿童书"
          }
        }

    }
</script>

<style scoped>
    .XhThemePages-main{
        margin-top: .86rem;
        background: #f7f7f7;
    }
</style>
