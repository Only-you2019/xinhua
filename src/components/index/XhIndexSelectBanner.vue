<template>
    <div class="select-banner">
      <a href="">
        <img v-if="listTitle.pic"  :src="listTitle.pic" alt="">
      </a>
    </div>
</template>

<script>
    export default {
      name: "XhIndexSelectBanner",
      props:["listTitle"]
    }
</script>

<style>
  /*@import '../../assets/css/index.css';*/
</style>
