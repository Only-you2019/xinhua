<template>
  <div class="theme-list">
    <router-link to="/XhThemePages" v-for="(p,index) in item.images" :key="index" href="">
      <img :src="p.src" alt="">
    </router-link>
  </div>

</template>

<script>
    export default {
      name: "XhIndexThemeList",
      props:["item"]
    }
</script>

<style scoped>
/*@import "../../assets/css/index.css";*/
</style>
