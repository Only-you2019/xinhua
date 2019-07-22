<template>
  <div class="XhSearchHeader">
    <div class="SearchHeaderCenter">
      <input class="SearchHeaderCenter-input" v-model="title" @input="changeTitle()" type="text" placeholder="应物兄">
      <p class="SearchHeaderCenter-icon">
        <van-icon name="search" v-if="!title" @click="search"/>
        <van-icon name="cross" v-if="title" @click="delKey"/>
      </p>
      <router-link to="">
        <span class="SearchHeaderCenter-cancel" @click="$router.back()">取消</span>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "XhSearchHeader",
      data(){
          return{
            title:''
          }
      },
        components: {

        },
        methods:{
          search(){
            console.log(1);
          },
          delKey(){
            this.title=""
            this.$emit('changeTitle',this.title);
          },
          changeTitle(){
            this.$emit('changeTitle',this.title);
          }
        }
    }
</script>

<style>
  /*@import "../../assets/css/XhStyleOne.css";*/

  .XhSearchHeader{
    width: 100%;
    height: .88rem;
    float: left;
  }
  .SearchHeaderCenter{
    width: 7.09rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .SearchHeaderCenter-input {
    display: block;
    width: 5.5rem;
    height:.56rem ;
    background: #FFFFFF;
    border: 0 !important;
  }
  .SearchHeaderCenter-icon{
    width: .68rem;
    height:.56rem;
    background: #FFFFFF;
    font-size: .3rem;
    line-height: .66rem  !important;
    text-align: center;
    margin-right: .1rem;
    color: #999999;
    font-weight: 900;
  }
  .SearchHeaderCenter-cancel{
    font-size:.27rem ;
    color:black ;
  }
</style>
