<template>
    <div class="XhFirmOrderAddress">
      <router-link to="/XhAddressManagement">
        <div class="XhFirmOrderAddress-wrapper">
          <div class="XhFirmOrderAddress-Location-wrapper">
            <div class="XhFirmOrderAddress-Location">
              <div class="XhFirmOrderAddress-Location-userName-box">
                <div class="XhFirmOrderAddress-Location-userName-wrapper">
                  <i class="iconfont XhFirmOrderAddress-Location-userName-icon">&#xe63f;</i>
                  <span class="XhFirmOrderAddress-Location-userName">wsz 157****0955</span>
                </div>
              </div>
              <div class="XhFirmOrderAddress-selection-box">
                <p class="XhFirmOrderAddress-selection">
                  北京北京市朝阳区建外街道某某小区
                </p>
              </div>
            </div>
            <div class="XhFirmOrderAddress-Location-icons-warpper">
              <i class="iconfont XhFirmOrderAddress-Location-icons">&#xe62d;</i>
            </div>
          </div>
          <div class="XhFirmOrderAddress-imgs-box">
            <div class="XhFirmOrderAddress-imgs-wrapper">
              <img class="XhFirmOrderAddress-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(this.url)">
            </div>
            <div class="XhFirmOrderAddress-imgs-wrapper">
              <img class="XhFirmOrderAddress-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(this.url)">
            </div>
            <div class="XhFirmOrderAddress-imgs-wrapper">
              <img class="XhFirmOrderAddress-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(this.url)">
            </div>
            <div class="XhFirmOrderAddress-imgs-wrapper">
              <img class="XhFirmOrderAddress-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(this.url)">
            </div>
          </div>
        </div>
      </router-link>
    </div>
</template>

XhFirmOrderCommodity
<script>
    export default {
        name: "XhFirmOrderAddress",
        data(){
          return{
            url:"//assets-m.xinhuashudian.com/assets/files/address-border.5f118a025297e6d9.png"
          }
        },
        methods:{
          urlEncode(str){
            if(str.indexOf("https:")==-1){
              str="https:"+str;
              return encodeURI(str)
            }else{
              return encodeURI(str)
            }
          },
        }
    }
</script>

<style scoped>
  .XhFirmOrderAddress {
    margin-top: .86rem;
  }
  .XhFirmOrderAddress-wrapper {
    background: #fff;
    margin-bottom: .3rem;
    text-align: left;
  }
  .XhFirmOrderAddress-Location-wrapper {
    display: flex;
    min-height: 1rem;
    max-height: 6rem;
    padding-left: .5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .XhFirmOrderAddress-Location-userName-box {
    padding: .2rem .3rem .2rem 0;
    font-size: .3rem;
    color: #000;
  }
  .XhFirmOrderAddress-selection-box {
    padding-left: .5rem;
    margin-bottom: .15rem;
    padding-right: .33rem;
    width: 100%;
    font-size: .3rem;
    color: #000;
  }
  .XhFirmOrderAddress-Location-userName-icon {
    color: #c62f2e;
    margin-right: .1rem;
  }
  .XhFirmOrderAddress-Location-icons-warpper {
    margin-right: .1rem;
  }
  .XhFirmOrderAddress-Location-icons {
    font-size: .4rem;
  }
  .XhFirmOrderAddress-imgs-box {
    overflow: hidden;
    height: .2rem;
    flex-direction: row;
    display: flex;
  }
  .XhFirmOrderAddress-imgs-wrapper {
    height: 0.2rem;
    width: 4.25rem;
  }
  .XhFirmOrderAddress-img {
    width: 100%;
  }
</style>
