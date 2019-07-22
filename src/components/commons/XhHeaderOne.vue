<template>
    <div class="xinhua-header" id="xinhua-header">
      <header>
        <div class="header-title flex">
          <i class="iconfont icon-saoyisao" ></i>
          <img src="../../../static/images/logo.png" alt="">
          <router-link to="/XhMessage">
            <i class="iconfont icon-tushuguan"></i>
          </router-link>
        </div>
        <router-link class="search-box" to="/XhSearch">
          <div class="header-search rel" id="header-search">
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
      mounted(){
        window.addEventListener('scroll', this.changeHeader, true)
      },
      methods:{
        changeHeader(){
          let scrollTop =$('main').scrollTop();
          if(scrollTop>200){
            $('.index-content #header-search').css({"top":"-0.8rem","width":"5.6rem" });
            $('.index-content #xinhua-header').height("0.9rem");
          }else if(scrollTop==0){
            $('.index-content #header-search').css({"top":"0","width":"100%" });
            $('.index-content #xinhua-header').height("1.7rem");
          }
        }
      }
    }
</script>

<style>
  /*@import "../../assets/css/XhStyleOne.css";*/

</style>
