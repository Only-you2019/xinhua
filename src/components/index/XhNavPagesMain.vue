<template>
  <div class="XhNavPagesMain">
    <div class="XhNavPagesMain-ImgWrapper" v-for="item of ImgUrls">
      <router-link  to="/">
        <img class="XhNavPagesMain-img" :src="item.image.src">
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "XhNavPagesMain",
        props: {
          ImgUrls: Array
        }
    }
</script>

<style scoped>
  .XhNavPagesMain {
    padding-top: 0.25rem;
    flex: 1;
  }
  .XhNavPagesMain-img {
    width: 100%;
  }

</style>
