<template>
<!--  首部-->
    <div>
      <div class="XhProductDetailtop">
        <router-link to="/XhClassify">
          <van-icon name="arrow-left" class="topiconXhProductDetailtop"/>
        </router-link>
        <div>
          <input type="text" name="" id="">
          <van-icon name="search" class="fangdajingXhProductDetailtop" />
        </div>
        <div @click="showCount">
          <van-icon name="qr" v-show="shows" class="topiconXhProductDetailtop"  />
          <van-icon name="apps-o" v-show="!shows" class="topiconXhProductDetailtop"  />
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhProductsListtop",
        data(){
         return{
           shows:true
         }
        },
      methods: {
        showCount(){
          this.shows = !this.shows;
          this.$emit("showCountaa")
        }
      },
    }
</script>

<style scoped>
  @import "../../assets/css/XhProductsList.css";

</style>
