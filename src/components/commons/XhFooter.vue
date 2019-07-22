<template>
    <footer class="footer-box">
      <ul class="flex">
        <li v-for="(item,index) in footerNav" :key="index">
          <router-link :to="item.path">
            <i :class="item.icon" :style="{color:($route.path==item.path?'rgb(198, 47, 46)':'rgb(153, 153, 153)')}"></i>
            <p :style="{color:($route.path==item.path?'rgb(198, 47, 46)':'rgb(153, 153, 153)')}">{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </footer>
</template>

<script>
    export default {
      name: "XhFooter",
      data(){
         return{
           footerNav:[
             {
               path:"/",
               icon:"iconfont icon-shouye",
               title:"首页"},
             {
               path:"/XhClassify",
               icon:"iconfont icon-fenlei",
               title:"分类"
             },
             {
               path:"/XhShoppingCart",
               icon:"iconfont icon-gouwuchekong",
               title:"购物车"
             },
             {
               path:"/XhMine",
               icon:"iconfont icon-yuanquanquan",
               title:"我"
             }
           ]
         }
      }
    }
</script>

<style>
  /*@import "../../assets/css/XhStyleOne.css";*/
</style>
