<template>
  <router-link :to="item.path">
    <img :src="item.src" alt="">
    <p>{{item.title}}</p>
  </router-link>
</template>

<script>
    export default {
        name: "XhIndexNav",
        props:['item']
    }
</script>

<style>
  /*@import "../../assets/css/XhStyleOne.css";*/
</style>
