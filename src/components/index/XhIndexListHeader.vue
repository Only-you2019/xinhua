<template>
    <div class="index-list-title flex">
      <h3 v-show="title.tlt">{{title.tlt}}</h3>
      <router-link v-show="title.moreLink" class="more-page" to="/XhMorePage">
        <span v-show="title.moreLink">更多 >></span>
      </router-link>
    </div>
</template>

<script>
    export default {
      name: "XhIndexListHeader",
      props:["title"]
    }
</script>

<style scoped>
  @import '../../assets/css/index.css';
</style>
