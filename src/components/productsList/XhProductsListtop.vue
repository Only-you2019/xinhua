<template>
<!--  首部-->
    <div>
      <div class="XhProductDetailtop">
        <router-link to="/XhClassify">
          <van-icon name="arrow-left" class="topiconXhProductDetailtop"/>
        </router-link>
        <div>
          <input type="text" name="" id="" @click="$router.push('/XhSearch')">
          <van-icon name="search" class="fangdajingXhProductDetailtop" />
        </div>
        <div >
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

      },
    }
</script>

<style>
  /*@import "../../assets/css/XhProductsList.css";*/
  /*@import "../../assets/css/XhStyleOne.css";*/

</style>
