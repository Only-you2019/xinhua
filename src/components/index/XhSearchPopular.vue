<template>
  <div class="XhSearchPopular">
    <p class="XhSearchPopular-title-wrapper">
      <span class="XhSearchPopular-title">热门搜索</span>
    </p>
    <ul class="XhSearchPopular-list-wrapper">
      <li class="XhSearchPopular-list" v-for="(before,index) in searchBefore" :key="index">
        <a class="XhSearchPopular-list-Jump" href="" @click="searchToList(before)">{{before}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "XhSearchPopular",
        props: {
          searchBefore:Array
        },
      methods:{
        searchToList(key){
          this.$router.push({path: '/XhProductsList', query: {keyword: key}})
        }
      }
    }
</script>

<style>
  /*@import "../../assets/css/XhStyleOne.css";*/

  .XhSearchPopular{
    width: 100%;
    margin-top:.75rem ;
    float: left;
  }
  .XhSearchPopular-title-wrapper{
    width: 100%;
    display: flex;
    float: left;
    align-items: center;
    justify-content: space-between;
  }
  .XhSearchPopular-title{
    font-size:.3rem ;
    font-weight:800 ;
    color: #74787a;
  }
  .XhSearchPopular-list-wrapper{
    width: 100%;
    float: left;
    margin-top: .22rem;
    display: flex;
    flex-wrap: wrap;
  }
  .XhSearchPopular-list{
    background: #eaebed;
    font-size: .29rem;
    margin-right: .23rem;
    margin-bottom: .23rem;
    height: .56rem;
    border-radius: .1rem;
  }
  .XhSearchPopular-list-Jump{
    line-height: .56rem;
    margin:0 .23rem 0 .23rem;
    font-size: .3rem;
    color: #999999;
  }
</style>
