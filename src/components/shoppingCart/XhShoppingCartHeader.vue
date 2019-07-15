<template>
    <div class="XhShoppingCartHeader">
      <van-row>
        <van-col class="XhShoppingCartHeaderAndLocation" span="6" offset="9">购物车
          <van-button type="primary" @click="showPopup" class="XhShoppingCartLocationBox">
            <van-icon name="location" class="LocationIcon"/>
          </van-button>
        </van-col>
        <van-button class="XhShoppingCartHeaderManage" span="4" offset="5" @click="manage">{{header}}</van-button>
      </van-row>
      <van-popup v-model="show" position="bottom">
        <van-area :area-list="areaList"/>
      </van-popup>
    </div>
</template>

<script>
  import areaList from "@/assets/js/三级联动"
    export default {
        name: "XhShoppingCartHeader",
        props:["header"],
        data() {
          return {
            areaList,
            show: false
          }
        },
        methods: {
          showPopup() {
            this.show = true;
          },
          manage(){
            this.$emit("manages");
          }
        }
    }
</script>

<style scoped>
  .XhShoppingCartHeader{
    width: 100%;
    height: 1rem;
    background-color: #f7f7f7;
  }
  .XhShoppingCartHeaderAndLocation{
    height: 1rem;
    text-align: center;
    font-size: 0.4rem;
    color:#676767;
    line-height: 1rem;
  }
  .XhShoppingCartLocationBox{
    float: left;
    width: 0.4rem;
    height: 0.4rem;
    background-color: transparent;
    position: absolute;
    top: 0.2rem;
    left: 4rem;
    border: none;
  }
  .LocationIcon{
    font-size: 0.4rem;
    color: #676767;
  }
  .XhShoppingCartHeaderManage{
    height: 1rem;
    text-align: center;
    font-size: 0.4rem;
    color:#262423;
    line-height: 1rem;
    background-color: #f7f7f7;
    border: none;
    margin-left: 1.3rem;
  }
</style>
