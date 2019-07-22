<template>
  <div class="XhSearchList">
    <ul class="XhSearchList-box" v-if="title">
      <li class="XhSearchList-wrapper"  v-for="(item,index) in pendingData" :key="index">
        <span class="XhSearchList-column" @click="searchToList(item.name)">{{item.name}}</span>
        <van-icon class="XhSearchList-icon" name="exchange" />
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "XhSearchList",
        props: {
          title:String,
          pendingData:Array,
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

  .XhSearchList-box{
    width: 7.09rem;
    margin: .7rem  auto;
    text-align: left;
  }
  .XhSearchList-wrapper{
    width: 100%;
    height: .9rem;
    display: flex;
    line-height: .9rem;
    border-bottom: 2px #eeeeee solid;
    font-size: .3rem;
    color: #999999;
  }
  .XhSearchList-column{
    display: inline-block;
    width: 86%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .XhSearchList-icon{
    font-size: .4rem;
    line-height: .86rem;
  }
</style>
