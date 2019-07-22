<template>
    <div class="theme-content flex">
      <div v-for="(item,index) in themeData" :key="index">
        <xh-index-themeList :item="item"></xh-index-themeList>
      </div>
    </div>
</template>

<script>
  import XhIndexThemeList from "./XhIndexThemeList"
    export default {
      name: "XhIndexTheme",
      props:['themeData'],
      components:{
        XhIndexThemeList
      }
    }
</script>

<style>
  /*@import "../../assets/css/XhStyleOne.css";*/
</style>
