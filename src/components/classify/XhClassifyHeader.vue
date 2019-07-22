<template>
  <div class="xinhua-header">
    <header class="rel">
      <div class="header-title flex">
        <i class="iconfont icon-saoyisao"></i>
        <router-link to="/XhMessage">
          <i class="iconfont icon-tushuguan"></i>
        </router-link>
      </div>
      <router-link to="/XhSearch" class="search abs">
        <div class="header-search rel">
          <span class="abs">{{defaultKey}}</span>
          <i class="iconfont icon-sousuo abs" ></i>
        </div>
      </router-link>
    </header>
  </div>
</template>

<script>
  export default {
    name: "XhHeader",
    props:['defaultKey']
  }
</script>

<style scoped>
  @import "../../assets/css/classify.css";

</style>
