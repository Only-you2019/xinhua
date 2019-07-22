<template>
  <div class="XhNavPagesRecommenDation">
    <div class="XhNavPagesRecommenDation-title-warpper">
      <p class="XhNavPagesRecommenDation-title">
        新华推荐
      </p>
    </div>
    <div class="XhNavPagesRecommenDation-box">
      <ul class="XhNavPagesRecommenDation-list-warpper">
        <li class="XhNavPagesRecommenDation-list">
          <router-link to="">
            <div class="XhNavPagesRecommenDation-img-wrapper">
              <img class="XhNavPagesRecommenDation-img" src="https://img1.xinhuashudian.com/images/2018/10/19/f5f4d657-bda2-40bc-842d-33516d12b083.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" >
            </div>
            <p class="XhNavPagesRecommenDation-list-title">运营之光2.0：我的互联网运营方法论与自白</p>
            <p class="XhNavPagesRecommenDation-list-author">黄有璨</p>
            <p class="XhNavPagesRecommenDation-list-price">￥99.00</p>
          </router-link>
        </li>
        <li class="XhNavPagesRecommenDation-list">
          <router-link to="">
            <div class="XhNavPagesRecommenDation-img-wrapper">
              <img class="XhNavPagesRecommenDation-img" src="https://img1.xinhuashudian.com/images/2018/10/19/aa47dcba-4e91-4638-8e99-f8305504e101.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" >
            </div>
            <p class="XhNavPagesRecommenDation-list-title">余华作品：我只知道人是什么</p>
            <p class="XhNavPagesRecommenDation-list-author">余华</p>
            <p class="XhNavPagesRecommenDation-list-price">￥48.00</p>
          </router-link>
        </li>
        <li class="XhNavPagesRecommenDation-list">
          <router-link to="">
            <div class="XhNavPagesRecommenDation-img-wrapper">
              <img class="XhNavPagesRecommenDation-img" src="https://img1.xinhuashudian.com/images/2018/11/01/2d874ef1-408d-4e2a-a089-fa900b346666.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" >
            </div>
            <p class="XhNavPagesRecommenDation-list-title">月亮冰激凌(精)</p>
            <p class="XhNavPagesRecommenDation-list-author">(韩)白希那</p>
            <p class="XhNavPagesRecommenDation-list-price">￥36.10</p>
          </router-link>
        </li>
        <li class="XhNavPagesRecommenDation-list">
          <router-link to="">
            <div class="XhNavPagesRecommenDation-img-wrapper">
              <img class="XhNavPagesRecommenDation-img" src="https://img1.xinhuashudian.com/images/2018/10/23/b401e5e6-29e9-4e25-8bcb-236ea25b073b.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200" >
            </div>
            <p class="XhNavPagesRecommenDation-list-title">俞敏洪：在人生的更高处相见</p>
            <p class="XhNavPagesRecommenDation-list-author">俞敏洪</p>
            <p class="XhNavPagesRecommenDation-list-price">￥47.31</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "XhNavPagesRecommenDation"
  }
</script>

<style>
  .XhNavPagesRecommenDation {
    margin-top: .2rem;
    background: #fff;
    text-align: left;
  }
  .XhNavPagesRecommenDation-title-warpper {
    padding: .12rem .3rem;
  }
  .XhNavPagesRecommenDation-title {
    font-size: .4rem;
  }
  .XhNavPagesRecommenDation-box {
    margin-top: .13rem;
  }
  .XhNavPagesRecommenDation-list-warpper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    -webkit-box-pack: justify;
  }
  .XhNavPagesRecommenDation-list {
    height: 5.45rem;
    width: 3.41rem;
    padding: .16rem;
    border-radius: .08rem;
    margin-bottom: .16rem;
  }
  .XhNavPagesRecommenDation-img-wrapper {
    height: 3.09rem;
    width: 3.09rem;
    display: flex;
    justify-content: center;
    align-items: center;  
  }
  .XhNavPagesRecommenDation-img {
    height: 100%;
  }
  .XhNavPagesRecommenDation-list-title {
    box-sizing: inherit;
    color: #363433;
    height: .8rem;
    line-height: .4rem;
    margin-top: .28rem;
  }
  .XhNavPagesRecommenDation-list-author {
    box-sizing: inherit;
    color: #999;
    font-size: .24rem;
    height: .32rem;
    line-height: .28rem;
    margin-top: .08rem;
  }
  .XhNavPagesRecommenDation-list-price {
    box-sizing: inherit;
    color: #c62f2e;
    font-size: .32rem;
    height: .4rem;
    line-height: .4rem;
    margin-top: .08rem; 
  }
</style>

