<template>
  <div class="XhShoppingCartIntroduce">
    <div class="XhShoppingCartIntroduce-title-warpper">
      <p class="XhShoppingCartIntroduce-title">
        新华推荐
      </p>
    </div>
    <div class="XhShoppingCartIntroduce-box">
      <ul class="XhShoppingCartIntroduce-list-warpper">
        <li class="XhShoppingCartIntroduce-list">
          <router-link to="">
            <div class="XhShoppingCartIntroduce-img-wrapper">
              <img class="XhShoppingCartIntroduce-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(this.url)" alt="">
            </div>
            <p class="XhShoppingCartIntroduce-list-title">运营之光2.0：我的互联网运营方法论与自白</p>
            <p class="XhShoppingCartIntroduce-list-author">黄有璨</p>
            <p class="XhShoppingCartIntroduce-list-price">￥99.00</p>
          </router-link>
        </li>
        <li class="XhShoppingCartIntroduce-list">
          <router-link to="">
            <div class="XhShoppingCartIntroduce-img-wrapper">
              <img class="XhShoppingCartIntroduce-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(this.url)" >
            </div>
            <p class="XhShoppingCartIntroduce-list-title">余华作品：我只知道人是什么</p>
            <p class="XhShoppingCartIntroduce-list-author">余华</p>
            <p class="XhShoppingCartIntroduce-list-price">￥48.00</p>
          </router-link>
        </li>
        <li class="XhShoppingCartIntroduce-list">
          <router-link to="">
            <div class="XhShoppingCartIntroduce-img-wrapper">
              <img class="XhShoppingCartIntroduce-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(this.url)" >
            </div>
            <p class="XhShoppingCartIntroduce-list-title">月亮冰激凌(精)</p>
            <p class="XhShoppingCartIntroduce-list-author">(韩)白希那</p>
            <p class="XhShoppingCartIntroduce-list-price">￥36.10</p>
          </router-link>
        </li>
        <li class="XhShoppingCartIntroduce-list">
          <router-link to="">
            <div class="XhShoppingCartIntroduce-img-wrapper">
              <img class="XhShoppingCartIntroduce-img" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(this.url)" >
            </div>
            <p class="XhShoppingCartIntroduce-list-title">俞敏洪：在人生的更高处相见</p>
            <p class="XhShoppingCartIntroduce-list-author">俞敏洪</p>
            <p class="XhShoppingCartIntroduce-list-price">￥47.31</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "XhShoppingCartIntroduce",
    data(){
      return{
        url:"//img2.xinhuashudian.com/bookbasepic/C/02312/3664061-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200"
      }
    },
    methods:{
      urlEncode(str){
        if(str.indexOf("https:")==-1){
          str="https:"+str
          return encodeURI(str)
        }else{
          return encodeURI(str)
        }
      },
    }
  }
</script>

<style scoped>
  .XhShoppingCartIntroduce {
    margin-top: .2rem;
    background: #f7f7f7;
  }
  .XhShoppingCartIntroduce-title-warpper {
    padding: .12rem .3rem;
  }
  .XhShoppingCartIntroduce-title {
    font-size: .4rem;
  }
  .XhShoppingCartIntroduce-box {
    margin-top: .13rem;
  }
  .XhShoppingCartIntroduce-list-warpper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    -webkit-box-pack: justify;
  }
  .XhShoppingCartIntroduce-list {
    height: 5.45rem;
    width: 3.41rem;
    padding: .16rem;
    border-radius: .08rem;
    margin-bottom: .16rem;
    background-color: #fff;
  }
  .XhShoppingCartIntroduce-img-wrapper {
    height: 3.09rem;
    width: 3.09rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .XhShoppingCartIntroduce-img {
    height: 100%;
  }
  .XhShoppingCartIntroduce-list-title {
    box-sizing: inherit;
    color: #363433;
    height: .8rem;
    line-height: .4rem;
    margin-top: .28rem;
  }
  .XhShoppingCartIntroduce-list-author {
    box-sizing: inherit;
    color: #999;
    font-size: .24rem;
    height: .32rem;
    line-height: .28rem;
    margin-top: .08rem;
  }
  .XhShoppingCartIntroduce-list-price {
    box-sizing: inherit;
    color: #c62f2e;
    font-size: .32rem;
    height: .4rem;
    line-height: .4rem;
    margin-top: .08rem;
  }
</style>
