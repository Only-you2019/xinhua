<template>
  <div class="XhSearchLately" v-show="history">
    <p class="XhSearchLately-title-wrapper">
      <span class="XhSearchLately-title">最近搜索</span>
      <van-icon class="XhSearchLately-title-icon" name="delete" @click="delHistory"/>
    </p>
    <ul class="XhSearchLately-List-box">
      <li class="XhSearchLately-List-wrapper">
        <span class="XhSearchLately-List">白鹿原</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "XhSearchLately",
      data(){
        return{
          history: true
        }
      },
      methods: {
        delHistory(){
          this.history=false;
        },
      }
    }
</script>

<style>
  /*@import "../../assets/css/XhStyleOne.css";*/

  .XhSearchLately{
    width: 100%;
    margin-top:.75rem ;
    float: left;
  }
  .XhSearchLately-title-wrapper{
    width: 100%;
    display: flex;
    float: left;
    align-items: center;
    justify-content: space-between;
  }
  .XhSearchLately-title{
    font-size:.3rem ;
    font-weight:800 ;
    color: #74787a;
  }
  .XhSearchLately-title-icon{
    font-size: .3rem  !important;
  }
  .XhSearchLately-List-box{
    width: 100%;
    float: left;
    margin-top: .22rem;
    display: flex;
    flex-wrap: wrap;
  }
  .XhSearchLately-List{
    background: #eaebed;
    font-size: .29rem;
    margin-right: .23rem;
    margin-bottom: .23rem;
    height: .56rem;
    border-radius: .1rem;
  }
  .XhSearchLately-List a{
    line-height: .56rem;
    margin:0 .23rem 0 .23rem;
    font-size: .3rem;
    color: #999999;
  }
</style>
