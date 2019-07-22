<template>
<!--  首部-->
    <div >
      <div class="XhProductDetailtop">
        <i @click="$router.back()">
          <van-icon name="arrow-left" class="topiconXhProductDetail"/>
        </i>
        <span ref="shop">商品</span>
        <span ref="xiang" >详情</span>
        <router-link :to="path+'/'+itemId">
          评价
        </router-link>
        <van-icon name="ellipsis" @click="showCount" class="topiconXhProductDetail"/>
      </div>
      <!--弹出消息首页搜索-->
      <div class="bigboxXhProductDetail" v-if="shows">
        <router-link to="/XhMessage">
          <p>消息</p>
        </router-link>
        <router-link to="/">
          <p>首页</p>
        </router-link>
        <router-link to="/XhSearch">
          <p>搜索</p>
        </router-link>
        <router-link to="/XhCollection">
          <p>我的收藏</p>
        </router-link>
        <router-link to="/History">
          <p>浏览记录</p>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
      name: "XhProductDetailtop",
      props:["itemId"],
      mounted () {
        window.addEventListener('scroll', this.handleScroll,true)
      },
      data(){
          return{
            shows:false,
            path:"/XhMyEvaluation"
          }
      },
      methods:{
        showCount() {
          this.shows = !this.shows;
        },
        handleScroll () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          // console.log(scrollTop)
          if (scrollTop >600) {
            this.$refs.xiang.style.borderBottomColor = "#c62f2e"
            this.$refs.shop.style.borderBottomColor = "#F7F7F7"
          } else {
            this.$refs.shop.style.borderBottomColor = "#c62f2e"
            this.$refs.xiang.style.borderBottomColor = "#F7F7F7"
          }
        },
      }
    }
</script>

<style scoped>
@import "../../assets/css/XhProductDetail.css";
/*@import "../../assets/css/XhStyleOne.css";*/
</style>
