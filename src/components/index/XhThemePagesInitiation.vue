<template>
  <div class="XhThemePagesInitiation">
    <div class="XhThemePagesInitiation-title-wrapper">
      <h2 class="XhThemePagesInitiation-title">启蒙益智</h2>
    </div>
    <div class="XhThemePagesInitiation-list-box" >
      <ul class="XhThemePagesInitiation-list-wrapper">
        <li class="XhThemePagesInitiation-list">
          <div class="XhThemePagesInitiation-list-img-wrapper">
            <img class="XhThemePagesInitiation-list-img" src="https://ws1.sinaimg.cn/large/005S8gRNly1g50kg7j6fjj305k03faa0.jpg" alt="">
          </div>
          <div class="XhThemePagesInitiation-list-content">
            <p class="XhThemePagesInitiation-list-content-title">小象小象你去哪儿/宝宝的第一套楼梯书</p>
            <p class="XhThemePagesInitiation-list-content-introduce">尚童童书·宝宝的第一套楼梯书 小象，小象，你去哪儿？</p>
            <p class="XhThemePagesInitiation-list-content-Price">¥34.20</p>
          </div>
        </li>
        <li class="XhThemePagesInitiation-list">
          <div class="XhThemePagesInitiation-list-img-wrapper">
            <img class="XhThemePagesInitiation-list-img" src="https://ws1.sinaimg.cn/large/005S8gRNly1g50kk8tzdnj303b05k747.jpg" alt="">
          </div>
          <div class="XhThemePagesInitiation-list-content">
            <p class="XhThemePagesInitiation-list-content-title">蒲蒲兰绘本馆：小熊宝宝认知绘本(共10册) [0-2岁]</p>
            <p class="XhThemePagesInitiation-list-content-introduce">深受各位喜爱的“小熊宝宝绘本系列”由佐佐木洋子编绘。内容侧重于认知，包括了低幼小朋友需要积累的的各种生活常识，如数字、商店、交通工具、英文、时间、大小等。</p>
            <p class="XhThemePagesInitiation-list-content-Price">¥64.60</p>
          </div>
        </li>
        <li class="XhThemePagesInitiation-list">
          <div class="XhThemePagesInitiation-list-img-wrapper">
            <img class="XhThemePagesInitiation-list-img" src="https://ws1.sinaimg.cn/large/005S8gRNly1g50kg7j6fjj305k03faa0.jpg" alt="">
          </div>
          <div class="XhThemePagesInitiation-list-content">
            <p class="XhThemePagesInitiation-list-content-title">小象小象你去哪儿/宝宝的第一套楼梯书</p>
            <p class="XhThemePagesInitiation-list-content-introduce">尚童童书·宝宝的第一套楼梯书 小象，小象，你去哪儿？</p>
            <p class="XhThemePagesInitiation-list-content-Price">¥34.20</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
    export default {
        name: "XhThemePagesInitiation"
    }
</script>

<style>
  .XhThemePagesInitiation {
    margin-top: .1rem;
    padding-top: .3rem;
    background: #fff;
    text-align: left;
  }
  .XhThemePagesInitiation-title-wrapper {
    padding: .1rem .3rem;
  }
  .XhThemePagesInitiation-list {
    height: 2.4rem;
    margin-bottom: 0.3rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    display: flex;
  }
  .XhThemePagesInitiation-list-img-wrapper {
    width: 1.92rem;
    height: 1.92rem;
    position: relative;
    overflow: hidden;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    flex-direction: column;
    flex-basis: auto;
  }
  .XhThemePagesInitiation-list-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .XhThemePagesInitiation-list-content {
    height: 2.4rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0.2rem;
    -webkit-box-pack: justify
  }
  .XhThemePagesInitiation-list-content-title {
    box-sizing: inherit;
    color: rgb(54, 52, 51);
    font-size: 0.26rem;
    font-weight: bold;
    line-height: 0.4rem;
  }
  .XhThemePagesInitiation-list-content-introduce {
    box-sizing: inherit;
    color: rgb(153, 153, 153);
    font-size: 0.3rem;
    height: .82rem;
    line-height: 0.45rem;
    margin-top: 0.1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
  .XhThemePagesInitiation-list-content-Price{
    box-sizing: inherit;
    color: rgb(198, 47, 46);
    font-size: 0.3rem;
    line-height: .6rem;
  }

</style>
