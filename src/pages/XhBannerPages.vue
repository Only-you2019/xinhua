<template>
  <div class="xhBannerPages">
    <!--  头部-->
    <div class="banner-head">
      <router-link to="/">
        <i class="iconfont icon-fanhui" @click="$router.back()"></i>
      </router-link>
      <span class="head-name">新华书店网上商城...</span>
      <i class="iconfont icon-fenxiang"></i>
    </div>
    <!-- 头部结束-->

    <!--  主体内容-->
    <div class="content">
      <div class="section-title">
        <img class="titleBg" :src="pic" alt />
      </div>
      <!-- 具体分类-->
      <div class="popular" v-for="(popularInfoItem,vId) in popularInfo" :key="vId">
        <xh-into-banner-swiper :item="popularInfoItem"></xh-into-banner-swiper>
      </div>
      <!-- 主体内容结束-->
    </div>
  </div>
</template>

<script>
import api from "../XinHuaApi";
import XhIntoBannerSwiper from "../components/commons/XhIntoBannerSwiper";
export default {
  name: "XhBannerPages",
  components: {
    "xh-into-banner-swiper": XhIntoBannerSwiper
  },
  data() {
    return {
      pic: "",
      popularInfo: [],
      page: {},
      designData: {},
      serviceData: {}
    };
  },
  methods: {
    // 从this.serviceData里面查找groupId是body_3，并且id是1010000103205007的item
    findItemById(groudId, id) {
      // item的格式是：{img:'', name: '', price: ''}
      var item = { goodsId:"",img: "", name: "", price: "" };
      for (let dataItem of this.serviceData[groudId]._DATA_) {
        if (dataItem.itemId == id) {
          var rawUrl =
            dataItem.mainImage.indexOf("https:") == 0
              ? dataItem.mainImage
              : "https:" + dataItem.mainImage;
          item.goodsId =  dataItem.itemId;
          item.img = "http://api.hll666.xyz/api/xinhua/img?imgUrl=" + rawUrl;
          item.name = dataItem.itemName;
          item.price = "￥" + (dataItem.lowPrice / 100).toFixed(2);
          break;
        }
      }
      return item;
    }
  },
  created() {
    let me = this;
    api.get("/api/xinhua/carousel/info", { name: "zhuanti-xuexiqiangguoban" })
      .then(responseData => {
        // 判断http请求状态码,200为请求成功
        if (responseData.status === 200 && responseData.data.status === 0) {
          // responseData.datas

          me.page = responseData.data.datas.page;
          console.log(responseData.data.datas)

          me.designData = JSON.parse(responseData.data.datas.designData.body);

          me.serviceData = responseData.data.datas.serviceData;

          //获取head图片
          me.designData.forEach(designItem => {
            if (designItem.path == "design/image") {
              me.pic = designItem.config.image.src;
            } else if (designItem.path == "design/sectionspopular") {
              me.popularInfo.push({
                titlePic: designItem.config.sectionTitle.src,
                ids: designItem.config.ids.split(","),
                swiperSlide: [],
                groupId: designItem.id // groupId就是id=body_3
              });
            }
          });

          me.popularInfo.forEach(popularItem => {
            var newItem;

            for (var i = 0; i < popularItem.ids.length; i++) {
              if (i % 6 == 0) {
                newItem = { itemList: [] };
                popularItem.swiperSlide.push(newItem);
              }

              // 查找item，item格式是{img:'', name: '', price: ''}
              var item = me.findItemById(
                popularItem.groupId,
                popularItem.ids[i]
              );
              newItem.itemList.push(item);
            }
          });
        }
      })
      .catch(err => {
        // 请求错误返回错误信息
        console.log(err);
      })
      console.log(this.popularInfo);
  }
};
</script>

<style scoped>
@import "../assets/css/XhBannerPages.css";
</style>
