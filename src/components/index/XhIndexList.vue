<template>
  <div>
    <section class="index-list" v-if="item.indexListBrach.length"  v-for="(item,index) in listData" :key="index">
      <xh-index-list-header :title="item"></xh-index-list-header>
      <xh-index-selectBanner :listTitle="item"></xh-index-selectBanner>
      <xh-index-list-each :each="item"></xh-index-list-each>
    </section>
  </div>
</template>

<script>
    import XhIndexListHeader from "./XhIndexListHeader"
    import XhIndexListEach from "./XhIndexListEach"
    import XhIndexSelectBanner from './XhIndexSelectBanner'
    export default {
      name:"XhIndexList",
      props:['listData'],
      components:{
        XhIndexListHeader,
        XhIndexListEach,
        XhIndexSelectBanner
      }
    }
</script>

<style>
  /*@import '../../assets/css/XhStyleOne.css';*/
</style>
