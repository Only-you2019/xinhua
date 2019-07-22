<template>
    <div class="xinhua-header" id="headerBox">
      <header>
        <div class="header-title flex">
<!--          <i class="iconfont icon-saoyisao"></i>-->
          <img src="../../../static/images/logo.png" alt="">
          <router-link to="/XhMessage">
<!--            <i class="iconfont icon-tushuguan"></i>-->
          </router-link>
        </div>
        <router-link class="search-box" to="/XhSearch">
          <img src="../../../static/images/logo.png" alt="">
          <div class="header-search abs">
            <span class="abs">{{defaultKey}}</span>
            <i class="iconfont icon-sousuo abs" ></i>
          </div>
        </router-link>

      </header>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
      name: "XhHeader",
      props:["defaultKey"],
    }
</script>

<style scoped>
   /*@import "../../assets/css/index.css"; */

</style>
